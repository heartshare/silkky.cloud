'use strict';
const fastify = require('fastify')({
    logger: {
        level: 'warn'
    }
});
const serveStatic = require('serve-static');
const upath = require('upath');

// Application constraints
const port = 8080;
const host = '127.0.0.1';

// Serve static files
const staticFiles = async () => {
    try {
        // 'public'
        fastify.use('/', serveStatic(upath.join(process.cwd(), 'public')));
        // 'node_modules'
        // Bootstrap javascript
        fastify.use('/js', serveStatic(upath.join(process.cwd(), 'node_modules/bootstrap/dist/js')));
        // Popperjs javascript
        fastify.use('/js', serveStatic(upath.join(process.cwd(), 'node_modules/@popperjs/core/dist/umd')));
        // Bootstrap css
        fastify.use('/css', serveStatic(upath.join(process.cwd(), 'node_modules/bootstrap/dist/css')));

        // Return the fastify object
        return fastify;
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

// Build web server
const build = async () => {
    try {
        // Fastify plugins
        // middie plugin to register express middleware
        await fastify.register(require('middie'));
        // fastify-helmet plugin for important security headers
        await fastify.register(require('fastify-helmet'), {
            contentSecurityPolicy: false
        });
        // point-of-view plugin for pug
        await fastify.register(require('point-of-view'), {
            engine: {
                pug: require('pug')
            },
            root: upath.join(process.cwd(), 'views')
        });
        // serve-static express middleware for serving static files
        await fastify.register(staticFiles);

        // Routes
        // Index
        fastify.get('/', async (request, reply) => { return reply.view('pages/index'); });
        // Contribute
        fastify.get('/contribute', async (request, reply) => { return reply.view('pages/contribute'); });
        // Help
        fastify.get('/help', async (request, reply) => { return reply.view('pages/help'); });
        // About
        fastify.get('/about', async (request, reply) => { return reply.view('pages/about'); });
        // Terms of service
        fastify.get('/tos', async (request, reply) => { return reply.view('pages/tos'); });
        // Privacy policy
        fastify.get('/privacy', async (request, reply) => { return reply.view('pages/privacy'); });
        // Legal notice
        fastify.get('/legal', async (request, reply) => { return reply.view('pages/legal'); });

        // 404 error handling
        fastify.setNotFoundHandler(async (request, reply) => {
            reply
                .code(404)
                .view('error/404')
        });

        // Return the fastify object
        return fastify;
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

// Start!
const start = async () => {
    try {
        await build()
            .then( fastify => {
                fastify.listen(port, host);
                console.log(`THE_REALLY_BORING_PROJECT is alive at: http://${host}:${port}`);
            });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();