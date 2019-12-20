const fs = require('fs');//读取文件
// fs.readFile('./d.txt',
// function(err,res){
//     if(err);
//     console.log(err);
//     return;
// })
function readFile(){
    //a
    //b
    //c
    //按照顺序执行 
   const aFile = fs.readFileSync('a.txt');
   console.log(aFile);
   const aFile = fs.readFileSync('b.txt');
   console.log(bFile);
  const aFile = fs.readFileSync('c.txt');
   console.log(cFile);
  }
readFile();