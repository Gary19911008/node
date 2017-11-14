
var fs = require('fs');

//创建文件夹
fs.mkdir("folder", (err)=>{
  console.log(err);
});

//fs.rmdir fs.rmdirSync  fs.mkdirSync
