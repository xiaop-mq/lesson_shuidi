libuv

1. 在用node读一个文件的时候，都发生了些什么？
   3点 3句话，和node底层相关
   - 

   浏览器输入URL，发生了什么？
   node api？  I/O处理？   异步？
fs.readFileSync fs.readFile fs.createReadStream

   表层
   - 1. node 架构层
   v8, babel weback 抽象语法树 AST
   中间层 fs ... -> c++
   2. 前端 webkit 中间件 html5 调用摄像头 文件 存储... 可以是什么？
   3. JS可以用于什么应用场景，它的架构是？
      electron chrome -> chromium 
   4. 小程序 html -> wxml  css -> wxss
   5. RN 技术

- 2. node 底层实现架构
  - 上层 API 层
     调用node的API层fs核块相关功能
  - node.js Bingdings  c++ 对fs模块的实现
  - node.js底层，基于事件机制的 
  node之中的event loop stream 流操作 libuv
  libuv内部封装了 event loop stream
  cares 异步的DNS 请求库
  http_parser\OPENSSL, zlib   工具库
  libuv 是一个高性能、事件驱动的I/O库，并且提供了跨平台(windows/linux)的API，异步，事件驱动的编程风格，核心使命是提供一个event loop 定时器，基于I/O和其它事件的回调函数 非阻塞网络机制，一部文件系统访问 子进程

  JS是单线程的，但是libuv并不是

  - 执行顺序  event loop
    1. event loop在前后端的区别
    v11. + timer 发生改变，跟浏览器端实现一致 libuv 任务队列类型比较多 setInterval, setTimeout, timer栈
    io 操作poll栈 setImmediate会进入到check栈
    timer栈=》poll栈 -》check栈

    Koa(实例) -》events -> stream -> fs/net/http(异步)
       事件驱动 + 循环事件栈
    2. 不一样的结果？ node版本不一样
       前端及传统的node v11前，event loop
       每次执行一个宏仁务时间，setTimeout setInterval
       会去检查任务栈