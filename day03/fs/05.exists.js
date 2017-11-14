
var fs = require('fs');

console.log(fs.constants.F_OK);//0, 判断文件是否存在
console.log(fs.constants.R_OK);//4
console.log(fs.constants.W_OK);//2
console.log(fs.constants.X_OK);//1


//判断文件是否存在
fs.access("folder", fs.constants.F_OK, (err)=>{
  console.log(err);
}) ;

//判断文件是否可读可写，即权限 = 110(二进制)
fs.access(__filename, fs.constants.R_OK | fs.constants.W_OK, (err)=>{
  console.log(err);
}) ;
