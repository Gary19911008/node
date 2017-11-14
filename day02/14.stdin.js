
//process.stdin 标准输入

process.stdin.setEncoding("utf8");//设置输入的字符编码格式

process.stdout.write("please input >> ");

/*
//readbale, 代表有数据输入，数据可读
process.stdin.on('readable', function(){
  //read读取数据
  var chunk = process.stdin.read();
  if (chunk != null){
    console.log(chunk);
    process.stdout.write("please input >> ");
  }
});
*/

//数据读取完毕
process.stdin.on('data', function(chunk){
  process.stdout.write(chunk);
  process.stdout.write("please input >> ");
});

process.stdin.on('end', function(){
  console.log("input end ...");
});
