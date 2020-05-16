- async function 
  返回asyncfunction对象的异步函数。
  异步函数是指：通过事件循环异步执行的函数，他会通过一个隐式的promise返回其结果。
- 语法
  async function name([param[,param[,...param]]]){statements}
1. 参数
name:函数名称
param:要传递给函数的参数
statements:函数语句体
2. 返回值
   返回的promise对象会运行执行(resolve)异步函数的返回结果，或者运行拒绝(reject)---如果异步函数抛出异常的话
- 描述
  一个async异步函数可以包含await指令，该指令会`暂停异步函数的执行，并`等待promise执行，然后继续执行异步函数，并返回结果。
  await关键字只在异步函数内有效，如果在异步函数外使用它，会抛出语法错误。
  当异步函数暂停时，它调用的函数会继续执行(收到异步函数返回隐式promise)
- async/await 的目的是简化多个promise时的同步行为，并对一组 promise执行某些操作
- 并行执行两个或更多的异步任务，必须使用await.promise.all([job1(),job2()])
- 使用async函数重写promise链
```js
function getProcessedData(url) {
  return downloadData(url) // 返回一个 promise 对象
    .catch(e => {
      return downloadFallbackData(url)  // 返回一个 promise 对象
    })
    .then(v => {
      return processDataInWorker(v); // 返回一个 promise 对象
    });
}
```
```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```
return 没有await操作符，因为async function返回值隐式的传递给promise.resolve
- return await promisevalue和return promisevalue比较
