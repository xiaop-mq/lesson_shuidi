# 简单快速的全栈项目
![](https://user-gold-cdn.xitu.io/2020/2/29/1708ecdf69f27946?w=268&h=253&f=jpeg&s=49512)

------------------------------------------

## 一.前言
---------------
文章主要以宏观的形式来聊一个全栈开发项目，非常适合初级阶段学习前端的小白，适当的全栈开发是前端学习在初级阶段所必须要有的技能。大多数人都知道的是，一个全栈开发项目是大多是由：<font face="黑体" color=red>电商系统+社交系统+博客系统</font> 构成。但我们不知道的是其中的种种原理和方法。而我今天要讲解的项目就是以**博客**的形式为例子，帮助大家解开疑惑。

#### 说在前面
> 还未安装vue？这里有[vue的安装教程](https://www.jianshu.com/p/d1651fae7ecc)，很详细噢！当然如果你vue基础不是很好的话，这里也有帮助你提升vue项目的视频。[技术胖vue视频教程](https://juejin.im/post/5a5bc8c36fb9a01ca26774eb)

> 这是一篇基于vue & mongodb 为主的项目，如果还未安装mongodb，可以参考[mongodb安装教程](https://jingyan.baidu.com/article/5225f26b993fe1e6fa090832.html)，操作简单，容易上手，想要弄懂全栈项目用vue如何构建全栈项目？就快快花几分钟时间浏览这篇文章吧！


---------------

## 二. 问题提出：博客(blog)

-------------------------

- 思路
1. 在整栈项目中，我们需要建立前端(web)和后(server)端分离的框架。除此之外，还需要有在后台(admin)开发的思想。或许很多人被我这么一说绕晕了，那么我就和你说说它们之间的区别。

>  **前端后端后台的区别**   **后台**：提供给系统管理者能够看到的页面，而游客、用户看不到的页面；**前端**：程序员在进行编程的时候的代码；**后端**：对应前端而言的，编写代码基本上是提供给前端调用，是不需要处理UI的内容.比如：逻辑层。 

2. 前端我们需要进行的页面操作，后端数据库的连接，后台的管理到底如何去执行？

>  前端(web)我们需要使用vue创建一个新的前端项目，相对来说：vue用户体验好，并且相对react来说更容易上手，且vue为单页应用。而后端(server)主要用于对博客文章的**增删改查**，提供api。后台(admin)则是帮助管理员处理事物，本文章暂不涉及后台的内容。因此我们全栈开发的大致思路就搭建好啦！

-------------------------------------------

## 三.具体讲解
- 项目的创建过程：在vue目录下新建blog文件夹，在blog文件夹下新建server文件夹和admin文件夹。

### 后端server

 #### 1.首先我们要将server文件进行初始化 `npm init -y`.之后，我们需要在server文件夹上新建文件夹db，在db文件夹中新建文件db.js，建立该文件的目的是连接本地的数据库。`localhost:27017是mongodb默认的地址`，这是一个常考点。连接本地数据库之后，在mongodb中可以使用`use myblog`切换进blog系统。代码如下：
 ```
 // 数据库层的分离 向外提供
module.exports = app => {
    // mongodb 的驱动
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/myblog', {
      useNewUrlParser: true // 属性设置为true来避免"不建议使用当前URL字符串解析器"警告，兼容moogoose的新的URL连接的机制。
    })
  }
 ```
 
 #### 2. 接下来，我们要做的事情就是建立数据库的连接。我们在server文件夹下新建index.js文件。代码里有引入express脚手架，我们可以通过`yarn add express`来添加express脚手架。如果对express有疑问的大佬们，这里也有关于[express脚手架的讲解](https://blog.csdn.net/q3254421/article/details/83963049)。代码如下：
 
```
const express = require('express');
const app = express();
// 将db.js 引入
// import  es6 模块化   es5 require
// require('./db/db')(app); //数据库的连接

```
> 使用`node index.js`运行项目，没有报错则代表数据库连接成功。

#### 3. 现在我们就要开始建表，将表设计都分成独立的模块来建立。可以去想想要做blog，我们需要建哪几张表呢？首先我们必须要建的表是文章表：Article.js。在mongodb中，我们建的表都叫做collection(集合)。代码如下：

```
// 建表  collection  
// 1. Schema  表设计
// 2. 模型对象 返回 
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  title: { type: String },
  isTop: { type: Boolean}, //是否置顶
  summary: { type: String }, // 列表里的介绍
  body: { type: String },
  categories:[{ type: mongoose.SchemaTypes.ObjectId, ref:'Category'}]
}) // ref:category 外键关系，一个文章可以有多个类别。

//类 表  articles
module.exports = mongoose.model('Article', schema, 'articles'); 

```
> 在文章表中值得一提的是里面有一个新增`mongoose`，Mongoose是MongoDB的一个对象模型工具，是基于node-mongodb-native开发的MongoDB nodejs驱动，可以在异步的环境下执行。同时它也是针对MongoDB操作的一个对象模型库，封装了MongoDB对文档的的一些增删改查等常用方法，让NodeJS操作Mongodb数据库变得更加灵活简单。我们依旧可以通过`yarn add mongoose`来添加mongoose。

#### 4. 用户表User.js代码如下：

```
 // blog 分类的Schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    // 获取用户数据的时候， 不要把密码取出去
    select: false, // select 查询
    set(val) { 
      return bcrypt.hashSync(val, 10) // 不会存明文密码
    }
  },
  // 用户和文章的关系 ？ 
})
// model -> mongodb 存储到底做了什么事情? mongoose
module.exports = mongoose.model('User', schema, 'users')

``` 

> 在这里有一个`bcrypt`加密解密算法，需要通过`yarn add bcrypt`添加方法，代表对用户输入的密码进行加密解密。

#### 5. 文章分类表Category.js。
```
// blog 分类的Schema
const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: { type: String }
})
// model -> mongodb 存储到底做了什么事情? mongoose
module.exports = mongoose.model('Category', schema, 'categories')

```
--------------------
### 接下来就是前端部分的讲解。
1. <font face="黑体" color=red>首先我们要掌握vue-router的两种模式的区别:</font> 众所周知，vue-router有两种模式，hash模式和history模式，这里来谈谈两者的区别。
- hash模式:
hash模式背后的原理是onhashchange事件,可以在window对象上监听这个事件:
上面的代码可以通过改变hash来改变页面字体颜色，虽然没什么用，但是一定程度上说明了原理。更关键的一点是，因为hash发生变化的url都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以用了，同时点击后退时，页面字体颜色也会发生变化。这样一来，尽管浏览器没有请求服务器，但是页面状态和url一一关联起来，后来人们给它起了一个霸气的名字叫前端路由，成为了单页应用标配。
- history路由:
随着history api的到来，前端路由开始进化了,前面的hashchange，你只能改变#后面的url片段，而history、api则给了前端完全的自由，history，api可以分为两大部分，切换和修改切换历史状态包括back,forward,go三个方法，对应浏览器的前进，后退，跳转操作，有同学说了，(谷歌)浏览器只有前进和后退，没有跳转，嗯，在前进后退上长按鼠标，会出来所有当前窗口的历史记录，从而可以跳转(也许叫跳更合适)：
```
history.go(-2);//后退两次
 
history.go(2);//前进两次
 
history.back(); //后退
 
hsitory.forward(); //前进
```
修改历史状态
包括了pushState,replaceState两个方法,这两个方法接收三个参数:stateObj,title,url
```
history.pushState({color:'red'}, 'red', 'red'})
 
window.onpopstate = function(event){
    console.log(event.state)
    if(event.state && event.state.color === 'red'){
        document.body.style.color = 'red';
    }
}
history.back();
history.forward();
```
通过pushstate把页面的状态保存在state对象中，当页面的url再变回这个url时，可以通过event.state取到这个state对象，从而可以对页面状态进行还原，这里的页面状态就是页面字体颜色，其实滚动条的位置，阅读进度，组件的开关的这些页面状态都可以存储到state的里面。

**history模式怕啥**:
通过history api，我们丢掉了丑陋的#，但是它也有个毛病：
不怕前进，不怕后退，就怕刷新，f5，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的,不玩虚的。

2. 在Vue中，我们需要在router文件夹下的index.js添加路由，目的就是为了引入创建的vue项目。代码如下：
```
// 引入vue项目 添加项目的路径
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'
import Tag from '../views/Tag.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //列表页
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  // 文章
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  },
  //每个分类下有多少文章
  {
    path: '/tag',
    name: 'tag',
    component: Tag
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

```

> 创建文章页面的时候，它的路径是这样的：path: '/article/:id',里面的id代表动态路由，根据id的不同查看不同的文章。

3. 既然我们引入了vue页面，就必须去创建相应的文件。因此，我views目录下新建main.vue,article.vue,tag.vue文件。
- 文件的项目目录
![](https://user-gold-cdn.xitu.io/2020/2/29/1709162cea4bed4e?w=323&h=372&f=png&s=23593)

4. 最后，我们在components目录下新建组件文件：如头部组件，脚部组件，加载组件，评论组件以及文章项目组件，而这些都是blog会复用的组件。

![](https://user-gold-cdn.xitu.io/2020/2/29/1709167f831bdb93?w=269&h=285&f=png&s=17753)

## 执行结果
- localhost:8081端口
![](https://user-gold-cdn.xitu.io/2020/3/1/17091b11cc37e810?w=1399&h=941&f=gif&s=130882)
- localhost:3001端口
![](https://user-gold-cdn.xitu.io/2020/3/1/17091b14aa00282d?w=1399&h=941&f=gif&s=201231)

> 文章看到现在，相信读者朋友们是知道了`router + views + components`功能分别是什么啦！

## 打包上线
1. 使用`npm run build`命令，将web文件打包成`dist`，打包后将文件放至server目录下，之后将文件名改成web。进行项目上线，在后端进行上线。
2. 回到后端server目录下，添加代码：
```
app.use('/', express.static(__dirname + '/web'))

app.listen('3001', async(req, res) => {
  console.log('http://localhost:3001');
})
```
> 在此处，express,static是express提供的静态资源，之后在将打包中的内容展示出来，后端就等着你把vue打包好的静态资源给你一个包，后端把包放进服务器中，启动根路由，交给web目录，之后网络端访问即可。
### 总结项目执行顺序 
- vue 写完后，npm run build 生成一包静态文件。
- 静态文件包放到服务器目录下。
- 在把vue发布出去。
- 最后在3001端口驱动（上线）

-----------------------
### 结束
 > 文章看到现在也结束啦，第一次写文章，如果有错误的话就麻烦大家给我指出来吧！如果觉得不错的话别忘了点个赞👍再走噢！

### 最后附上Github地址
- 源码地址：[blog](https://github.com/pppmmmqqq/lesson_shuidi/tree/master/vue/blog)
