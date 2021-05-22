'use strict';

// Constraints
const PORT = '8080';
const HOST = '0.0.0.0';

// Node App
var express = require('express');
const pug = require('pug');
const path = require('path')
// Initialize Express
var app = express();
// Set static directory
app.use(express.static(path.join(__dirname, 'public')));
// Set views directory for pug
app.set('views', './views')
// Set the view engine to pug
app.set('view engine', 'pug');

// Bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/@popperjs/dist/esm')))
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

// About Directory
app.get('/about', function (req, res) {
  res.render('pages/about')
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