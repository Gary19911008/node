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

//创建了一个表示用于信息的Schema
var stuSchema = new Schema({name: String, age: Number, gender: Number});


//已知，数据库中已经有一个集合，而且集合的名字名字很随意，我们怎么操作？？

//此处的firstClass就是一个已经存在的集合， 那么“One”就起不到作用了
var First = mongoose.model("One", stuSchema, "firstClass");

new First({name: 'xxx', age: 12, gender: 1}).save(function(err, data){
  if (!err){
    console.log(data);
  } else {
    console.log(err);
  }

  db.close();
});
