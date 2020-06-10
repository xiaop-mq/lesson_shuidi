## 类数组对象
- 定义: 拥有一个length属性和若干索引属性的值.
eg:
```js
var array = ['name', 'age', 'sex'];
var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex'
    length: 3
}
```
- 为什么叫做类数组对象: 
三个角度来看: 读写 获取长度 遍历 看这两个对象

### 读写
```js
console.log(array[0]); // name
console.log(arrayLike[0]); // name

array[0] = 'new name'
arrayLike[0] = 'new name'
```

### 长度
```js
console.log(array.length); // 3
console.log(arrayLike.length) // 3
```

### 遍历
```js
for(var i = 0, len = array.length; i < len;i++){
    ......
}
for(var i = 0, len = arrayLike.length; i < len;i++){
    ......
}
```
### 类数组可以使用数组的方法吗?
```js
arrayLike.push('4');
```
会出现报错: arrayLike.push is not a function

### 调用数组方法
那么类数组就想使用数组的方法怎么办??
即然无法直接调用,我们可以用Function.call间接调用:
```js
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }

Arrar.prototype.join.call(arrayLike, '&'); // name&age&sex

Array.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"] 
// slice可以做到类数组转数组
Array.prototype.map.call(arrayLike, function(item){
    return item.toUpperCase();
})
// ["NAME", "AGE", "SEX"]
```
### 类数组转对象方法
```js
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
// 1. slice
Array.prototype.slice.call(arrayLike);  // ["name", "age", "sex"] 
// 2. splice
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
// 3. ES6 Array.from
Array.from(arrayLike); // ["name", "age", "sex"] 
// 4. apply
Array.prototype.concat.apply([], arrayLike)
```

### Arguments对象
- Arguments对象定义在函数体中,包括了函数的参数和其他属性.在函数体中,arguments指代该函数的arguments对象.
```js
function foo(name, age, sex){
    console.log(aguments);
}
foo('name', 'age', 'sex');
```

- 类数组除了索引属性和length属性之外,还有一个callee属性.

### length属性
arguments对象的length属性,表示实参的长度
```js
function foo(b, c, d){
    console.log("实参的长度为: " + arguments.length) // 1
}

console.log("形参的长度为: " + foo.length) // 3

foo(1)
```

### callee属性
Arguments 对象的callee属性,通过它可以调用函数自身.
- 闭包经典面试题使用callee的解决方法:
```js
var data = [];

for(var i = 0; i < 3; i++){
    (data[i] = function() {
        console.log(argument.callee.i)
    }).i = i;
}
data[0](); // 0
data[1](); // 1
data[2](); // 2
```
- arguments对象的几个注意要点
### arguments和对应参数的绑定
```js
function foo(name, age, sex, hobbit) {

    console.log(name, arguments[0]); // name name

    // 改变形参
    name = 'new name';

    console.log(name, arguments[0]); // new name new name

    // 改变arguments
    arguments[1] = 'new age';

    console.log(age, arguments[1]); // new age new age

    // 测试未传入的是否会绑定
    console.log(sex); // undefined

    sex = 'new sex';

    console.log(sex, arguments[2]); // new sex undefined

    arguments[3] = 'new hobbit';

    console.log(hobbit, arguments[3]); // undefined new hobbit

}

```

### 传递参数
```js
// 通过apply将foo的参数传递给bar
function foo(){
    bar.apply(this.arguments);
}
function bar(a, b, c);
foo(1, 2, 3)
```

### 强大的ES6
使用es6的...运算符,我们可以轻松转换数组.
```js
function func(...arguments){
    console.log(arguments); // [1, 2, 3]
}
func(1, 2, 3)
```