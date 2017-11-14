var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var First = require('./public/js/user_model.js');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var options = {
  root: __dirname + "/public"
};

app.get("/", (req, res) => {
  res.status(200);
  res.type("text/html");
  res.sendFile("/login.html", options);
});

app.post("/login", function(req, res) {
  if (req.body.name === "Gary" && req.body.pwd === "first123" && req.method === 'POST') {
    res.status(200);
    res.send({status: 1, url: '/admin.html'});

    db.on('error', function(error) {
      console.log(error);
    });

    db.on('open', function() {
      console.log("connect ok!");
    });

    mongoose.connect("mongodb://Gary:first123@127.0.0.1/stus?authSource=admin&authMechanism=SCRAM-SHA-1", {useMongoClient: true});

  } else {
    res.send({status: 0, message: "用户名或密码错误"});
  }
});

app.post("/stu", function(req, res) {
  res.status(200);
  new First({name: req.body.name, age: req.body.age, gender: req.body.gender}).save(function(err, data) {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.get("/stu", function(req, res) {
  res.status(200);
  First.find({
    name: req.query.name
  }, null, function(err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log(err);
    }
  });
});

app.delete("/stu", function(req, res) {
  res.status(200);
  First.remove({
    name: req.body.name
  }, function(err, obj) {
    if (!err) {
      res.send(obj.result);
    } else {
      res.send(err);
    }
  });

});

app.put("/stu", function(req, res) {
  First.update({
    name: req.body.name
  }, {
    [`${req.body.options}`]: req.body.content
  }, {
    multi: true
  }, function(err, num, raw) {
    if (!err) {
      res.send(num);
    } else {
      console.log(err);
    }
  });
  res.status(200);
});

app.use(function(req, res) {
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found!</h1>");
});

http.createServer(app).listen(8080, () => {
  console.log("监听 8080 。。。。");
});
