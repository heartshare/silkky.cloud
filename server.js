'use strict';

// Constraints
const PORT = 8080;
const HOST = '0.0.0.0';

// Node App
var express = require('express');
const ejs = require('ejs');
// Initialize Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on

app.listen(PORT, HOST);
console.log(`silkky.cloud is alive at http://${HOST}:${PORT}!`);

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