

setInterval(function(){
  console.log("interval...");
}, 500);

setTimeout(function(){
  console.log("timeout...");
}, 0);

/*
process.nextTick的回掉函数会在事件循环的下一次循环中执行（也相当于插队执行）
*/
process.nextTick(function(arg){
  console.log("arg ", arg);
}, 100);
