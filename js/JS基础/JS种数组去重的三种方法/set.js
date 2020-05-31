// es6没有提供线程的去重办法，但是提供了一些去重的方式：set数据结构
let obj = { y: 200 };
let arr = [obj, 1, 2, 3, 1, obj, 1, 4, 2, 3, '3', { x: 100 }, { x: 100}];
arr = Array.from(new Set(arr));
console.log(arr);

// 缺点：低版本浏览器不兼容