var querystring = require('querystring');
var url = require('url');

var myURL = url.parse("https://www.baidu.com/one/two?name=lisi&age=10#20",true);

console.log(myURL.query);

var myURL2 = url.parse("https://www.baidu.com/one/two?name=lisi&age=10#20");

console.log(querystring.parse(myURL2.query));

// 两种写发得到的结果是一样的
