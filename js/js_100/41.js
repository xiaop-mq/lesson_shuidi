// 输出结果是什么？
var a = 10;
(function () {
    console.log(a) // 存在变量提升 所以值为undefined
    a = 5
    console.log(window.a) // 指向全局变量10
    var a = 20;
    console.log(a) // 指向新定义的变量
})()
// 分别为 undefined -> 10 -> 20