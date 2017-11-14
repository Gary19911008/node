process.on('exit', function(code) {
  console.log("exit code = ", code);
});

console.log(`process.pid = ${process.pid}`);
var count = 0;

setInterval(function(){
  console.log(count++);
}, 1000);
