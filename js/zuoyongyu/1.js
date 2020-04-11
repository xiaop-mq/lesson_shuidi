// 2.如果没有，就根据书写的位置，
// 查找上一层代码 value=1
var value = 1;
// a.执行foo函数查找有无value
// 1.先从foo函数内部查找是否有局部变量value,
function foo() {
    console.log(value);
}
// b.使用调用函数作用域，bar内查找value变量
function bar() {
    var value = 2;
    foo();
}

bar();

// 静态 1 2
// 动态 a b