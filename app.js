var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/counter.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/Scripts/counter.js'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});