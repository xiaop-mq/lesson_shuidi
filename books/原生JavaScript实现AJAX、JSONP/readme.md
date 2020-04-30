## 原生JavaScript实现AJAX、JSONP

- 前端开发者在需要与后端进行数据交互时，为了方便快捷，都会选择JQuery中封装的AJAX方法，但是有些时候，我们只需要JQuery的AJAX请求方法，而其他的功能用到的很少，这显然是没必要的。
1. AJAX
- ajax的核心是 XMLHttpRequest
一个完整的ajax请求包括以下步骤
- 实例化 XMLHttpRequest
- 连接服务器
- 发送请求
- 接收响应数据

2. JSONP
ajax之所以要跨域 罪魁祸首时浏览器的同源策略。即 一个页面的AJAX只能获取这个页面相同源或者相同域的数据。如何叫同源 同域？--- 域名 协议 端口号都是相同的
http://example.com 和 https://example.com 不同，因为协议不同；   

http://localhost:8080 和 http://localhost:1000 不同，因为端口不同；   

http://localhost:8080 和 https://example.com 不同，协议、域名、端口号都不同，根本不是一家的。

当跨域请求时，一般都会看到这个错误：
XMLHttpRequest cannot load http://ghmagical.com/article/?intro=jsonp%E8%AF%B7%E6%B1%82&v=5520. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost' is therefore not allowed access.

## 跨域请求JSONP(JSON with padding)
是一种跨域请求方式。主要原理利用了script标签可以跨域请求的特性，由src属性发送请求到服务器，服务器返回js代码，浏览器接受相应，然后直接执行就可以了 这和通过script引入外部文件是一样的

jsonp由两部分组成：`回调函数`和`数据`
回调函数由浏览器控制，作为参数发往服务器端。当服务器响应时，服务器端就会把该函数和数据拼成字符串返回。
jsonp的请求过程
- 请求阶段：浏览器创建一个script标签 并给src赋值 类似http://example.com/api/?callback=jsonpCallback
- 发送请求：当给script的src赋值时，浏览器就会发送一个请求
- 数据响应：服务端将要返回的数据作为参数和函数名称拼接在一起(格式类似”jsonpCallback({name: 'abc'})”)返回。
当浏览器接收到了响应数据，由于发起请求的是script，所以就相当于调用了jsonCallback,并且传入了一个参数。


