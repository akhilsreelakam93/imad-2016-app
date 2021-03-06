var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/bomb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bomb.png'));
});

app.get('/ui/myflag.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myflag.png'));
});

app.get('/ui/qmark.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'qmark.png'));
});

app.get('/ui/sad.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sad.jpeg'));
});

app.get('/ui/smiley.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'smiley.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});



/* (THIS IS MY ORIGINAL INITIAL CODE)
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});*/
