// var foo = {
//     value: 1
// };
// function bar(){
//     console.log(this.value); // 改变指向
// }
// bar.call(foo);

// 模拟实现第一步
// 调用call的时候，把foo对象改造如下
// var foo = {
//     value: 1,
//     bar: function(){
//         console.log(this.value)
//     }
// };
// foo.bar();
// this就指向了foo
Function.prototype.call2 = function(context){
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    context.fn();
    delete context.fn;
}
var foo = {
    value: 1
};
function bar(){
    console.log(this.value);
}
bar.call2(foo); // 1

var value = 1;
function bar(){
    console.log(this.value);
}
bar.call(null); // 1

// 函数存在返回值
var obj = {
    value: 1
}
function bar(name, age){
    return {
        value: this.value,
        name: name,
        age: age
    }
}
console.log(bar.call(obj, 'kevin', 18));