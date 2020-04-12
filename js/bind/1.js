// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// // 返回了一个函数
// var bindFoo = bar.bind(foo); 

// bindFoo(); // 1

// 传参的模拟实现
// var foo = {
//     value: 1
// };

// function bar(name, age) {
//     console.log(this.value);
//     console.log(name);
//     console.log(age);

// }

// var bindFoo = bar.bind(foo, 'daisy');
// bindFoo('18');


// var value = 2;
// var foo = {
//     value: 1,
//     bar: bar.bind(null)
// };

// function bar() {
//     console.log(this.value);
// }

// foo.bar() // 2

Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};

    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }

    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();

    return fbound;

}

