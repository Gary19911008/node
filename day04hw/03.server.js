var fs = require('fs');
var http = require('http');

http.createServer((req, res)=>{
  if(req.url === '/message'){
    fs.readFile("./test.html","utf8",(err, data)=>{
      res.writeHead(200, {"Content-Type":"text/html"});
      res.end(data);
    });
  }else if (req.url === "/stu" && req.method === "POST") {
    res.writeHead(200, {"Conten-Type":"text/html"});
    res.write("<h1>submit success!</h1>")
  }else {
    res.end("other...");
  }
}).listen(8000, ()=>{
  console.log("监听 8000 。。。");
});
