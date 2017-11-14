
var querystring = require('querystring');
var url = require('url');

//返回一个URL对象
// 第二个参数，决定了是否对查询字符串进行转换
var myURL = url.parse("https://www.baidu.com/one/two?name=lisi&age=10#20", true);
console.log(myURL.query);//{name: 'lisi', age: '10'}


//可以使用querystring自己进行转换
var myURL2 = url.parse("https://www.baidu.com/one/two?name=lisi&age=10#20");
//myURL2.query  "name=lisi&age=10"
console.log(querystring.parse(myURL2.query));//{name: 'lisi', age: '10'}
