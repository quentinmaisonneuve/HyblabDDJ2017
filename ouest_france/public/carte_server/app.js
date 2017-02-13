var express = require('express');
var app = express();
var url = require("url");


app.get('*', function(req, res) {
    var page = url.parse(req.url).pathname;
    res.setHeader('Content-Type', "text/html");
    console.log(page);
    if (page == "/") {
        res.sendfile(__dirname + "/index.html");
    } else {
        res.sendfile(__dirname + page);
    }
});

app.listen(8080);