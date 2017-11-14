
var express = require('express');

//产生一个router
var router1 = express.Router();
var router2 = express.Router();


router1.get("/", function(req, res){
  //  /user/one
  res.status(200);
  res.type("text/html");
  res.send(`<h1>originalUrl 路由为 ${req.originalUrl}</h1> <h2> baseUrl 路由为 ${req.baseUrl}</h2>`);

});

router1.get("/one", function(req, res){
  //  /user/one
  res.status(200);
  res.type("text/html");
  res.send(`<h1>originalUrl 路由为 ${req.originalUrl}</h1> <h2> baseUrl 路由为 ${req.baseUrl}</h2>`);

});


router2.get("/", function(req, res){
  //  /admin/one
  res.status(200);
  res.type("text/html");
  res.send(`<h1>originalUrl 路由为 ${req.originalUrl}</h1> <h2> baseUrl 路由为 ${req.baseUrl}</h2>`);

});

router2.get("/one", function(req, res){
  //  /admin/one
  res.status(200);
  res.type("text/html");
  res.send(`<h1>originalUrl 路由为 ${req.originalUrl}</h1> <h2> baseUrl 路由为 ${req.baseUrl}</h2>`);

});

module.exports = {
  router1: router1,
  router2: router2
};
