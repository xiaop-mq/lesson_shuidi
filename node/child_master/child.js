//process node 的进程全局对象
process.on('message', (str) => {
    console.log('child' + str);
    //子进程 把活给干了后 子进程可以偷偷的跑到另外一个cpu上，在挂载一个进程。好处是可以把多核能力运用起来
    process.send('hehe');
})//通过message收获到这个消息