var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests

var app = express();

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

module.exports = app;