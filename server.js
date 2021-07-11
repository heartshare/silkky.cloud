'use strict';
const express = require('express');
const upath = require('upath');

// Constraints
const port = '8080';
const host = '192.168.1.118';
const app = express();

app.use(express.static(upath.join(process.cwd(), 'dist'), {
    extensions: 'html'
}));

app.listen(port, host);
console.log(`THE_BORING_PROJECT is alive at http://${host}:${port}`);