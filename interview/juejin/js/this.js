// this指向调用者这个关系一定要清楚
// 要知道改变this指向的几种方式(call, bind, apply)
// 箭头函数中this的特殊性要能讲清楚
// var a = 1;
// function fun() {
//    'use strict';
//     var a = 2;
//       return this.a;
// }
// fun();//😨报错 Cannot read property 'a' of undefined
// 严格模式下，this指向undefined;

// 非严格模式下this指向window;
// var a = 1;
// function fun() {
//     var a = 2;
//       return this.a;
// }
// fun();//1
// this.a = 1;
// var b = 1;
// c = 1;
// console.log(this === window)

// var a = 1000;
// var obj = {
//     a: 1,
//     b: this.a + 1
// }
// function fun() {
//     var obj = {
//         a: 1,
//         c: this.a + 2 //严格模式下这块报错 Cannot read property 'a' of undefined
//     }
//     return obj.c;
// }
// console.log(fun());//1002
// console.log(obj.b);//1001

// 直接调用
// var a = 1;
// var obj  =  {
//     a: 2,
//       b: function () {
//         function fun() {
//           return this.a
//         }
//        console.log(fun());
//     }
// } 
// obj.b();//1


// 作为对象的方法
// var a = 1;
// var obj = {
//   a: 2,
//   b: function() {
//     return this.a;
//   }
// }
// console.log(obj.b())//2

// 方法调用
// var a = 1;
// var obj = {
//   a: 2,
//   b: function() {
//     return this.a;
//   }
// }
// var t = obj.b;
// console.log(t());//1

// apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
// 注意：call()方法的作用和 apply() 方法类似，
// 区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

// var a = 1;
// var obj = {
//   a: 2,
//   b: function() {
//     return this.a;
//   }
// }
// obj.b()
// obj.b.call(obj)

// 作为构造函数
function Fun() {
    this.name = 'Damonre';
    this.age = 21;
    this.sex = 'man';
    this.run = function () {
      return this.name + '正在跑步';
    }
  }
  Fun.prototype = {
    contructor: Fun,
    say: function () {
      return this.name + '正在说话';
    }
  }
  var f = new Fun();
  f.run();//Damonare正在跑步
  f.say();//Damonare正在说话
