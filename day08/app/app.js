
var express = require('express');
var fs = require("fs");


//用于处理body中的数据
var bodyParser = require('body-parser');

//创建一个服务器
var app = express();


/*
body-parser
express.static
middleware : 中间件, 用于更方便的处理http请求的函数
*/

//public目录设置为了静态文件夹
app.use(express.static(__dirname + "/public"));

//为了解析 Http  body中的  json 数据
app.use(bodyParser.json())

//为了解析 form 表单提交的  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function(req, res){
  res.status(200);
  res.type("text/html");//指定要返回文件的类型
  res.sendFile("/index.html");
});


app.get("/data", function (req, res) {
  // console.log(req.query);//就是查询字符串的数据json

  console.log("req.hostname = ", req.hostname);
  console.log("req.ip = ", req.ip);
  console.log("req.protocol = ", req.protocol);
  console.log("req.baseUrl = ", req.baseUrl);
  console.log("req.orignalUrl = ", req.originalUrl);
  console.log("req.cookies = ", req.cookies);
  console.log("req.query = ", req.query);
  console.log("req.body = ", req.body);
  console.log("req.path = ", req.path);


  res.status(200);
  res.type("application/json");//指定要返回文件的类型
  res.json({name:'lisi', age: 20});
});



app.post("/data", function(req, res){
  console.log(req.body);//就是json数据

  res.status(200);
  res.json({status: 1});
});



/*
当无法匹配以上路由时，会进行如下操作
*/
app.use(function(req, res){
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found!</h1>");
});


//服务器开始监听端口号
app.listen(8000, function(){
  console.log("listen 8000 ....");
});
