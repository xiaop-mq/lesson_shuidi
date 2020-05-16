// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//   ];
  
//   console.log(materials.map(material => material.length));

// 更短的函数
// var elements = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//   ];
  
//   elements.map(function(element) { 
//     return element.length; 
//   }); // 返回数组：[8, 6, 7, 9]
  
//   // 上面的普通函数可以改写成如下的箭头函数
//   elements.map((element) => {
//     return element.length;
//   }); // [8, 6, 7, 9]
  
//   // 当箭头函数只有一个参数时，可以省略参数的圆括号
//   elements.map(element => {
//    return element.length;
//   }); // [8, 6, 7, 9]
  
//   // 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
//   elements.map(element => element.length); // [8, 6, 7, 9]
  
//   // 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
//   // 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
//   // 可以替换成任意合法的变量名
//   elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// // 没有单独的this
// // 箭头函数出现之前，每一个函数是根据如何被调用来定义这个函数
// // 1. 如果是构造函数，this指针指向一个新的对象
// // 2. 严格模式下，this指向undefined
// // 3. 如果该函数是对象的一个方法，this指向这个对象

// function Person() {
//     // Person() 构造函数定义 `this`作为它自己的实例.
//     this.age = 0;
  
//     setInterval(function growUp() {
//       // 在非严格模式, growUp()函数定义 `this`作为全局对象, 
//       // 与在 Person()构造函数中定义的 `this`并不相同.
//       this.age++;
//     }, 1000);
//   }
  
//   var p = new Person();

// //   在ECMAScript 3/5中，通过将this值分配给封闭的变量，可以解决this问题。

// function Person() {
//   var that = this;
//   that.age = 0;

//   setInterval(function growUp() {
//     //  回调引用的是`that`变量, 其值是预期的对象. 
//     that.age++;
//   }, 1000);
// }

// var adder = {
//     base : 1,
      
//     add : function(a) {
//       var f = v => v + this.base;
//       return f(a);
//     },
  
//     addThruCall: function(a) {
//       var f = v => v + this.base;
//       var b = {
//         base : 2
//       };
              
//       return f.call(b, a);
//     }
//   };
  
//   console.log(adder.add(1));         // 输出 2
//   console.log(adder.addThruCall(1)); // 仍然输出 2


// var arguments = [1, 2, 3];
// var arr = () => arguments[0];

// arr(); // 1

// function foo(n) {
//   var f = () => arguments[0] + n; // 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n,即传给foo函数的第一个参数
//   return f();
// }

// foo(1); // 2
// foo(2); // 4
// foo(3); // 6
// foo(3,2);//6 

// 'use strict';
// var obj = {
//   i: 10,
//   b: () => console.log(this.i, this),
//   c: function() {
//     console.log( this.i, this)
//   }
// }
// obj.b(); 
// // undefined, Window{...}
// obj.c(); 
// 10, Object {...}

// var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor

// var Foo = () => {};
// console.log(Foo.prototype); // undefined


// 空的箭头函数返回 undefined
// let empty = () => {};

// (() => 'foobar')(); 
// Returns "foobar"
// (这是一个立即执行函数表达式,可参阅 'IIFE'术语表) 


// var simple = a => a > 15 ? 15 : a; 
// simple(16); // 15
// simple(10); // 10

// let max = (a, b) => a > b ? a : b;

// // Easy array filtering, mapping, ...

// var arr = [5, 6, 13, 0, 1, 18, 23];

// var sum = arr.reduce((a, b) => a + b);  
// // 66

// var even = arr.filter(v => v % 2 == 0); 
// // [6, 0, 18]

// var double = arr.map(v => v * 2);       
// [10, 12, 26, 0, 2, 36, 46]

// 更简明的promise链
// promise.then(a => {
//   // ...
// }).then(b => {
//   // ...
// });

// 无参数箭头函数在视觉上容易分析
// setTimeout( () => {
//   console.log('I happen sooner');
//   setTimeout( () => {
//     // deeper code
//     console.log('I happen later');
//   }, 1);
// }, 1);

// 箭头函数也可以使用条件（三元）运算符：
// var simple = a => a > 15 ? 15 : a;
// simple(16); // 15
// simple(10); // 10

// let max = (a, b) => a > b ? a : b;



// 箭头函数内定义的变量及其作用域
// 常规写法
var greeting = () => {let now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting();          //"Good day."
console.log(now);    // ReferenceError: now is not defined 标准的let作用域

// 参数括号内定义的变量是局部变量（默认参数）
var greeting = (now=new Date()) => "Good" + (now.getHours() > 17 ? " evening." : " day.");
greeting();          //"Good day."
console.log(now);    // ReferenceError: now is not defined

// 对比：函数体内{}不使用var定义的变量是全局变量
var greeting = () => {now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting();           //"Good day."
console.log(now);     // Fri Dec 22 2017 10:01:00 GMT+0800 (中国标准时间)

// 对比：函数体内{} 用var定义的变量是局部变量
var greeting = () => {var now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting(); //"Good day."
console.log(now);    // ReferenceError: now is not defined

// 箭头函数也可以使用闭包
// 标准的闭包函数
function A(){
    var i=0;
    return function b(){
            return (++i);
    };
};

var v=A();
v();    //1
v();    //2


//箭头函数体的闭包（ i=0 是默认参数）
var Add = (i=0) => {return (() => (++i) )};
var v = Add();
v();           //1
v();           //2

//因为仅有一个返回，return 及括号（）也可以省略
var Add = (i=0)=> ()=> (++i);

// 箭头函数递归
var fact = (x) => ( x==0 ?  1 : x*fact(x-1) );
fact(5);       // 120