
var redis = require('redis');

var client = redis.createClient({host: '127.0.0.1', port: 6379, password: '123'});


client.on('connect', function () {
  console.log('connect ok!');
});

client.on('error', function (err) {
  console.log('connect error', err);
});


//hash类型的操作

//添加或者修改
client.hmset("person:1", "name", "lisi", "age", 36, "gender", "male", function(err, reply){
  if (!err){
    console.log("hmset reply = ", reply);//OK

   //查找hash
  //  client.hgetall("person:1", function(err, reply){
   client.hget("person:1", "name",  function(err, reply){
     if (!err){
       console.log("hgetall reply = ", reply);// {field: value ,field: value .....}


       //删除hash
      //  client.hdel("person:1", "name", "age", function(err, reply){
       client.del("person:1", function(err, reply){
         if (!err){
           console.log("del reply = ", reply);
           client.quit();
         } else {
           throw err;
         }
       });

     } else {
       throw err;
     }
   });

  } else {
    throw err;
  }
});


/*
列表操作
client.lpush()
client.lpop()
client.lrange()
client.lindex()
client.lrem()
*/
