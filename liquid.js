'use strict';
const { Liquid } = require('liquidjs');
const upath = require('upath');
const fs = require('graceful-fs');

const engine = new Liquid({
    extname: '.liquid'
});

// Index
engine.renderFile('pages/index').then(file => {
    fs.writeFile('dist/index.html', file);
});
// Privacy Policy
engine.renderFile('pages/privacy').then(file => {
    fs.writeFile('dist/privacy.html', file);
});
// Terms of Service
engine.renderFile('pages/tos').then(file => {
    fs.writeFile('dist/tos.html', file);
});
// 404
engine.renderFile('pages/404').then(file => {
    fs.writeFile('dist/404.html', file);
});