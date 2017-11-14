//process 代表当前进程

console.log(process.argv);//拿到命令行参数，是一个数组

process.argv.forEach(function (value, index){
  // console.log("index =" + index  +  "  value = " + value);

  //${name}  直接去变量name的值
  console.log(`index=${index}  value=${value}`);//模板字符串
});



for (var i = 0; ; i++) {
  if (i == 15) {
    process.exit(0);//结束当前程序, 0表示正常退出
  }
  console.log(i);
}
