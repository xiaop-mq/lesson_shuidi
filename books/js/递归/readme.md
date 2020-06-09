## JS之递归

1. 定义：程序调用自身的编程技巧成为递归。

2. 阶乘
```js
function factorial(n) {
    if(n == 1) return n;
    return n * factorial(n - 1)
}
console.log(factorial(5))
```

3. 斐波那契数列
```js
function fibonacci(n){
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)) // 1 1 2 3 5
```

4. 递归条件
边界条件、递归前进段、递归返回段，当边界条件不满足时，递归前进，当边界条件满足时，递归返回。

递归特点：
- 子问题无须与原始问题为同样的事，且更为简单
- 不能无限制的调用本身，需有个出口，化简为非递归状况处理。

5. 执行上下文栈
当执行函数时，会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

6. 尾调用
是指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数。
```js
// 尾调用
function f(x){
    return g(x)
}
```

```js
// 非尾调用
function f(x){
    return g(x) + 1
}
```
不是尾调用，因为g(x)的返回值还需要跟1进行计算后，f(x)才有返回值。
两者区别：执行上下文栈的变化不一样

7. 阶乘函数优化
```js
function factorial(n, res){
    if(n == 1) return res;
    return factorial2(n - 1, n * res)
}
console.log(factorial(4, 1)) // 24
```