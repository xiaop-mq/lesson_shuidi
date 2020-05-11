- web 交互的数据格式是什么？有没有方法 在用户请求时提供多种数据返回格式的选择？
  Ajax json/html
  传统老浏览器 text/html
  动态web ajax text/json
  mvc mvvm 请求头的分析
- 计算机网络这块的知识
  1. 为什么http createServer callback req+res 表达出来？
  web编程是浏览器n和服务器1之间的通信 不是php/noed 底层是http协议
  HTTP协议构建于TCP/IP协议之上的 网络应用层协议，
  HTTP/0.9  1991 学术交流，在网络之间传输HTML 超文本内容
  采用请求响应的模式
  TCP 安全链接管道
  - HTTP基于TCP/IP  客户端 传输IP地址 可以找到地址(dns domain),端口，三次握手，建立起连接
  dns  递归的查找过程 
  浏览器缓存 -> host 文件 -> 运营商 -> ... -> 美国
  三次握手
    确保双方都有req res能力
    双方都有发送和接收数据包的能力 ack  syn
    1. browser   syn(seq + j)  SYN_SENT 同步序列序号
    2. ack = j + 1  发回给你 同时发送自己的 seq = k
    3. browser established 状态  ack = k + 1 
  四次握手  断开连接   1:n
  发送完请求后 
  1. A -> TCP 发送完毕  B   FIN 报文
  2. B 接收到  不会立即用FIN  报文回复主机A，主机A 发送一个确认ACK，同时通知自己相应的应用程序，(防止A多次发送FIN报文)
  3. TCP向A发送FIN报文段
  4. A 收到FIN报文 B  ACK  表示彻底释放
  请求行 GET  /posts
  0.9版本中连请求头请求体都没有  连接a html 文本
1.0版本
  微软 IE
  1994年  支持多文件下载
  text/html 0.9  image/png text/css text/js
  accept:  text/html 
  accept-encoding:gzip 
  accept-charest: utf-8
  accept-language:zh_CN
  请求体 POST
  状态码
  Cache 机制   Last Modify
  userAgent:有什么用？判断用户的浏览器类型
  在业务开发中 很重要
  - 通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计。PC/mobile iphone/android 手机网站
  - logs 日志处理  阿里下单的 30% Iphone 用户花了70%钱

1.1 版本



  2. 在哪个版本HTTP支持 png的解析
  3. 雪碧图 http 请求，合并到一张背景图上，前端性能优化技术，为什么现在不问，哪个http版本
  4. userAgent在哪个版本出现
  5. 哪个版本极大的提升了下载速度