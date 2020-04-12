// 按值传递
// var value = 1;
// function foo(v) {
//     v = 2;
//     console.log(v); //2
// }
// foo(value);
// console.log(value) // 1
// 很好理解，当传递 value 到函数 foo 中，
// 相当于拷贝了一份 value，
// 假设拷贝的这份叫 _value，
// 函数中修改的都是 _value 的值，
// 而不会影响原来的 value 值。

// 引用传递
var obj = {
    value: 1
};
function foo(o) {
    o.value = 2;
    console.log(o.value); //2
    // o.value找到原值 直接修改o并不会改变原始。
}
foo(obj);
console.log(obj.value) // 1
// 参数如果是基本类型是按值传递，如果是引用类型按共享传递。

var obj = {
    value: 1
};
function foo(o) {
    o = 2;
    console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1