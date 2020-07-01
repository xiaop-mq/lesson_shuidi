function createTask(t) {
    return () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(t);
      }, t)
    })
  }
  // createTask(1000)  没启动 promise
  // createTask(1000)() 启动 promise
  // Promise.all
  function limitTask(tasks, limit) {
    return new Promise((resolve, reject) => {
      // 记一下已经完成的 任务的总数
      let total = 0, 
      i = 0,  // 
      running = 0;   // 正在运行
      let res = [];
      // 一次性 for
      function run() {
        if (total >= tasks.length) {
          resolve(res);
        }
        if(running >= limit || i >= tasks.length) return;
        // let task = tasks[i];
        // 启动 promise
        let task = tasks[i]();
        let currenti = i;
        console.log(currenti, '运行');
        task.then((r) => {
          running --;
          // i 一直在变化的： 任务结束时候 的 i 和 tasks[i] 这里的 i 已经不一致了。
          res[currenti] = r;
          total ++;
          run();
        })
        running ++;
        i ++;
        run();
      }
      run();
    })
  }
  // {}
  // 1s
  // 3s
  // 
  // 1s 定时器 2s 同时启动  之后插入了   3s 任务
  console.time('task')
  limitTask([createTask(1000), createTask(2000), createTask(3000)], 2)
  .then((res) => {
    // 应该花费 
    console.timeEnd('task');
    console.log(res)
  })
  // 要花费 4s 时间
  // 实际上 3s 完成