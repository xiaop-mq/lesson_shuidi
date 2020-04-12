// var a = 1;

// function foo() {
//     console.log(a);
// }

// foo();

// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }

// var foo = checkscope();
// foo();

// 进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
// 全局执行上下文初始化
// 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
// checkscope 执行上下文初始化，创建变量对象、作用域链、this等
// checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
// 执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
// f 执行上下文初始化，创建变量对象、作用域链、this等
// f 函数执行完毕，f 函数上下文从执行上下文栈中弹出


// var data = [];

// for (var i = 0; i < 3; i++) {
//   data[i] = function () {
//     console.log(i);
//   };
// }

// data[0]();
// data[1]();
// data[2]();

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



