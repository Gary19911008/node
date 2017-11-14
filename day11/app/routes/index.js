var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {

  //render就是将一个模板，经过数据的渲染之后，产生的html发出去
  res.render('index', { title: '菜鸟在线', items: ["hello", "world", "hehe"] }, function(err, html){
    if (!err){
      console.log(html);
      res.type("text/html");
      res.send(html);
    }
  });
});

module.exports = router;
