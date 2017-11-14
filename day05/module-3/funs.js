
function add(a, b){
  return a + b;
}

function minus(a, b){
  return a - b;
}

/* 模块内部测试代码，只能在本模块内部运行。
   当其他代码通过require引入该代码时，测试代码不用运行
*/

// console.log("requie.main = ", require.main);
// console.log("module = ", module);
// console.log(require.main ===  module);

if (require.main ===  module){
  console.log("只在funs.js内部使用");
}


//实现同上的功能
// if (require.main.filename ===  __filename){
//   console.log("只在funs.js内部使用");
// }
