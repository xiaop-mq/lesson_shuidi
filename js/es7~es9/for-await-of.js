function makeAync(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
// let task1 = makeAync(1000);
// let task2 = makeAync(2000);
// let task3 = makeAync(3000);
makeAync(1000).then(() => {
  console.log('1s')
  return makeAync(2000)
})
.then(() => {
  console.log('2s')
  return makeAync(3000);
})
.then(() => {
  console.log('done')
})
// 1: 迭代器协议
// 2: 额外的方法来生成：generate
async function foo() {
  // 加强
  // for await
  // [makeAync(1000), makeAync(2000), makeAync(3000)] 定义数组的时候立马生成了 promise
  for await(let v of [makeAync(3000), makeAync(2000), makeAync(1000)]) {
    // v 就是 promise resolve 出来值
    console.log(v)
  }
}
// foo();
// 
function* gen() {
  // yield 的特性(分布) 不是立马就执行
  yield makeAync(1000);
  yield makeAync(2000);
  yield makeAync(3000);
}
// 生成 迭代器 generate 函数 运行完了返回的就是一个迭代器就可以分步执行我们的 yield 语句
let inert = gen();

async function bar() {
  // 又因为 yield 返回了 promise  我们 for await 等待我们promise 结束，才会运行一下个异步任务
  for await(let v of inert) {
    console.log(v)
  }
}
bar();
