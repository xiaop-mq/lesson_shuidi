// var value = 1;
// function foo(v){
//     v = 2;
//     console.log(v); // 2
// }
// foo(value);
// console.log(value);

// 引用传递：共享传递
var obj = {
    value: 1
};
function foo(o){
    o.value = 2; // 修改原值 影响输出
    console.log(o.value) // 2
}
foo(obj);
console.log(obj.value); // 2
// 所有函数的参数都是按值传递的，怎么能按引用传递成功呢？
//  是不是引用传递？

// 修改o.value,可以通过引用找到原值，但是直接修改o
// 并不会修改原值。 2，3 都是共享传递。

var obj = {
    value: 1
}
function foo(o){
    o = 2; // 没有引用value 不影响原值
    console.log(o); // 2
}
foo(obj);
console.log(obj.value); // 1
// 共享传递：传递对象的时候，传递对象的引用的副本。