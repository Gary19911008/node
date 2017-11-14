
var http = require('http');
var express = require('express');
var app = express();

var routes = require('./routes.js');


//嵌套路由
app.use("/user", routes.router1);
app.use("/admin", routes.router2);


http.createServer(app).listen(8888, function () {
  console.log("listen 8888.....");
});
