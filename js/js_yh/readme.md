## 性能优化 跟 安全 

- http://www.baidu.com  发生了什么？
全栈启用https
  状态码 ？
  304 
  301 永久性跳转
  302 临时性的跳转
     忽略头部请求
     GET 跳转没有问题 
     POST 请求 就会降级为 GET
  307 临时性的跳转 
     api  POST -> GET
- 点击一个a标签 不跳转怎么做？
  prevent  除了这个呢？  status  code
  1XX  目前正常  告诉客户端可以继续发送请求或忽略这个相应
  101  Switching Protocol 
  HTTP 升级为websocket 时使用 升级 websocket 协议的时候可以用
  2XX  
  204 没有返回(body) 但是也是成功的
  205 不返回内容  刷新试图  应用场景： 表单不用多次提交，规避了
  206  应用场景  用于大文件上传，多文件上传，
  3XX
  301  永久跳转 http -> https  域名废弃了 老用户从老域名出来
  302 临时跳转
  304 Not Modified  
     If-Modified-Since
  
  400  Bad Request 报文存在错误
  401  Unauthorized
  403  请求被拒绝
  404
  405 Method Not Allowed
  408 Request Timeout
  409 多个请求冲突
  413 请求数据过大
  414 请求里URI 太长
  429 客户端发送太多请求
  431 请求头字段内容太多

  500 Internal Server Error 
  501 Not Implemented
  502 Bad Gateway
  503 服务忙
  504

- js 优化我们可以做什么？
  - eval with 都不用
  eval 可以把任何的js文本运行起来， 黑科技
  特别消耗性能 不要用eval
  安全问题
  会造成XSS攻击
  cookie 里面可能有用户的身份信息，eval js cookie ajax请求发给他自己的服务器jsonp
  用户的cookie就拿到了，
  解决方案是什么？
    - 肖 cookie 1 ,httponly 核心的cookie加上httponly
    - 用户输入，前后端转义，encodeURIComponent <script> ''
  - 加载的顺序
    css head 想要尽快看到页面
    script 阻塞？？为什么js文件会阻塞？  早期可以添加 <script src="" defer>
    因为js 动态的代码，会进行动态操作DOM 下载且执行完毕
    js文件从下载开始，放在body的尾部
    css 雪碧图 现在还有必要吗? http 请求少，缺点是 第一次下载的时候有点慢
    雪碧图 css background-position
    ali iconfont 为什么不好影响性能 cdn缓存 会部署在cdn上  字体库 阿里，部署dcn集群 img.taobao.com 
    背景图 直接 img src="" 背景图片增加就http请求 没有http请求 ，因为打包的时候被webpack处理成了base64化，如果有请求http协议更新了 对它的支持，0.9 1.0 1.1 2.0 3.0 
    <!-- 极客时间 -->
- js 动画优化 requestAnimationFrame