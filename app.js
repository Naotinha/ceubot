var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests

const API = require("./api.js");

var app = express();

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());


app.post("chatbot/message", (req,res) => API.botmessager (req,res));

module.exports = app;