'use strict';
const fastify = require('fastify')({ logger: true });
const serveStatic = require('serve-static');
const upath = require('upath');

// Application constraints
const port = 8080;
const host = '0.0.0.0';

// middie plugin to register express middleware
fastify.register(require('middie'));

// fastify-helmet plugin for important security headers
fastify.register(require('fastify-helmet'), { contentSecurityPolicy: false });

// point-of-view plugin for pug
fastify.register(require('point-of-view'), {
    engine: {
        pug: require('pug')
    },
    root: upath.join(process.cwd(), 'views'),
});

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

// Error handling
fastify.setNotFoundHandler(async (request, reply) => {
    reply
        .code(404)
        .view('error/404')
});

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
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
// serve-static middleware for serving static files
fastify.register(staticFiles);

// Start!
const start = async () => {
    try {
        await fastify.listen(port, host);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();