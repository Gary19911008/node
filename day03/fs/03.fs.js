
var fs = require('fs');

//写文件
//没有则创建，有则覆盖
//mode 设置读写权限 r w  x
fs.writeFile("./test.md", "android", {encoding: "utf8", mode: 0o444}, (err)=>{
  console.log(err);
});

//fs.writeFileSync()
