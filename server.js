'use strict';
const express = require('express');
const upath = require('upath');

const port = '8080';
const host = '192.168.1.118';
const app = express();

app.use(express.static(upath.join(process.cwd(), 'dist'), {
    extensions: 'html'
}));

app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(upath.join(process.cwd(), 'dist/404.html'));
});

app.listen(port, host);
console.log(`THE SUPER FUCKING BORING PROJECT is alive at http://${host}:${port}`);
