
var http = require('http');
var fs = require('fs');
var url = require('url');


//将后缀名和 文件的类型名称对应
var obj = {
  "css": "text/css",
  "jpg": "image/jpeg",
  "png": "image/png",
  "js": "text/javascript"
};

// http://xxx.xx.xxx/css/test.css
// http://xxx.xx.xxx/js/test.js
//  http://xxx.xx.xxx/img/test.png


http.createServer(function(req, res){
  var myURL = url.parse(req.url);
  var pathname = myURL.pathname;
  var postfix, filename, codeType, dir;

  // 从 pathname 中提取  后缀名 和 文件名
  filename = pathname.slice(pathname.lastIndexOf("/") + 1);
  postfix = filename.slice(filename.lastIndexOf(".") + 1);

  //图片类型比较特殊，需要base64编码格式
  codeType = (postfix === "jpg" || postfix === "png") ? "base64" : "utf8";
  // 图片路径为 img， 所以需要指定
  dir = (postfix === "jpg" || postfix === "png") ? "img" : postfix;

  //当用户直接输入ip:port ,弹出html页面
  if (pathname === "/") {
    fs.readFile(__dirname + "/static/html/index.html", "utf8", function(err, data){
      if (!err){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
      } else {
        res.writeHead(500, {"Content-Type": "text/html"});
        res.end("server inner error!!");
      }
    });
  } else {

    //页面当中会加载一些资源（img,js,css）
    //根据以上的信息，对应的文件，按照对应的文件类型，发送给浏览器，完成了资源的加载
    fs.readFile("./static/" + dir + "/" + filename, codeType, function(err, data){
    
      if (!err) {
        res.writeHead(200, {"Content-Type": obj[postfix]});

        //write传输图片格式，需要指定“base64”
        res.write(data, codeType);

        //end() 结束本次通信，如果不写，那么浏览器一直处于一种正在加载的状况
        res.end();
      } else {
        res.writeHead(500, {"Content-Type": "text/html"});
        res.end("<h1>static server inner error!</h1>");
      }
    });
  }

}).listen(8888, function(){
  console.log("监听 8888...");
});
