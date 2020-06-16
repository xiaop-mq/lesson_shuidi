## js异步发展历程及优缺点

## 回调函数
- 最早使用回调函数来解决js异步问题
```js
setTimeout(() =>{
    // callback函数体
},3000)
```
- 缺点：很容易带来回调地狱问题，不能使用try...catch捕获错误,不能return
- 回调地狱根本问题在于：
   - 缺乏顺序性
   - 嵌套函数存在耦合性
   - 嵌套函数过多，很难处理错误
   ```js
    ajax('XXX1', () => {
        // callback 函数体
        ajax('XXX2', () => {
            // callback 函数体
            ajax('XXX3', () => {
                // callback 函数体
            })
        })
    })
   ```
- 优点：解决了同步问题。

## Promise
- promise是为了解决callback问题而产生的
- 优点：解决了回调地狱的问题
```js
ajax('XXX1')
  .then(res => {
      // 操作逻辑
      return ajax('XXX2')
  }).then(res => {
      // 操作逻辑
      return ajax('XXX3')
  }).then(res => {
      // 操作逻辑
  })
```
- 缺点：无法取消promise,错误需要通过回调函数来捕获。没有从根本上解决回调地狱问题。

## Generator
- 特点：可以控制函数的执行。异步执行的容器，在需要暂停的地方，使用yield来注明。
- 缺点：执行起来很复杂
```js
function *fetch() {
    yield ajax('XXX1', () => {})
    yield ajax('XXX2', () => {})
    yield ajax('XXX3', () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()
```

## async/await
- 是异步的终极解决方案。
- 优点：代码清晰，不用向promise一样，写一大堆的.then链条，从根本上解决了回调地狱的问题
- 缺点：await将异步代码改造成同步代码，如果多个异步操作没有依赖性而是用await会导致性能上的降低。
```js
async function test() {
  // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
  // 如果有依赖性的话，其实就是解决回调地狱的例子了
  await fetch('XXX1')
  await fetch('XXX2')
  await fetch('XXX3')
}
```