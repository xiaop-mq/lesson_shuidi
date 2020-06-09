// var a = 1;
// function foo(){
//     console.log(a);
// }
// foo(); 
// foo可以访问a变量，但是a既不是foo函数的局部变量，
// 也不是foo函数参数，所以a就是自由变量。
// foo + foo函数 访问的自由变量a构成了闭包

// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope"
//     function f(){
//         return scope;
//     }
//     return f;
// }

// var foo = checkscope();
// foo();

var data = [];
for(var i = 0; i < 3; i++){
    data[i] = function() {
        console.log(i);
    };
}
data[0](); // 3
data[1](); // 3
data[2](); // 3


var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}
data[0]();
data[1]();
data[2]();


