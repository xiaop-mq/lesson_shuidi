// 手写代码，不是背代码，逻辑感
// bind核心是返回一个新的函数；而且这个函数的this执行第一个参数
// 1. 拷贝原函数，
// - 通过变量存储原函数
// - Object.create 赋值原函数的prototype
// 2. 将其返回
// 3. 调用时候的区别
// new ?
// 普通函数的调用

// bind是原型链上的方法 扩展函数原型对象，添加一个mybind方法
// ...params为了代码的严谨性传递的
Function.prototype.myBind = function(objThis, ...params) { // 先传一部分参数
    const thisFn = this; //  存储源函数的this
    let fToBind = function(...secondParams) { //  最后还是要执行的
      const isNew = this instanceof fToBind // new 调用
      const context = isNew ? this : Object(objThis) ; // this 覆盖为上下文对象
      return thisFn.call(context, ...params, ...secondParams); // 
    }
  
  
    if (thisFn.prototype) {
      fToBind.prototype = Object.create(thisFn.prototype);
    }
    
    return fToBind; 
  }

// func.myBind();