

var http = require('http');

var server = http.createServer((req, res)=>{
  var headers = JSON.stringify(req.headers);
  if (req.url === '/') {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(headers);
    res.end();
  }else if (req.url === '/hello') {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello</h1>");
    res.end();
  }else{
    res.end("other...");
  }
});

server.listen(8000,()=>{
  console.log("listen 8000....");
});
