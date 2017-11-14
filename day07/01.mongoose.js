
//导入mongoose模块
var mongoose = require('mongoose');
var url = "mongodb://127.0.0.1/stus";

//用于判断数据库的连接情况
var db = mongoose.connection

//失败
db.on('error', function(error){
  console.log("connect mongodb server error");
  // console.log(error);//错误对象
});

//成功
db.on('open', function(){
  console.log("数据库连接成功!");
});

//连接mongodb服务器
mongoose.connect(url, {useMongoClient: true});
