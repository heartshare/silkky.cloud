'use strict';

// Constraints
const PORT = 8080;
const HOST = '0.0.0.0';

// Node App
var express = require('express');
const ejs = require('ejs');
const path = require('path')
// Initialize Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');

// Bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/@popperjs/dist/cjs')))
// Icons
app.use('/assets/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/icons')))

// GET Routes
// Root Directory
app.get('/', function (req, res) {
  res.render('pages/index')
});

// Donate Directory
app.get('/donate', function (req, res) {
  res.render('pages/donate')
});

// Help Directory
app.get('/help', function (req, res) {
  res.render('pages/help')
});

// Terms of Service Directory
app.get('/tos', function (req, res) {
  res.render('pages/tos')
});

// Privacy Policy Directory
app.get('/privacy', function (req, res) {
  res.render('pages/privacy')
});

// Legal Notice Directory
app.get('/legal', function (req, res) {
  res.render('pages/legal')
});

// Start App
app.listen(PORT, HOST);
console.log(`Silkky.Cloud is alive at http://${HOST}:${PORT}!`);