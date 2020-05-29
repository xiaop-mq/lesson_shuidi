let a = 12;
let b = a; 
b = 13; //一个变量只能关联一个值
console.log(a);

let n = {
    name: 'xiaop'
}
let m = n;
m.name = 'mq'
console.log(n.name);
// 基本数据类型是按值操作，值存储在栈内存中；
// 引用数据类型是按照堆内存的地址来操作；