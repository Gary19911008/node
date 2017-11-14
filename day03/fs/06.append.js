
var fs = require('fs');

//追加文件内容
fs.appendFile("test.md", "apple", (err)=>{
  console.log(err);
});
