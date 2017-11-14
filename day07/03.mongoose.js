var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('error', function(error) {
  console.log("connect error", error);
});

db.on('open', function() {
  console.log("connect ok");
});

mongoose.connect("mongodb://127.0.0.1:8888/stus", {useMongoClient: true});

/************开始操作数据库************************/

//创建一个Schema
var Schema = mongoose.Schema;

//创建了一个表示用户信息的Schema
var stuSchema = new Schema({name: String, age: Number, gender: Number});

//创建一个Model
/* 其中的 “One”不是创建的集合的名字，集合名字是 "ones"
对StuOne进行操作，就是操作该集合 */
var StuOne = mongoose.model("One", stuSchema);

//update的操作
/*
第1个参数，查询条件
第2个参数， 修改的内容
第3个参数， option(可选)
第4个参数， update的状态

*/
StuOne.update({$or: [{name: 'zhangsan'}, {name: 'lisi'}]}, {age: 10}, {multi: true}, function(err, num, raw){
  // console.log("raw = ", raw);
  if (!err){
    console.log("num = ", num);
  } else {
    console.log(err);
  }

  db.close();
});
