// 包含true/false
// 把其他数据类型转化为布尔值
// boolean([value])
// ![value]:把指定的值转化为布尔值后取反
// !![value]:取反再取反，相当于没有取反，只是把它转化为布尔值
// 规则：只有0/NaN/null/undefined/空字符串：最后是false,其余的都为true
console.log(!!1) // true
console.log(!1) //false

console.log(!!-1) // true
console.log(!!0) // false
console.log(!!undefined) // false
console.log(!!Number('12px')); // number('12px') -> NaN false
console.log(!![]) // true
console.log(!!'') // false
console.log(!!{}) // true

// 2. 条件判断时
if(1 == 1){
    if(1){
        // 写一个值，转化为布尔，然后再校验程序的真假
    }
    if(3 + '3px') {} // true
    if(3 - '3px') {} // 3-3px -> NaN;false
}


// null和undefined
// null空指针对象 undefined的应用场景
// 1.声明了一个变量，但是没有赋值，这个变量就是undefined
var num;
console.log(num); // undefined
// 2.我们在获取一个对象的属性名对应的属性值的时候，如果这个属性名没有再对象中找到，得到undefined
var obj={name:"xiaop"}
// obj.name =>xiaop obj.age => undefined
// 3.如果函数里面有形参，咱们在执行函数的时候，并没有传参数，
// 那么，在函数体中去打印这个形参，得到值就是undefined;
 function fn(n, m){
     console.log(n) // undefined
 }
 fn()
// 4.正常的一个函数里面return多少，
// 那么这个执行函数最后返回的结果就是多少，如果没写return
// 在执行函数的时候，返回值就是undefined
function fn2(){

}
var res = fn2() // undefined