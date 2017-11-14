var http = require('http');

http.createServer((req, res)=>{
  res.writeHead(200, {"Content-Type":"text/plain","one":"hello","two":"world"});
  res.write("helloworld","utf8",()=>{
    console.log("send ok ...");
  });

  res.end("worldhello");
}).listen(8000,()=>{
  console.log("监听 8000 。。。");
});
