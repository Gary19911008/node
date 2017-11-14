var EventEmitter = require('events');

var eventOne = new EventEmitter();

//once触发一次完毕
eventOne.once('custom_event', function(value) {
  console.log("触发： ", value);
});

setInterval(function() {
  eventOne.emit("custom_event", Math.floor(Math.random()* 10 + 10));
}, 1000);
