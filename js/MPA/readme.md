SPA 单页应用
MPA多页应用

1. SPA架构的一个流程：
页面上有一个入口
<!-- 整个应用的入口，一个应用是由很多页面的 -->
```html
<div id="app"></div>

<!-- 以react-router为例 -->
<Route path="" component={}>
```
1.path导向页面，但是整个应用的入口都是那个空的div标签，浏览器请求来的也是这个
2.拿到这个空标签，浏览器下一步发出JS请求，在app中把内容构造出来
3.然后才是用户看到的页面

SPA
性能监控的指标 FMP：第一次有意义的内容绘制，是相对来说是挺晚的
因为前面还要加载JS等文件，然后构造出内容才能出来页面，这是需要等待一个很长的时间的。
这是SPA的一个性能问题
有的是叫
TTI:time to interactive 用户可交互的那个时间点，也是很晚的

next（react的服务端渲染） nust（vue的服务端渲染） nest（node的一个框架）这三个框架

SSR服务端渲染 CSR客户端渲染（浏览器渲染） SPA 是浏览器渲染
# SSR
它的渲染流程是：
1. <div></div> 拿到完整的内容，有意义的内容也就是第一个请求一进来，浏览器一渲染，就能拿到页面了
之前SPA是第三步才拿到内容，而SSR是第一步就拿到内容了。内容哪里来的？就是服务端渲染来的
2. 
页面第一次出来的时候，用户是可以拿到可交互的内容的，是有内容的！
第一次是拿到的空的div,也就是里面的body中是没有实质性内容的，里面的内容是之后JS渲染出来的内容


SSR在切换页面的时候，
而SPA客户端渲染能看到一个好处
优点
用*-router来切换页面很舒服，不用整个页面都刷新，比如vue-router react-router
SSR缺点
每次切换页面都会造成页面重新加载一次，尤其是移动端，本来屏幕就小，切换的时候容易整块都是空白的

（java的）JSP传统的服务端渲染 模板引擎EJS 都是服务端渲染 模板引擎 
跟vue react不一样 分开看

## 同构
结合了SPA + SSR优点
SSR优点TTI时间很早，第一步就能拿到内容，但切换页面的时候不大优雅
SPA优点相反
SPA + SSR这种架构 很好 看到内容扽速度很好 体验很好
移动端的时候，也就是很要求高性能地方也会使用SPA+SSR这种架构

美团 服务端是 react的同构
SSR用在哪，
第一次访问的时候通过SSR构造html返回的，是有意义的内容。不用再通过js来构造，省了很多时间。之后用户的交互：通过SPA各种*-router来进行页面的导航(切换页面舒服),
第一次出来的页面服务端渲染之后返回的，之后的交互是SPA

SPA:单个页面，单个html里的一个app下面，融合整个应用，都在这里面包着
MPA:多页应用，多个应用，多个html,多个入口

打包后的之后一个html文件《--SPA
多页应用，整个应用有多个入口（html）

同构系统 是个耗时耗力的过程

适合哪种选哪种最好是

## MPA
后台管理系统 全公司的前端基本上都往这个地方写过代码，做整个公司各个业务的
商品 广告 促销 物流 供应链（有自己的仓库，里面有自己的熟食，还有其他产品的供应的地方管理）
ERP 用的就是MPA的模式
因为整个应用有多个入口，每个html实际上是天然解耦的，
对于每个部门，在后台管理系统中会有一个标签块，是属于一个部门的，每个部门的业务是互不相关的，这种就十分适合 有独立的块
价格（支付部门）
促销（promotion.html) 里面想用什么js jq vue不管什么，对于这个html，可以任意操作html

MAP (multiple-page-application)
初始化一下

源码放src目录下
index.js入口文件《--SPA
但是MPA有多个入口，会src下面划多个文件，放多个入口
每个部门的技术选型是允许不一样的

促销比如选用的技术栈是raact
要先引入react.js
然后在引入写的业务代码

支付部门选的技术栈是jquery
引进来jq.js

有一个问题了，
这两个部门从技术上可以看出他们不可能让他们入口都是同一个html,因为引入的技术不一样，不可能把所有的东西都引入进来，所以给每个部门自己的入口文件，跟单页应用不一样（SPA)

给他们自己的html
一个入口的js，一个入口的html
装两个依赖试试 -S生产环境下需要的

对于react,入口文件写什么

引入一个资源
1. 
import(xxx).then 异步的 后来出来的
2. 
import xx from xx 同步的

cnpm i react react-dom -S
cnpm i webpack(核心依赖) webpack-cli(命令行工具) -D
cnpm i @babel/core(核心的库，核心工作) @babel/preset-env(负责各种环境的编译,根据环境，把js代码打包到执行的环境下比如chrome的多少版本) @babel/preset-react(负责react的编译，解析jsx语法的) -D
还有插件机制preset