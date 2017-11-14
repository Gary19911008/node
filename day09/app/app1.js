
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

//用于解析客户端发送的cookie
var cookieParser = require('cookie-parser');

var app = express();


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//使用中间件
app.use(cookieParser());


var options = {
  root: __dirname + "/public"
};

app.get('/', function(req, res){

  //得到浏览器发来的cookie
  console.log(req.cookies);//是一个对象，需要访问具体的属性

  res.status(200);

  //创建cookie中的一个键值对,也可以指定对应的一些选项
  //将cookie发送给浏览器
  // res.cookie("name", "lisi", {
  //   maxAge: 3600,
  //   domain: ".",
  //   path: "/",
  //   httpOnly: true
  // });

  //res.cooike发送的是一条cookie
  res.cookie("num", "100");
  res.cookie("num1", "100");
  res.cookie("num2", "100");

  //调用 res.set()可以可以设置cookie {'Set-Cookie': xxxx } 即可

  res.sendFile("/html/index.html", options);
});


app.post("/login", function (req, res) {
  var name = req.body.name;
  var passwd = req.body.passwd;

  if (('lisi' === name)  &&  ("123" === passwd)){

    res.status(200);
    res.json({login: true, adminUrl: "/html/admin.html"});

  } else {
    res.status(200);
    res.json({login: false});
  }
});


app.use(function(req, res){
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found!</h1>");
});



var server = http.createServer(app);
server.listen(8000, function () {
  console.log("监听 8000.。。。。");
});
