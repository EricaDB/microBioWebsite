var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);
var bodyParser = require("body-parser");

server.listen(8000);

// these allow req.body (for handling HTTP requests on server-side):
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));