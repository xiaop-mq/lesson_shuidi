const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
})
promise.then(() =>{
    console.log(3)
})
console.log(4)

// 所以promise是同步执行的，而then方法是异步执行的。