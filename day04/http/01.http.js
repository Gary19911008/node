
/*
http中都包含哪些信息？？
*/


var http = require('http');


//创建一个http服务器
//返回一个server对象
//req 请求操作， res响应操作
var server = http.createServer(function(req, res){
  // console.log("request: ", req);
  // console.log("response : ", res);

  //获取http的请求头部信息
  var headers = JSON.stringify(req.headers);
  console.log("req.method = ", req.method);
  console.log("req.httpVersion = ", req.httpVersion);
  console.log("req.url = ", req.url);//请求路径

  if (req.url === '/'){
    res.writeHead(200,  {"Content-Type": "text/plain"});
    res.write(headers);
    res.end();
  } else if (req.url === '/hello'){
    res.writeHead(200,  {"Content-Type": "text/html"});
    res.write("<h1>HELLO </h1>");
    res.end();
  } else {
    res.end("other...");
  }
});

//给服务器指定监听的端口号
server.listen(8000, function(){
  console.log("listen 8000 ....");
});
