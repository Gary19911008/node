var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
  if (req.url === '/message'){
    // fs.readFile("./test.html", "utf8", function(err, data){
    //   res.writeHead(200, {"Content-Type": "text/html"});
    //   res.end(data);
    // });

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
            <title></title>
          </head>
          <body>

            <form  action="/stu" method="post">
              姓名： <input type="text" name="username" placeholder="请输入姓名"> <br>
              年龄： <input type="text" name="age" placeholder="请输入年龄"> <br>
              <button>提交</button>
            </form>

          </body>
        </html>
        `);
  } else if (req.url === "/stu" && req.method === "POST"){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end("<h1>submit success!</h1>");
  }
  else {
    res.end("other...");
  }
}).listen(8000, function() {
  console.log("listen 8000...");
});
