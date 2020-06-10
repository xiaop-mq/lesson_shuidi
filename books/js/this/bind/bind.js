// 1. 返回一个函数模拟实现
var foo = {
    value: 1
};
function bar(){
    console.log(this.value);
}
// 返回了一个函数
var bindFoo = bar.bind(foo);
bindFoo(); // 1

// 传参的模拟实现
var foo = {
    value: 1
};

function bar(name, age){
    console.log(this.value);
    console.log(name);
    console.log(age);
}

var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18')

// 第三个特点：
// 一个绑定函数也能使用new操作符创建对象：
// 这种行为就像把原函数当成构造器
// 提高的this值被忽略，同时调用时的参数被提供给模拟函数
// 也就是说，bind返回的函数作为构造函数的时候
// this的是指向会失效
var value = 2;
var foo = {
    value: 1
};
function bar(name, age){
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18')
// undefined this失效
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin