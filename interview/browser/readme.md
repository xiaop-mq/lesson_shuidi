# 从输入URL到页面展示，这中间发生了什么? 越细越好
1. 多进程架构
2. IPC(INTER-PROCESS COMMUNICATION,进程间通信)

1. 注重细节 细节类考题 流程
2. 从想当然到理所当然 v8 引擎及浏览器架构
3. 全面考察前端是否具有完整计算机本科学习能了代表题
  web开发 网络 操作系统
4. 如何规范的回答这道题,区分新手和高手的经典题目 分水岭
  如何回答的有条理 进程
  进程 是主脉络


动手实操
1. 输入URL发生在浏览器 proxy(上网代理)
  通过浏览器来代理我们访问网页
   可以当搜索框来用 会使用默认的搜索引擎
   url 
   输入juejin.im 补全为https://juejin.im/timeline 补全协议
   用户体验做的很好 
   shift+esc进入谷歌任务管理器
2. 发生在浏览器之中 操作系统里的进程
  细节 像我们的代码架构分层 流程细化
    web 访问 浏览器chrome 多进程的架构模式，最流畅用更多的内存 比IE优秀
    打开一个页面 至少有四个进程
    <!-- 主进程  管家 chrome 浏览器
    子进程
    GPU 进程  渲染进程 GPU 加速 3D渲染  canvas three.js css：transform 3d
    NetWork Service -->
    chrome 多进程架构带来现在浏览器的快速访问体验 chrome就是代表
    浏览器主进程负责应用启动 并发 
    启动浏览器 提供输入的交互 （输入url） 子进程管理 进程间是有通信的 IPC
    文件存储功能 文件缓存 cookie laocalstorage...BOM,Browser Object Model
  - 网络进程 提供下载功能 
  - 渲染进程 html css js 图片 可交互的页面
执行过程
 访问过程 问题回答清楚 执行流程 进程间的流程
 1. 浏览器进程接收到用户输入URL 请求时，在主进程IPC进程间的通信 将url 交给网络进程
 2. 网络进程中发起正真的URL请求 url请求是由c++模块node -> c++ 
  2.1 request

  2.2 response
 3. 网络进程响应头数据(相应：头 + body) 通知渲染进程开始干活
 text/html test/json image/jpg 提前通知我们的渲染进程？浏览器进程 提交导航消息(commitNavigation) 消息到我们4
 网络协议 TCP HTTP
  1. DNS解析 DNS 服务器
 4. 渲染进程收到提交导航信息后，开始准备接受html 直接和网络进程建立数据通道 可以进行对接 
 5. 渲染进程会像浏览器进程发送”确认提交“，准备好接受和解析页面数据
 6. body 到了 渲染进程渲染。 if/else 移除之前的页面 yem页面的重绘和重排 提交 确定文档消息


    标签页
    可以实现并行执行 
3. 发送请求?


