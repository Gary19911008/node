
var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', function (error) {
  console.log(error);
});

db.on('open', function () {
  console.log("connect ok!");
});


//使用用户名，密码连接
// authSource = admin,  其中的admin是创建 hehe用户时指定的db名称，必须保持一致
mongoose.connect("mongodb://hehe:123@127.0.0.1/stus?authSource=admin", {useMongoClient: true});



var Schema = mongoose.Schema;

//创建一个Schema
var stuSchema = new Schema({
  name: String,
  age: Number,
  gender: Number
});

//创建model
var StuOne = mongoose.model("One", stuSchema);


//删除remove

//直接通过model删除
StuOne.remove({age: {$gte: 20}}, function(err, obj){
  if (!err){
    console.log(obj.result);
  } else {
    console.log(err);
  }
  db.close();
});


//查找之后，进行删除
// StuOne.find({name: "方堃"}, function(err, docs){
//   if (!err){
//     //可以直接删除一条文档
//     docs[0].remove();
//   } else {
//     console.log(err);
//   }
//
//   db.close();
// });



// 可以使用 query进行删除
// var query = StuOne.find({name: '方堃'});
// query.remove(function(err, obj){
//   console.log(obj.result);
//   db.close();
// });
// query.exec();// 只有执行了该步骤，那么以上的操作才会执行
