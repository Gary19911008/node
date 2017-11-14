//创建一个http服务器

var http = require("http");

var server = http.createServer(function(req, res){
  console.log(req.url);
  res.writeHead(200, {'Content-Type': "text/html"});
  res.write("<h1>I am server ...</h1>");
  res.end();
});

server.listen(8000, function(){
  console.log('监听 8000端口。。。');
});
