'use strict';
const express = require('express');
const helmet = require('helmet');
const path = require('path');

function hostCheck() {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    return '127.0.0.1'
  }
  else {
    return '0.0.0.0'
  }
}
// Constraints
const port = 8080;
const host = hostCheck();

const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

// Static files 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/@popperjs/dist/esm')));

// This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Routes
// Root Directory
app.get('/', function (req, res) {
  res.render('pages/index');
});
// Donate Directory
app.get('/contribute', function (req, res) {
  res.render('pages/contribute');
});
// Help Directory
app.get('/help', function (req, res) {
  res.render('pages/help');
});
// About Directory
app.get('/about', function (req, res) {
  res.render('pages/about');
});
// Terms of Service Directory
app.get('/tos', function (req, res) {
  res.render('pages/tos');
});
// Privacy Policy Directory
app.get('/privacy', function (req, res) {
  res.render('pages/privacy');
});
// Legal Notice Directory
app.get('/legal', function (req, res) {
  res.render('pages/legal');
});
// Error Handling
// 404
app.use(function (req, res, next) {
  res.status(404).render("error/404");
})
// 500
app.use(function (req, res, err, next) {
  console.error(err.stack);
  res.status(500).render('error/500');
  res.send('500 Server Error');
});

// Start
app.listen(port, host, () => {
  console.log(`Silkky.Cloud is alive at http://${host}:${port}!`);
});