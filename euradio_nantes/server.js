// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

// Minimum routing: serve static content from the html directory
app.use(express.static(path.join(__dirname, 'public')));

// You can then add whatever routing code you need
app.get("/public/data/*", function(req, res) {
    var file = req.url.replace('/public/data/', '');
    var json = JSON.parse(fs.readFileSync('euradio_nantes/public/data/' + file, 'utf8'));
    res.json(json);
});

/*app.get("/public/fonts/*", function(req, res) {
    var file = req.url.replace('/public/fonts/', '');
    var font =
});*/

// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;
