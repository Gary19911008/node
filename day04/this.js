
console.log("nodejs代码内部this = ",  this);//{}

console.log(this === module.exports);//???

function fun(){
  //直接调用函数
  console.log("函数内部this = ", this);//global
  console.log(this === global);//true
};

// fun();//直接调用
// fun.call({value: 10});//指定this



var timer = setTimeout(function(){
  console.log("setTimeout内部普通函数 this = ", this);//普通函数的定时器中 this等于返回值
  console.log("普通函数定时器", this === timer);
}, 1000);

var timer2 = setTimeout(() => {
  console.log("setTimeout内部 箭头函数 this = ", this);//{}
  console.log("箭头定时器", this === timer2);
}, 1000);



/*
nodejs中的this:

1. gloabl
2. module.exports
3. 定时器的返回值对象
4. 自己指定的this
*/
