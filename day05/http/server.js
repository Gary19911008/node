
var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer(function(req, res){
  var myURL = url.parse(req.url, true);

  if (myURL.pathname === '/'){
    fs.readFile("./index.html", "utf8", function(err, data){
      if (!err){
        res.writeHead(200, {'Content-Type': "text/html"});
        res.end(data);
      } else {
        res.writeHead(500, {'Content-Type': "text/html"});
        res.end("<h1>server inner error!</h1>");
      }
    });
  } else if (myURL.pathname === '/students' && req.method === 'GET'){
    fs.readFile("./stus.json", "utf8", function(err, data){
      if (!err){

        var limit = myURL.query.limit;//得到前端请求的数据的个数

        var temp = (JSON.parse(data)["stus"]).slice(0, limit);

        //给前端发送一个对象格式的字符串最合适
        var str = JSON.stringify({data: temp});

        //res 要发送的数据必须是 string  或者 buffer(16进制)
        res.writeHead(200, {"Content-Type": "text/plain"}) ;
        res.end(str);

      } else {
        res.writeHead(500, {'Content-Type': "text/html"});
        res.end("<h1>server inner error!</h1>");
      }
    });
  } else {
        res.writeHead(404, {'Content-Type': "text/html"});
        res.end("<h1>not found!</h1>");
  }

});

server.listen(8000, function(){
  console.log("监听 8000....");
});
