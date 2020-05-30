// 深拷贝，考虑对象相互引用以及symbol拷贝的情况

// 浅拷贝：只是增加了一个指针指向已存在的内存地址
// 深拷贝：是增加了一个指针并且申请了一个新的内存，使这个指针指向新的内存


// symbol拷贝主要问题是：
// 1. symbol作为key,不会被遍历到，所以stringfy和parse是不行的
// 有环引用,stringfy和parse也会报错

function deepCopy(obj) {
  var cobj;
  if (obj === null) { // null 
    return obj;
  }


  let t = typeof obj;
  switch (t) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return obj;
  }


  if (Array.isArray(obj)) {
    cobj = []; // 声明为数组
    obj.forEach((c, j) => { // 使用foreach方法
      cobj.push(deepCopy(obj[i]))
    })
  } else {
    cobj = {}
    // 
    // 通过call指定arr数组为Object.prototype对象中的toString方法的上下文
    // 判断数据类型
    if (Object.prototype.toString.call(obj) == "[object Object]") {
      // weakSet weakMap

      // 使用getOwnPropertyNames可以货期symbol key可以解决问题
      // 1. 用集合记忆曾经遍历过得对象可以解决问题
      // 2. 当然还有很多数据类型要独立去拷贝.
      // 比如拷贝一个RegExp,lodash是最全的数据类型拷贝,有空可以研究下
      Object.getOwnPropertyNames(obj)
        .concat(Object.getOwnPropertySymbols(obj))
        .forEach(c => {
          cobj[c] = deepCopy(obj[c]);
        })
    } else {
      cobj = obj;
    }
  }
  // 简单数据类型
  // 复杂数据类型
  return cobj;
}