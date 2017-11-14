
// 导入mongoose模块
var mongoose = require('mongoose');
var url = "mongodb://127.0.0.1/stus";

// 用于判断数据库的连接情况
var db = mongoose.connection;

// 连接失败时报错
db.on('error', function(err){
  console.log("连接 mongodb 服务器错误");
});

db.on('open', function(){
  console.log("数据库连接成功");
});

// 连接mongodb服务器
mongoose.connect(url, {useMongoClien:true});

// 创建一个Schema模板
var Schema = mongoose.Schema;

var stuSchema = new Schema({name:String, age:Number, gender:Number});

// 创建一个Model
/*
其中的“One”不是创建的集合的名字，集合名字是“ones”
对StuOne进行操作，就是操作该集合
*/

var StuOne = mongoose.model("One", stuSchema);

// 创建一个Entity，即一个文档

// 创建一个文档，并且插入到该集合中即可

new StuOne({name:'lisi',age:24,gender:0}).save(function(err, data){
  if(!err){
    console.log("inner ok!",data);
  }else {
    console.log(err);
  }

  db.close();
});
