react + ts + hooks 
react + redux + react-router  react hooks 带来了
很大的改变
1. sourcemap 
2. --inline
3. polyfill
4. css 处理
5. react 新特性带来的fragment

react/vue 开发， /dist 目录，   给后端， 或自己docker nginx 服务代理

js 的责任 babel  补丁
npm i @babel/cli @babel/core  @babel/preset-env @babel/polyfill --save-dev
fill 填充， poly 一些特性
es6+    低端浏览器可以被支持的呢？ 
三种功劳 1. babel-preset-env + babel-core 降级处理
const let  var    () => {}  function() { }
2. polyfill  会把一些无法降级  Promise  Array  map reduce 
手工实现一下 垫片, 手动的添加了script src = polyfill.js 
浏览器从不具备这个功能， 到拥有了 
  if (typeof Object.create !== "function") { }
  在实现polyfill 做判断， 不是要给所有的浏览器都做同样的打补丁
  打补丁之前 先判断下浏览器是否拥有此功能？ 
  polyfill.js  打包到 bundle.js 之中， babel  preset target
3. plugin 

inline   hot 区别   
webpack-dev-server --mode development --inline --hot --open
inline  hot 都是改变后 刷新内容， inline 强制刷新， 弊端是mvvm 状态会丢失
hot  hmr hot module reload  --inline --hot  如果是hmr 部分有更新 hot  data  state 
如果不是hmr 部分， inline 强制刷新

css 
   1. style ->   .css 输出
   MiniCssExtractPlugin 
   2. 编译时 css 压缩
   3. 如何调试刚刚的bug  p color
   style-loader 开发的时候
   定位p  color 错误， style 代码很多， 你也忘了他在那里
   webpack 帮我们定位错处 点一下就能跳到错误的源码所在行 




react 全家桶(react-router  redux ) + ts  
1. react  全家桶比 vue 复杂   react-router-dom 
  一切皆组件 哪怕  router  redux 
  new Vue({
    el:'#root',
    router, 
    store 
  })
  翻译成react 