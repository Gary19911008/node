var fs = require('fs');

fs.unlink("./hello", (err)=>{
  console.log(err);
  if (!err){
    console.log("delete OK!");
  };
});
