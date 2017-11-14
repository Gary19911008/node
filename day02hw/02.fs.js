// require是nodejs的全局函数，用于引用其他模块

var fs = require("fs");

/*
// 异步读取
fs.readFile("./01.server.js", "utf8",function(err, data){
  // 回调函数，只有文字读取结束，才会执行
  console.log(data);
});

console.log("after fs.readFile....");
*/

// 异步读取

var data = fs.readFileSync("./01.server.js","utf8");
console.log(data);

console.log("after fs.readFile....");
