
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var redis = require("redis");


/*
mongodb数据库存储name, passwd
*/
var mongoose = require("mongoose");
mongoose.connect('mongodb://Gary:first123@127.0.0.1/login?authSource=admin', {useMongoClient: true});

var Schema = mongoose.Schema;
var UserSChema = new Schema({
  name: {type: String},
  passwd: {type: String}
});
var UserModel = mongoose.model("User", UserSChema);

/*
redis用于缓存用于的登录sessionID相关信息
*/
var RedisClient = redis.createClient({host:"127.0.0.1", port: 6379, password: '123'});



var app = express();
process.env.PORT = 8888;
app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret: 'hello session',
    name: 'sessionid',//设置会话Id cookie,默认"connect.sid"
    resave: true,
    saveUninitialized: true
    // cookie : {
    //   maxAge: 60000
    // }
}));


var options = {
  root: __dirname + "/public"
};

app.get("/", function(req,res,next){

  //直接重定向到了 /index
  res.redirect("/index");
});


//hash 存储： sessionid:xxxxxxxxx    login  true
app.get("/index", function(req,res,next){

  RedisClient.hgetall("sessionid:" + req.sessionID, function(err, obj){
    if (obj === null){

      //redis数据库中没有该sessionID
      //直接重定向到了登录页面
      res.redirect("/login");
    } else {
      if(obj.login === "true"){
        res.status(200);
        res.sendFile("/html/index.html", options);
      } else {
        res.redirect("/login");
      }
    }
  });
});

app.get("/login", function(req, res, next){
  res.status(200);
  res.sendFile("/html/login.html", options);
});

app.post("/login", function (req, res, next) {

  //登录时，查询数据库中的用户名和密码
  UserModel.count({user : req.body.user, passwd : req.body.passwd}, function(err,num){
    console.log(num);
    if (num === 1){
      //将session相关信息，缓存到 redis中
      RedisClient.hmset("sessionid:" + req.sessionID, "name", req.body.user, "passwd", req.body.passwd, "login", true, function(err,result){
        if (err){
          console.log(error);
          next(err);
        }
      });

      //手动设置session在redis中的过期时间，（3600s)之后会被自动删除
      RedisClient.expire("sessionid:" + req.sessionID, 3600);

      res.status(200);
      res.json({login: true, url: "/index"});
    } else {
      res.status(200);
      res.json({login: false});
    }
  });
});

app.get("/logout", function (req, res, next) {
  //退出时，将会话信息中的登录状态写为 false
    RedisClient.hmset("sessionid:" + req.sessionID, "name", req.body.user, "passwd", req.body.passwd, "login", false, function(err,result){
    });
    res.status(200);
    res.redirect("/login");
});


app.use(function (req, res, next) {
    res.status(404);
    res.type("text/html");
    res.send("<h1>not found!</h1>")
});

app.use(function (err,req,res,next) {
  res.status(500);
  res.send("服务器错误！！！");
});


app.listen(app.get('port'), function () {
    console.log("listen " + app.get('port') + "    press Ctrl+C to terminate ...");
});
