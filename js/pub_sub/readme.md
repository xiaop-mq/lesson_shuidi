- 事件监听 执行逻辑是什么？
  使用的浏览器是我们上网的代理对象 chrome.exe 就会启动一个进程
  JS是chrome里的语言编辑器来执行的
  html+css解析成DOM树背后使用的是树这种数据结构
  之后就由js执行 脚本
  事件是异步的
- 注册事件?（去哪里） 会注册到micro event 回调函数 形成了事件定力
- 事件发生时怎么执行
   js 是单线程语言 onLoad 
   轮询注册事件的地方 

   订阅，发布者模式

   首先有房 有的是楼盘 是一个发布者 需要发布有房卖的信息
   有买房者 订阅者 
   建模index.html买房


- 了解了什么是Listen方法可以添加订阅者（可以是粉丝）
  实现的是saleoffices.client.push(fn);//saleoffices对象实现广而告之的功能 形成我们的订阅关系
- saleoffices 楼盘消息发布者（未来有消息发给你）
  trigger 有事通知 把所有的订阅者都执行一次
- apply 函数运行外，指定其this指向，后面接arguments
- document.body.addEventListener('click',fn);
  发布者`document.body`可以有订阅者一直可以添加
  订阅者 fn
  放在document.body.events = []//监听多次 this指向对象
  click
  点到页面时 就会触发trigger下
  event.each(fn)
