
var fs = require('fs');
var path = require('path');

/*
遍历一个目录，并且将所有子目录中的所有文件名都输出
@filePath  需要便遍历目录的路径
*/

function pathDisplay(filePath){
  filePath = path.resolve(filePath);
  fs.stat(filePath, (err, stats) => {
    if (!err) {
      if (stats.isDirectory()) {
        fs.readdir(filePath, (err, files) => {
          if (!err) {
            files.forEach((fileName, index) => {
              var filedir = path.join(filePath, fileName);
              fs.stat(filedir, (err, stats) => {
                if (!err) {
                  if (stats.isDirectory()) {
                    pathDisplay(filedir);
                  }else {
                    console.log(filedir);
                  }
                }else {
                  console.log(err);
                }
              });
            });
          }else {
            console.log(err);
          }
        });
      }else {
        console.log(filePath);
      }
    }else {
      console.log(err);
    }
  });
}

pathDisplay("/home/linux/guozhen/Atom/node1");
