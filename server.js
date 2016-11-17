/*
 * @server.js
 *   - simple node server to serve react app
 */
var express = require("express");
var path = require("path");

var port =  process.env.PORT || 3000;
var app = express();

app.use('/', express.static(__dirname + '/client'));

app.listen(port, function() {
    console.log("server running on " + port);
});
