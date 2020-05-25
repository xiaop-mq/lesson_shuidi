- JS内存

- js 是单线程的， 请问这个单线程包括setTimeout  promise  addEventListener这些吗？ 是什么的单线程？
在渲染进程中 里面的Input标签过程是什么样的 首先它是 dom树 input(file类型) -> css 挂载到页面上了  通过与浏览器主进程通信，主进程读取磁盘图片数据返回给渲染进程，(URL FileReader ) 渲染进程里面的js发去ajax 请求，是通过浏览器主进程去调用网络进程，发起请求还是渲染进程可以直接调用网络进程发送请求？

Ajax  请求  是由js的哪个对象提供的？ XMLHttpRequest对象
独立于js引擎之外的 xmlhttpRequest  http进程去发送请求  
是在js ie6 出现 它是以什么身份登场的？ActiveXObject

```js
// 创建XMLHttp对象
function getHTTPObject() {
    if (typeof XMLHttpRequest == 'undefined') {
        XMLHttpRequest = function () {
            try { return new ActiveXObject('Msxml2.XMLHTTP.6.0');}
                catch (e) {}
            try { return new ActiveXObject('Msxml2.XMLHTTP.3.0');}
                catch (e) {}
            try { return new ActiveXObject('Msxml2.XMLHTTP');}
                catch (e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}
```

chrome  打开进程   为什们每个tab新开一个进程？
1. 每个页面打开一个进程，可能更快。
    进程做dom,css,layout, js 执行  需求从页面越来越复杂的时候 2008年 RIA 3-2  4，5技术经理
2. 进程间不能通信 更安全 沙箱
chrome 之前， 所有的tab 都是共用一个进程

渲染进程  JS   单线程的宿主   


1. JS单线程是指(JS代码运行环境)V8引擎的单线程  词法  语法  上下文环境 AST(抽象语法树) ...
   tab启动的时候 新的进程  启动进程之后一定会启动主线程 mainThread
? 

1. GUI渲染线程
   负责渲染浏览器界面  解析html,css(css不会阻塞因为html已经渲染结束)，构建DOM树, render树， 布局与绘制 底部的JS会执行
   多线程会让简单的web变成变得复杂
2. 事件触发线程
   事件监听进入到事件循环队列当中
3. http请求线程
4. 定时器线程


js 单线程 = js 引擎线程 也就是V8

闭包 引用式复制， 动态 作用域 隐式类型转换 - JS的内存概念的理解

1. 小黄书 + 讶羽 -> 浏览器底层 联系起来所有的考点 = 极客时间 (浏览器工作原理与实践) 

理解JS 内存机制 可以解决面试中的大部分问题
1. JS语言需要手动打理内存吗？

2. 词法分析的时侯  第一章
   为什么会产生引用式赋值？  词法 变成token
   简单数据(变量 常量) -> 存在栈空间
   复杂数据  ->  存在堆空间
   1. 堆到底是什么？  快排  考查`堆排序`
      堆：特殊的二叉树
   2. 为什么在有栈空间之后还要有堆空间？
   有栈的原因：代码跟HTML一样，是不好理解的，选择数据结构加算法


   1. 执行栈 构建
   2. 执行  