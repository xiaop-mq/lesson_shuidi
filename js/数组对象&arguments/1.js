// // 类数组对象
// var array = ['name', 'age', 'sex'];

// var arrayLike = {
//     0: 'name',
//     1: 'age',
//     2: 'sex',
//     length: 3
// }
// // console.log(arrayLike)

// // 读写
// console.log(array[0]); // name
// console.log(arrayLike[0]); // name

// array[0] = 'new name';
// arrayLike[0] = 'new name';

// // 长度
// console.log(array.length); // 3
// console.log(arrayLike.length); // 3

// arrayLike.push('4');


// 遍历
// for(var i = 0, len = array.length; i < len; i++) {
//    ……
// }
// for(var i = 0, len = arrayLike.length; i < len; i++) {
//     ……
// }


// 调用数组方法
// var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }

// Array.prototype.join.call(arrayLike, '&'); // name&age&sex

// Array.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"] 
// // slice可以做到类数组转数组

// Array.prototype.map.call(arrayLike, function(item){
//     return item.toUpperCase();
// }); 

// 类数组转对象
// var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
// // 1. slice
// Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
// // 2. splice
// Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
// // 3. ES6 Array.from
// Array.from(arrayLike); // ["name", "age", "sex"] 
// // 4. apply
// Array.prototype.concat.apply([], arrayLike)

// Arguments对象
// function foo(name, age, sex) {
//     console.log(arguments);
// }

// foo('name', 'age', 'sex')

// lengths属性
// function foo(b, c, d){
//     console.log("实参的长度为：" + arguments.length)
// }

// console.log("形参的长度为：" + foo.length)

// foo(1)

// callee属性 调用函数自身
// var data = [];

// for (var i = 0; i < 3; i++) {
//     (data[i] = function () {
//        console.log(arguments.callee.i) 
//     }).i = i;
// }

// data[0]();
// data[1]();
// data[2]();


// arguments 和对应参数的绑定
// function foo(name, age, sex, hobbit) {

//     console.log(name, arguments[0]); // name name

//     // 改变形参
//     name = 'new name';

//     console.log(name, arguments[0]); // new name new name

//     // 改变arguments
//     arguments[1] = 'new age';

//     console.log(age, arguments[1]); // new age new age

//     // 测试未传入的是否会绑定
//     console.log(sex); // undefined

//     sex = 'new sex';

//     console.log(sex, arguments[2]); // new sex undefined

//     arguments[3] = 'new hobbit';

//     console.log(hobbit, arguments[3]); // undefined new hobbit

// }

// foo('name', 'age')

// 传入的参数，实参和 arguments 的值会共享，
// 当没有传入时，实参与 arguments 值不会共享
// 除此之外，以上是在非严格模式下，
// 如果是在严格模式下，
// 实参和 arguments 是不会共享的。

// 传递参数
// 使用 apply 将 foo 的参数传递给 bar
// function foo() {
//     bar.apply(this, arguments);
// }
// function bar(a, b, c) {
//    console.log(a, b, c);
// }

// foo(1, 2, 3)


// 使用es6...运算符我们可以轻松转换成数组
function func(...arguments) {
    console.log(arguments); // [1, 2, 3]
}

func(1, 2, 3);


