// 简单改造以下代码，使之分别打印10和20
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
// 打印10
var b = 10;
(function b(b){
    window.b = 20; // 让其指向全局
    console.log(b); 
})(b);
// 或者
var b = 10;
(function b(b){
    b.b = 20; // 指向改变
    console.log(b); 
})(b);

// 打印20
var b = 10;
(function b(b){
    b = 20;
    console.log(b); 
})(b);
// 或者
var b = 10;
(function b(){
    var b = 20;
    console.log(b); 
})();