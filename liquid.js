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
// Applications
engine.renderFile('pages/applications').then(file => {
    fs.writeFile('dist/applications.html', file);
});
// 404
engine.renderFile('pages/404').then(file => {
    fs.writeFile('dist/404.html', file);
});