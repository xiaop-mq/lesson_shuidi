// promise微任务 setTimeout宏仁务
// promise.then总是先于setTimeout执行
console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
})

setTimeout(() => {
  console.log(6);
})

console.log(7);

// 1 4 7 5 2 6 3
// node 11.x 版本对 timer 阶段做了优化
// 执行顺序
// promise -> resolve -> promise.then -> setTimeout