## router 源码分析



 # 深度剖析路由 

![](https://user-gold-cdn.xitu.io/2020/2/28/1708b310cb155eb6?w=1920&h=1200&f=jpeg&s=147993)

       作为前端的初学者，学一个前端框架是必不可少的。因为对于新手而言，VUE相较于REACT更容易上手，所以作者选择
    了VUE。如果你正好也想学一个框架，那你走运了哦。跟着作者一起来发开发一个简单的电商项目，来学习VUE吧！
> 这是一个基于 vue & axios  & mock & token & stylus & Cube-UI的电商项目demo，面向 vue 初学者，场景虽简单，但五脏俱全。涵盖非常多的vue及其相关技术的基本操作。有详细的注释，帮助大家快速上手 vue 。

## Github地址
- [vue-jingdong (不要吝惜你的小星星哦)](https://github.com/zby-66/lesson_shuidi/tree/master/vue/jingdong/jingdong)
- 话不多说上效果图

![](https://user-gold-cdn.xitu.io/2020/2/27/17085855536a75fb?w=1262&h=950&f=gif&s=492241)


    
-------------------------------------------------------------------------------------------
## 正文部分
>作为VUE的初学者，创建一个项目后的demo里面就有home页面和about页面的跳转。在写这个小项目的时候，我也是照葫芦画瓢没有过多的思考。写完路由部分的时候，反过来思考，心中也有许多疑问。**路由是什么？为什么要使用路由？路由有什么功能？可以写出路由跳转的源码吗？**
带着这些问题我查阅了很多资料和文章，发现它们都比较散，往往只讲述一个小点。如果你也有相同的问题就跟随我来逐一击破吧~

## 路由是什么？

1. 路由：即浏览器中的哈希值（# hash）与展示视图内容（template）之间的对应规则。
   
>在计算机网络原理中，路由指的是根据上一接口的数据包中的IP地址，查询路由表转发到另一个接口，它是决定一个端到端的网络路径。所以说路由就是用来解析URL以及调用对应的控制器的。
2. vue中的路由是：hash 和component的对应关系。Vue路由即vue-router，在web开发中，“router”是指根据url分配到对应的处理程序。

> 通俗的来说，在web开发中，路由就是一套映射规则（一对一的对应规则），由开发人员制定规则。
当URL中的哈希值（# hash）发生改变后，路由会根据制定好的规则，展示对应的视图内容。

![](https://user-gold-cdn.xitu.io/2020/2/28/1708b8b6d1ad6101?w=450&h=300&f=jpeg&s=56506)

## 为什么要使用路由？

在传统的web开发中每一个请求地址都会请求服务器来进行处理，但是用户有些操作则无需请求服务器，直接页面端修改下逻辑就能达到目的，在这种方式下最好的方法是使用路由，因为使用路由时，URL会随着改变，用户浏览一个网页时可以直接复制或收藏当前页面的URL给别人，这种方式对于搜索引擎和用户来说都是友好的。

**在 Web app 中，通过一个页面来展示和管理整个应用的功能。
SPA（单页应用程序）往往是功能复杂的应用，为了有效管理所有视图内容，前端路由 应运而生！**

## 路由有什么功能？
这个问题，我是通过Vue Router开发者文档，进行了解的，但是我看完之后还是有点懵懵懂懂，没有特别理解，之后我是通过查阅一些文章对路由的功能有了更深入的了解，下面跟随作者一起结合项目来看看吧~
- [vue router文档 (这篇文章我就介绍其中的几个功能，其他的可以去看看哈)](https://router.vuejs.org/zh/installation.html)
### 基本使用

安装：npm i -S vue-router或者创建vue项目时就选择了router

```
<!-- app.vue -->
<template>
  <div id="app">
  <!-- 5 路由入口 指定跳转到只定入口 -->
    <div id="nav">
      <router-link to="/login">登陆</router-link> |
      <router-link to="/register">注册</router-link>
    </div>
    <!-- 7 路由出口：用来展示匹配路由视图内容 -->
    <router-view/>
  </div>
</template>

// 3 创建两个组件  作者就不写代码啦vue项目一开始的demo有创建。

//router中的index.js
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

// 4 创建路由对象
const routes = [
  {
    path: '/',
    name: 'login',
    redirect: '/login'
  },
   // 路径和组件一一对应
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //项目路由懒加载，秒开
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
]
 
<!-- main.js -->
// 1 导入 vue.js 
import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
// 2 导入 路由文件 
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import steaxios from './setaxios'

steaxios();
Vue.config.productionTip = false
Vue.prototype.$http=axios//挂载axios
new Vue({
  router,
  store,
  // 6 将路由实例挂载到vue实例
  render: h => h(App)
}).$mount('#app')
```
通过代码注释中步骤，就完成路由基本功能的实现啦！

### 重定向
在这个小项目中，我是直接使用重定向，让页面一开始在根路径的时候就跳转到登陆页面。

```
 {
    //  将path 重定向到 redirect
    path: '/',
    name: 'login',
    redirect: '/login'
  },
```
重定向还有两种方式

1. 重定向的目标可以是一个命名的路由：

```
{ path: '/', redirect: { name: 'login' }}
```
2. 重定向的目标可以是一个方法，动态返回重定向目标：

```
{ path: '/', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
```
**注：导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。**

### 懒加载（延迟加载）
1. 定义：懒加载也叫延迟加载，即在需要的时候进行加载，随用随载。
2. 作用：路由懒加载可以帮我们在进入首屏时不用加载过度的资源，从而减少首屏加载速度。也就是按需加载。使用第三方组件库依赖过大,会给首屏加载带来很大的压力，一般解决方式是按需求引入组件。如果引用组件的组件，也是跳转到相应路由，再进行加载需要使用的组件，可以提高性能。
3. 实现懒加载的三种方式：
   
```
一、Vue异步组件技术：
	{
		path: '/home',
		name: 'Home',
		component: resolve => reqire(['path路径'], resolve)
	}
二、es6提案的import()
	const Home = () => import('path路径')
	//本项目使用的方式
   {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
三、webpack提供的require.ensure()
	{
		path: '/home',
		name: 'Home',
		component: r => require.ensure([],() =>  r(require('path路径')), 'demo')
	}
总结来自：
作者：小梦哟
链接：https://juejin.im/post/5e4c0b856fb9a07ccb7e8eca
来源：掘金
```
#### 可以手写懒加载源码吗？
这个问题我也想了一下，实现懒加载肯定是要直接操作DOM。作为前端小白的我能力有限，暂时无法完成，但是找到了一篇文章可以供大家参考。
- [Vue实现懒加载的基本思路](https://www.cnblogs.com/leegent/p/9495787.html)

#### 懒加载的弊端
> 所有的东西都是一把双刃剑，有利也有弊，只能按需使用，切不可过度使用。

大项目中的路由懒加载不适用于开发环境（会导致保存代码时热更新代码时间很长20s左右）

**解决办法**
在 router/ 文件夹中加入2个文件夹：

_import_development.js

```
module.exports = file => require('@/' + file + '.vue').default
```
_import_production.js

```
module.exports = file => resolve => require(['@/' + file + '.vue'], resolve)
```
index.js

```
const IMPORT = require('./_import_' + process.env.NODE_ENV + '.js');
```
组件引入时写入：

```
component: IMPORT('pages/mainPage')  //  组件
```
### 嵌套子路由


在我的小项目中也使用了嵌套路由。嵌套路由顾名思义，路由中又包含子路由。例如：

```
/botnav/index                         /botnav/list
+------------------+                  +-----------------+
| botnav           |                  | botnav          |
| +--------------+ |                  | +-------------+ |
| | index        | |  +------------>  | | list        | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```
想要在botnav页面中，切换index,list等多个页面时，嵌套路由就派上用场啦，它的书写规则如下：

**注：childern子路由path一定不要加上‘\’，写代码时，写路由路径写习惯了，很容易犯这个小错误**
```
{
    path: '/botnav',
    name: 'botnav',
    component: () => import('../views/Botnav.vue'),
 children:[
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/Mine.vue')
      },
    ]
}
```
实现效果：

![](https://user-gold-cdn.xitu.io/2020/2/29/1708ecdb7a304572?w=442&h=105&f=png&s=11990)
这几个botnav就可以在同一个页面切换啦。

### 过渡动效

在写项目时，为了增加用户体验感，加上路由切换时的过渡动效是必不可少的，下面先看一下过度动效的效果展示：

![](https://user-gold-cdn.xitu.io/2020/2/29/1708ed39cb7dd86e?w=439&h=791&f=gif&s=454676)

<router-view> 是基本的动态组件，所以我们可以用 <transition> 组件给它添加一些过渡效果：

```
<template>
    <div>
      <transition :name="transitionName">
        <router-view class="Router"></router-view>
      </transition>
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler"
            class="botnav">
        </cube-tab-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName:'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    //点击与自身不同的其他导航
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
          case '首页':
          this.$router.push('/botnav/index');
          break;
          case '分类':
          this.$router.push({path:'/botnav/list'});
          break;
          case '搜索':
          this.$router.push({path:'/botnav/search'});
          break;
          case '购物车':
          this.$router.push({path:'/botnav/cart'});
          break;
          case '我的':
          this.$router.push({path:'/botnav/mine'});
          break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .cube-tab-bar.botnav
        position  fixed
        bottom  0
        left 0
        z-index 1000
        width 100%
        background #fff
        font-size  25px
        .cube-tab div
            font-size  16px
            padding-top  3px
        i 
            font-size 20px
            <!--以下代码实现过渡效果-->
      .Router
        position absolute
        width 100%
        transition all 0.8s ease 
      .silde-left-ender,.slide-right-leave-active
        opacity 0
        -webkit-transform translate(100%,0)
        transform translate(100%,0)
      .slide-left-leave-active,.silde-right-enter
        opacity 0
        -webkit-transform translate(-100%,0)
        transform translate(-100%,0)
</style>
```
以上代码建立了一个botnav，用<transition>包裹<router-view>，并给transition起了一个名字，利用css中的leave和enter来完成页面切换，在里面写上要实现的效果。这里我引用VUE.js中的一张图片来直观的解释：
   ![](https://user-gold-cdn.xitu.io/2020/2/29/1708ee7fddbb81ff?w=1200&h=600&f=png&s=11706)
   本项目中用silde-right替换了v-。
   路由还有其他很多功能，我就不一一介绍啦，大家有兴趣可以去看看官方文档。下面我们来解答最后一个疑问，**？可以写出路由跳转的源码吗？**
   
##   可以写出路由跳转的源码吗？ 
> 想要知道路由的源码怎么写？一定要知道路由是怎么实现的。我浅显的理解是，对于路由的hush模式，我们切换一个页面，就是对一个视图的展示。需要对这个视图进行展示，一定想要获取这个页面的huas值，然后去对这个视图进行注册，然后进行展示。这样利用路由切换页面就成功啦。我不知道我的理解是否正确，希望大佬指出。下面我对我的思路进行源码的书写，先放上效果图。

![](https://user-gold-cdn.xitu.io/2020/2/29/1708ef8b1a2ddf77?w=435&h=324&f=gif&s=34687)

我们先写三个链接：

```
 <div id="nav">
    <a href="#/page1">page1</a>
    <a href="#/page2">page2</a>
    <a href="#/page3">page3</a>
  </div>
  <div id="container"></div>
```
然后我们定义一个hashRouter方法，并实现进入首页时，返回空。

```
class HashRouter {
//初始化时执行
    registerIndex(cb = () => {}) {
      this.routers.index = cb;
    }
  }
```
接下来我们进行获取hash和对页面视图进行注册：

```
 class HashRouter {
    constructor() {
      this.routers = {}; //配置， 是设计关键点 routes 
      //存储路由配置的 hash key  val Component
      window.addEventListener('hashchange', () => {
        let hash = window.location.hash.slice(1),//获取页面hash
          handler;
        if(!hash) {
          handler = this.routers.index;
        } else {
          handler = this.routers[hash];
        }
        handler.call(this);//将hash抛出去
      })
    }
    // hahschange 后执行哪个函数
    // vue 组件 函数式组件 callback
    register(hash, callback){
      this.routers[hash] = callback;//进行视图注册
    } 
    //初始化时执行
    registerIndex(cb = () => {}) {
      this.routers.index = cb;
    }
  }
```
最后我们将注册后的视图，插入到**id="container"**，让页面显示

```
let router = new HashRouter(); //路由对象， 类型为hash
  let container =
   document.getElementById('container'); // 根组件
  router.registerIndex(() => container.innerHTML = '首页')
  router.register('/page1', function ()  
  {
    console.log(this.routers);
    container.innerHTML = '/page1';
  }) // 路由 对应执行事  //.vue template部分
  router.register('/page2', () => container.innerHTML = '/page2'); 
  router.register('/page3', () => container.innerHTML = '/page3'); 
```

路由简单实现就完成啦，如有错误还望大佬指出。

-------------------------------------------------------------------------------------------
## 写在后面

引用小金鱼的一句话，当然纸上学来终觉浅，绝知此事要躬行。学完理论就需要去实践，大家看完之后一定要自己去操作一下，不然似懂非懂，第二天就忘啦。在此作者再次附上GitHub的地址[vue-jingdong (不要吝惜你的小星星哦)](https://github.com/zby-66/lesson_shuidi/tree/master/vue/jingdong/jingdong)。这是一个系列文章，未完待续，期待与你一起学习。如果对你有帮助的话，不妨送上你的star，送人玫瑰，手留余香，谢谢！
