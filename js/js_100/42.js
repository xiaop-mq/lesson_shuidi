// 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现
const sleep = (time) =>{
    return new Promise(resolve =>(setTimeout(resolve, time)))
}
sleep(1000).then(() =>{
    console.log(1)
})