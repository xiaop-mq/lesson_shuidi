- 你的电脑是几核？4核
 node index.js 单进程语言
 发挥了一个cpu的作用
- 进程 process
  应用appendChild()
  进程：操作系统挂载运行的单元
  进程拥有独立的资源 如内存 进程是绝对安全的
- 线程 thread ：运算调度的单元，计算机都是跑在线程上的。是属于进程的
  js 本质上没有多线程的能力？
- child_process 子进程模块
 现代编程，基于硬件
 子进程会寻找另外的cpu运行
 子进程数<=cpu核数 有了我们的子进程效率就会更快，就像消息机制一样