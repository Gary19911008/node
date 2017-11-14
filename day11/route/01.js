
var http = require('http');
var express = require('express');
var app = express();

//产生一个router
var router1 = express.Router();
var router2 = express.Router();


router1.get("/one", function (req, res) {
  res.type("text/html");
  res.status(200);
  res.send("<h1>路由为 /one </h1>");
});


router2.get("/two", function (req, res) {
  res.type("text/html");
  res.status(200);
  res.send("<h1>路由为 /two</h1>");
});

app.use(router1);
app.use(router2);

app.get("/", function (req, res) {
  res.type("text/html");
  res.status(200);
  res.send("<h1>路由为 /</h1>");
})


http.createServer(app).listen(8888, function () {
  console.log("listen 8888.....");
});
