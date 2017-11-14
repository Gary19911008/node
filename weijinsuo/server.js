var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
var app = express();
var redis = require('redis');
var session = require('express-session');

app.use(express.static(path.join(__dirname, "public")));

var options = {
  root: __dirname + "public"
};

app.get("/", (req, res, next) => {
  res.redirect("/html/new_guide.html");
});

http.createServer(app).listen(8000, () => {
  console.log("监听 8000 。。。");
});