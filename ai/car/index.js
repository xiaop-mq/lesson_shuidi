const fs = require('fs');
const AipImageClassfyClient = require("baidu-aip-sdk").imageClassify;
//引入filesystem内置模块
// console.log('hello node');
const image = fs.readFileSync("car.jpg").toString("base64");
//console.log(image);
const client =  new AipImageClassfyClient('17711765','3BoGGoDfI7F6wWfNFsMVEwwq',
'zdGupVqPxkRziRn2KpTSNQyg5DgNayGS');



client
.carDetect(image)
.then(function(result){
    console.log(result)
})
// //回调函数
// // 文件在哪？磁盘里
// // js 在哪里运行？内存 I/O操作
// fs.readFile('./aaatext.txt',function(err,data){
//     if (err){
//         return console.error(err)
//     }
//     console.log(data.toString());
// })