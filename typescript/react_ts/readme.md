# react ts 
  思想 入门 和webpack结合起来
  react + ts 是必问

  webpack-dev-server webpack  实时编译 编译同时，启动live-server http服务
  Start dev
  webpack 编译 nginx docker 阿里云 编译阶段 buil node 
  1. --inline   --hot
   热更新，让我们的页面从左到局部更新 不用丢失组件状态 MVVM data
    //1. 打开浏览器--open
    //2. 刷新浏览器--inline
    //3. 重新加载改变的部分--hot
  2. hash是什么？ 
     文件版本 app.7efea606cef121bf28d1.js
     fdsfdafaf1212.[hash].css
     静态文件会缓存 app.[hash].js?12222 old new 
  3. babelrc presets env modules 干嘛？
  4. entry 多入口的作用是？
     entry从某个文件 require import webpack __require__ 
     单点入口，祖师起来一个依赖关系 业务长改变，hash需要，通知客户端更新
     把几个月，永远不更新的文件，作为独立的入口，
     entry 可以有多个打包的入口吗？为什么？
     vendor 库 vue.js vuex vue-router 
     提升编译速度，同时保障及改善了用以的浏览体验，利用缓存
     
