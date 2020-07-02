// 数据里面有10万条元素，取第一条和第10万条元素时间相差多少？
// 数组可以"直接根据索引"取对应的元素，
// 所以不管取那个位置的元素时间复杂度都是O(1)
// 消耗时间几乎一致，差异可以忽略不计

// example 1
var a={}, b='123', c=123;  
a[b]='b';
a[c]='c';  // c: '123' 覆盖b
console.log(a[b]); // c


// example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b'; // symbol类型不需要转换
a[c]='c'; // symbol类型不需要转换 任何symbol的值不相等 不会覆盖b
console.log(a[b]); // b

// example 3
var a={}, b={key:'123'}, c={key:'456'};  
// b 不是字符串也不是 Symbol 类型，需要转换成字符串。
// 对象类型会调用 toString 方法转换成字符串 [object Object]。
a[b]='b';
// c 不是字符串也不是 Symbol 类型，需要转换成字符串。
// 对象类型会调用 toString 方法转换成字符串 [object Object]。这里会把 b 覆盖掉。
a[c]='c';  
console.log(a[b]); // c
