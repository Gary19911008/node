
var http = require('http');
var url = require('url');
var fs = require('fs');

var obj = {
  "css":"text/css",
  "jpg":"image/jpg",
  "png":"image/png",
  "js":"text/javascript"
};

http.createServer((req, res)=>{
  var myURL = url.parse(req.url);
  var pathname = myURL.pathname;
  var postfix, filename, codeType, dir;

  filename = pathname.slice(pathname.lastIndexOf("/") + 1);
  postfix = filename.slice(filename.lastIndexOf(".") + 1);

  codeType = (postfix === "jpg" || postfix === "png") ? "base64" : "utf8";

  dir = (postfix ==="jpg" || postfix === "png") ? "img" : postfix;

  if (pathname === "/") {
    fs.readFile(__dirname + "/static/html/index.html", "utf8", (err, data)=>{
      if(!err){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
      }else {
        res.writeHead(500, {"Content-Type":"text/heml"});
        res.end("server inner error!!");
      }
    });
  }else {
    fs.readFile("./static/" + dir + "/" + filename, codeType, (err, data)=>{
      if (!err) {
        res.writeHead(200, {"Content-Type":obj[postfix]});

        res.write(data, codeType);
        console.log(data,codeType);
        res.end();
      }else {
        res.writeHead(500, {"Content-Type":"text/html"});
        res.end("<h1>static server inner error!!</h1>");
      }
    });
  }
}).listen(8000, ()=>{
  console.log("监听 8000 。。。");
});
