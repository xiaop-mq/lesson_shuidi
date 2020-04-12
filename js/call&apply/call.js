// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// bar.call(foo); // 1
// // 注意两点：

// // call 改变了 this 的指向，指向到 foo
// // bar 函数执行了

// // 模拟实现第一步
// var foo = {
//     value: 1,
//     bar: function() {
//         console.log(this.value)
//     }
// };

// foo.bar(); // 1

// // 所以我们模拟的步骤可以分为：

// // 将函数设为对象的属性
// // 执行该函数
// // 删除该函数

// // 第一步
// foo.fn = bar
// // 第二步
// foo.fn()
// // 第三步
// delete foo.fn

// 第一版
// Function.prototype.call2 = function(context) {
//     // 首先要获取调用call的函数，用this可以获取
//     context.fn = this;
//     context.fn();
//     delete context.fn;
// }

// // 测试一下
// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// bar.call2(foo); // 1

// var foo = {
//     value: 1
// };

// function bar(name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value);
// }

// bar.call(foo, 'kevin', 18);
// // kevin
// // 18
// // 1
// var args = [];
// for(var i = 1, len = arguments.length; i < len; i++) {
//     args.push('arguments[' + i + ']');
// }

// var obj = {
//     value: 1
// }

// function bar(name, age) {
//     return {
//         value: this.value,
//         name: name,
//         age: age
//     }
// }

// console.log(bar.call(obj, 'kevin', 18));
// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); // 2

console.log(bar.call2(obj, 'kevin', 18));




