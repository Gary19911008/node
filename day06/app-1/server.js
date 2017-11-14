var http = require('http');
var fs = require('fs');
var url = require('url');
var socketIO = require('socket.io');

var server = http.createServer(function(req, res) {
  var myURL = url.parse(req.url);

  if (myURL.pathname === '/' && req.method === "GET"){
    fs.readFile("./index.html", "utf8", function(err, data){
      if (!err){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      } else {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end("<h1>server inner error!</h1>");
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end("<h1>not Found!</h1>");
  }

});

server.listen(8000, function() {
  console.log("监听 8000 ....");
});

var io = socketIO(server);

//通信的代码统一使用 io进行操作

//客户端通过socket.io连接服务器时，触发
io.on('connection', function(socket) {
  //此处的socket就是本次连接的客户端

  socket.nickname = + new Date();

  //练级成功之后，广播一下
   socket.broadcast.emit('user connect', `${socket.nickname} 上线了`);

  //客户端断开连接之后，触发
  socket.on('disconnect', function(){
    console.log("客户端 断开连接");
    socket.broadcast.emit('user disconnect', `${socket.nickname} 退出了`);
  });

  socket.on("client message", function (data, fn){
    console.log("来自客户端的数据", data);

    //此处的fn是告诉消息的发送方，收到了消息
    fn("我是server, 我收到了");
  });

  setTimeout(() => {
    //给客户端发送 “server message”事件，并且指定了消息内容
    socket.emit('server message', 'I am server!');
    socket.emit('server message', {name:'server'});
  }, 5000);


  /*
  setTimeout(() => {
    io.sockets.emit('system message', "发工资了!");
  }, 15000);
  */

});
