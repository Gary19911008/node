
//require是nodejs的全局函数, 用于引入其他模块
var fs = require("fs");//filesystem

//异步读取
fs.readFile("./nvm.md", "utf8", function(err, data){
  //回调函数，只有文件读取结束，才会执行
  console.log(data);
});

/*
//同步读取
var data = fs.readFileSync("./nvm.md", "utf8");
console.log(data);
*/

console.log("after fs.readFile...");
