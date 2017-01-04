 "use strict";

// By default we will lanche de the API version of the server
// If you want the file only version, set mode="file"
var mode="api";
var myserver;

if( mode == "api")
  myserver = require('./server-api');
else
  myserver = require('./server-file');

// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = myserver;
