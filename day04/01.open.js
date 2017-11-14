
var fs = require('fs');


while (true){
  var fd = fs.openSync("./hello", "w");
  console.log("fd = ", fd);
  fs.closeSync(fd);
}
