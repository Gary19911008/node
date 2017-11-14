
var http = require('http');
var express = require('express');
var app = express();

//产生一个router
var router1 = express.Router();
var router2 = express.Router();


router1.get("/one", function (req, res, next) {
  console.log("router1 执行 ");
  next();
});

router2.get("/one", function (req, res) {

  console.log("router2 执行 ");
  res.type("text/html");
  res.status(200);
  res.send("<h1>路由为 /one 的二次处理</h1>");
});


//一个路由可以经过多次传递执行，但是传递时，必须保证路由是一样的
app.use(router1, router2);



http.createServer(app).listen(8888, function () {
  console.log("listen 8888.....");
});
