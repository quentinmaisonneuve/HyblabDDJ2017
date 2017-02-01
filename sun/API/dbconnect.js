/**
 * Created by alban on 28/01/17.
 */

// Mysql connection
var mysql = require('mysql');        // Mysql NodeJS Modules.
var configDB = require('./db.json'); // The JSON file with the database config connection

var db = mysql.createConnection(configDB);
db.connect(function(err){
    if(err){
        console.log("Error connection to database. Check if your database work and if login is correct");
        return;
    }
    console.log("Connection to database established");
});
module.exports=db;

