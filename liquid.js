'use strict';
const { Liquid } = require('liquidjs');
const fs = require('graceful-fs');

const engine = new Liquid({
    extname: '.liquid'
});

// Index
engine.renderFile('pages/index').then(file => {
    fs.writeFile('dist/index.html', file);
});
// Contribute
engine.renderFile('pages/contribute').then(file => {
    fs.writeFile('dist/contribute.html', file);
});
// Applications
engine.renderFile('pages/applications').then(file => {
    fs.writeFile('dist/applications.html', file);
});
// Support
engine.renderFile('pages/contact').then(file => {
    fs.writeFile('dist/contact.html', file);
});
// About
engine.renderFile('pages/about').then(file => {
    fs.writeFile('dist/about.html', file);
});
// Privacy Policy
engine.renderFile('pages/privacy').then(file => {
    fs.writeFile('dist/privacy.html', file);
});
// Terms of Service
engine.renderFile('pages/tos').then(file => {
    fs.writeFile('dist/tos.html', file);
});
// Legal Notice
engine.renderFile('pages/legal').then(file => {
    fs.writeFile('dist/legal.html', file);
});
// 404
engine.renderFile('pages/404').then(file => {
    fs.writeFile('dist/404.html', file);
});
