
var count = 0;

function add() {
  count++;
}

add();
add();

//导出去的count已经是2,永远不会再变了，其他模块也不能使用add修改了
//注意导出代码的位置，在何时导出，就是何时的值
module.exports = {
  count: count,
  add: add
};

add();
