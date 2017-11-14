var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
var app = express();
var redis = require('redis');
var cookieParser = require('cookie-parser');
var session = require('express-session');

mongoose.connect('mongodb://Gary:first123@127.0.0.1/login?authSource=admin', {useMongoClient: true});

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  user: {
    type: String
  },
  passwd: {
    type: String
  }
});
var UserModel = mongoose.model("User", UserSchema);

var RedisClient = redis.createClient({host: "127.0.0.1", port: 6379});

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({secret: 'hello session', name: 'sessionid', resave: true, saveUninitialized: true}));

var options = {
  root: __dirname + "/public"
};

app.get("/", (req, res, next) => {
  res.redirect("/index");
});

app.get("/reg", (req, res, next) => {
  if (req.query.status != 1) {
    res.redirect("/index");
  }else {
    res.send({status: 1, url: '/html/registration.html'});
  }

});

app.get("/index", (req, res, next) => {
  RedisClient.hgetall("sessionid:" + req.sessionID, (err, obj) => {
    if (obj === null) {
      res.redirect("/login");
    } else {
      if (obj.login === "true") {
        res.status(200);
        res.sendFile("/html/index.html", options);
      } else {
        res.redirect("/login");
      }
    }
  });
});

app.get("/login", (req, res, next) => {
  res.status(200);
  res.sendFile("/html/login.html", options);
});

app.post("/login", (req, res, next) => {
  UserModel.count({
    user: req.body.user,
    passwd: req.body.passwd
  }, (err, num) => {
    if (num === 1) {
      RedisClient.hmset("sessionid:" + req.sessionID, "user", req.body.user, "passwd", req.body.passwd, "login", true, (err, result) => {
        if (err) {
          console.log(error);
          next(err);
        }
      });

      RedisClient.expire("sessionid:" + req.sessionID, 3600);

      res.status(200);
      res.json({login: true, url: "/index"});
    } else {
      res.status(200);
      res.json({login: false});
    }
  });
});

app.get("/logout", (req, res, next) => {
  RedisClient.hmset("sessionid:" + req.sessionID, "user", req.body.user, "passwd", req.body.passwd, "login", false, (err, result) => {});
  res.status(200);
  res.redirect("/login");
});

app.post("/reg", (req, res) => {
  res.status(200);
  UserModel.count({
    user: req.body.user
  }, (err, num) => {
    if (num != 0) {
      res.json({reg: false});
    } else {
      new UserModel({user: req.body.user, passwd: req.body.passwd}).save((err, data) => {
        if (!err) {
          res.send({url: "/login"})
        } else {
          console.log(err);
        }
      });
    }
  });
});

app.use(function(req, res, next) {
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found!</h1>")
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("服务器错误！！！");
});

http.createServer(app).listen(8000, () => {
  console.log("监听 8000 。。。。");
});
