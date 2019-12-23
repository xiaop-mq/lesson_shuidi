//master 主进程 程序的入口将从这里启动
const cp = require('child_process');//创建子进程(child_perss内置模块)
const child_process = cp.fork(__dirname + '/child.js') //cp.fork启动子进程 返回相对目录
//fork在挂起一个新的进程
// 公司为了天下没有难做的生意 18人员工
child_process.send('hah');//发送消息hah 有很多耗时的任务要交给他
child_process.on('message', (str) => {
    console.log('parent',str);
})