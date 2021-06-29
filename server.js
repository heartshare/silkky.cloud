'use strict';
const fastify = require('fastify')({ logger: true });
const upath = require('upath');

// Application constraints
const port = 8080;
const host = '0.0.0.0';

// fastify-helmet plugin for important security headers
fastify.register(require('fastify-helmet'), { contentSecurityPolicy: false });

// point-of-view plugin for pug
fastify.register(require('point-of-view'), {
    engine: {
        pug: require('pug')
    },
    root: upath.join(process.cwd(), 'views'),
});

// fastify-static plugin for serving static files
// 'public'
fastify.register(require('fastify-static'), {root: upath.join(process.cwd(), 'public')});
// 'node_modules'
// Bootstrap javascript
fastify.get('/js/bootstrap.min.js', async (request, reply) => {
    return reply.sendFile('bootstrap.min.js', upath.join(process.cwd(), 'node_modules/bootstrap/dist/js'));
});
fastify.get('/js/bootstrap.min.js.map', async (request, reply) => {
    return reply.sendFile('bootstrap.min.js.map', upath.join(process.cwd(), 'node_modules/bootstrap/dist/js'));
});
// Popperjs javascript
fastify.get('/js/popper.min.js', async (request, reply) => {
    return reply.sendFile('popper.min.js', upath.join(process.cwd(), 'node_modules/@popperjs/core/dist/umd'));
});
fastify.get('/js/popper.min.js.map', async (request, reply) => {
    return reply.sendFile('popper.min.js.map', upath.join(process.cwd(), 'node_modules/@popperjs/core/dist/umd'));
});
// Bootstrap css
fastify.get('/css/bootstrap.min.css', async (request, reply) => {
    return reply.sendFile('bootstrap.min.css', upath.join(process.cwd(), 'node_modules/bootstrap/dist/css'));
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