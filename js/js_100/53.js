var a = {n: 1};
var b = a;
// 赋值是从右到左，但是 . 优先级大于 =
// 所以应该先执行a.x
// 相当于为a所指向的{n: 1}对象新增属性x，
// 此时对象变为{n: 1; x: undefined}
a.x = a = {n: 2};

console.log(a.x) // undefined
console.log(b.x) // {n: 2}


// 向旧有对象添加一个指向新对象的属性
// 以下面代码为例
var a = {n: 1}; // a初始值
// a.x代表引用
// a初始值
// a = {n: 2}

/**
 * 旧对象
 * a:{
 *  n: 1
 *  x: { n: 2}
 * }
 * 新对象
 * a: {
 *   n: 2
 * }
 */
a.x = a = {n: 2};

console.log(a.x) 	
