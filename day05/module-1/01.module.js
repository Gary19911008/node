
function add(a, b){
  return a + b;
}

function minus(a, b){
  return a - b;
}


// console.log(this === exports);


//挂在export对象的属性和方法，用于require进行导入的

//exports 默认就是一个对象，所以require返回也是对象
// exports.add = add;
// exports.minus = minus;


/*
module.exports可以导出任何类型数据，导出去的是什么，那么require就是什么
比exports更加灵活
*/
module.exports = {
  add: add,
  minus: minus,
  value: 10,
  mul: function (a, b){
    return a * b
  }
}

// module.exports = 20;
