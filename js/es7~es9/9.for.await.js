// await：async + await得增强
// iterator
// for of： (iteratorAble 可迭代对象) 比如：数组 字符串 Map Set .....
// for in: 对象
// es6 -> generator

let obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]: function() {   // 给 obj 实现了一个迭代器
    let key = ['a', 'b'];
    return {
      next() {
        return {
          done: key.length === 0,
          value: obj[key.shift()]
        }
      }
    }
  }
}
for (let val of obj) {
  // console.log(val);
}
// generate + promise  === async + await 
function* asynctask() {
  console.log('1')
  yield new Promise((resolve, reject) => {
    setTimeout(() => {resolve('3s')}, 3000)
  })
  yield 1
  yield 2
  console.log('2');
  yield new Promise((resolve, reject) => {
    setTimeout(() => {resolve('1s')}, 1000)
  })
  console.log('end');
}
let iterate = asynctask();
// for (let val of iterate) { 
//   // 迭代可以获取到 两个 promise
//   console.log(val);
// }
// for await 一系列的 promise then
async function bar() {
  for await(let value of iterate) {
    // console.log(value);
  }
}
bar();
// 同步的
// for await 一系列异步任务，for 循环一次遍历全部运行，
// for await 可以让他们遵守上一个异步任务结束了，才开始下一个异步任务
// for await of 连在一起用
async function foo() {
  for await (let val of obj) {
    // console.log(val)
  }
}
foo();