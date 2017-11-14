
/*
process.nextTick的回调函数会在 事件循环的下一次循环中执行（也相当于插队执行）
*/
process.nextTick(function(arg){
  console.log("arg ", arg);
}, 100);


setInterval(function(){
  console.log("interval ...");
}, 500);

setTimeout(function(){
  console.log("timeout ...");
}, 0);
