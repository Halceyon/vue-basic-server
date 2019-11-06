var http = require('http');
var express = require('express');

var port = process.env.PORT || 8080;
var app = express();

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());
app.use(express.static('./dist'));

var server = app.listen(port);