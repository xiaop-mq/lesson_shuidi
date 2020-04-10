const arr = [ {age: 10}, {age: 20} ]
// age 年龄总数
// function sum() {
//   let sum = 0;
//   for (0 ~ len - 1) {
//     sum +=
//   }
//   return sum;
// }
let sum = arr.reduce((acc, cur) => {
  // 0 + 10 => 10
  // 10 + 20 => 30
  // => 30
  return acc + cur.age
}, 0)
console.log(sum);
// age * 2
const newArr = arr.map(e => {
  return {
    ...e,
    age: e.age * 2
  }
});
console.log(newArr)

// 让 2s 输出 ‘hello world’ 完成 test。
function test(callback) {
  // code
  // cb -> promise -> async
  setTimeout(() => {
    callback('hello world', new Error('发生错误'))
  }, 2000)
}

test(function(str, err) {
  console.log(str); // str ===  hello world ??
});

// fs.readFile('./', (err, file) => {

// })
// array.forEach(element => {
  
// });
// function foo(str) {
//   console.log(str);
// }
// foo('hello world');

Array.prototype.myMap = function(cb) {
  let t = [];
  for (let i =0; i < this.length; i ++) {
    // 
    t.push(cb(this[i]));
  }
  return t;
}
Array.prototype.myMap1 = function(cb) {
  // let t = [];
  // for (let i =0; i < this.length; i ++) {
  //   // 
  //   t.push(cb(this[i]));
  // }
  // return t;
  return this.reduce((acc, current) => {
    // [] {age: 20} 
    let res = cb(current);
    return acc.concat(res);
  }, []);
}
// 先定义一个 
// 在返回
// 写成 reduce

const newArr1 = arr.myMap1(e => {
  return {
    ...e,
    age: e.age * 2
  }
});
console.log(newArr1);