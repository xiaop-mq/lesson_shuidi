```js
Promise.all([p1, p2, p3, pn])
```
同时进行
limitRunTask(tasks, 2)

p1, p2,能够发出去
超出并发限制
p3要等 某一个完成