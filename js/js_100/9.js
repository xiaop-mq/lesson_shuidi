// async/await如何通过同步的方式实现异步
// async/await就是一个自执行的generate函数。利用generate函数的特性把异步的代码写成“同步”的形式
var fetch = require('node-fetch');
function* gen(){ // 这里的*可以看成是async
    var url = 'https://api.github.com/users/github'
    var result = yield fetch(url)// 这里的yield可以看成是await
    console.log(result.bio);
}

// var g = gen();
// var result = g.next();
// result.value.then(Function(data){
//     return data.json();
// }).then(function(data){
//     g.next(data);
// });
