const arr=[];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//队列 栈 (出栈的元素为pop)
console.log(arr);
const ake = arr.pop();
console.log(arr);
//先进后出
arr.unshift(ake);
//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
arr.unshift('苏荃');
console.log(arr);
const sq=arr.shift();//从数组的队头移出第一个元素
//shift用于把数组的第一个元素从其中删除，并返回第一个元素的值
arr.push(sq);
console.log(arr);