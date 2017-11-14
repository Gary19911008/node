var http = require('http');

http.createServer(function(req, res) {

  //设置http的状态码，以及响应头部,其中头部可以包含自定义的值
  //text/plain text/html  application/json
  //res.setHeader()

  res.writeHead(200, {
      "Content-Type": "text/plain",
      "One": "hello",
      "Two": "world"
  });

  //发送数据
  res.write("helloworld", "utf8", function(){
    console.log("send ok....");
  });

  //结束本次通信,end也可以发送数据，数据发送之后结束
  res.end("worldhello");

}).listen(8000, function() {
  console.log("监听 8000 ....");
});
