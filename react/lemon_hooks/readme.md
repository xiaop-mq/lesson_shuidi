react + ts + hooks
react + redux + react-router react hooks带来很大了改变
1. 什么叫sourcemap
2. --inline?
3. polyfill
4. css 处理
5. react 新特性带来的fragmen

react/vue 开发的dist目录，给后端，或自己 docker nginx 服务代理

js 的责任 babel 补丁
 npm i @babel/cli @babel/core  @babel/preset-env @babel/polyfill --save-dev
 fill 填充 poly 一些特性
 es6+ 地段浏览器可以被支持的吗？
 叁种功劳 
 1. babel-preset-env + babel-core降级处理const var let () -> {} function(){}
 2. polyfill 会把一些无法降级 promise array map reduce 手工实现一下 垫片,手动的添加了script src = polyfill.js 浏览器不具有这个功能，到拥有了
  if(typeof Object.create !== "function" ) { }
  在实现polyfill
  在实现polyfill 做判断，不是要给所有的浏览器做同样的打补丁
  打补丁之前 先判断下浏览器是否拥有此功能？
  polyfill.js 打包到bundle.js之中，bebel
3. plugin
inline  hot区别
webpack-dev-server --mode development --inline --hot --open
inline hot 都是改变后，刷新内容，inline 强制刷新，弊端是mvvm状态会丢失 hot hmr hot module reload --inline --hot 如果是hmr部分有更新 hot 如果不是hmr部分，Inline强制刷新

css 
  1. style -> .css输出
  MiniCssExtractPlugin
  2. 在编译的时候 css 压缩

  3. 如何调试刚刚的bug  p 
  style-loader 开发用的多
  定位p color 错误 style代码很多 你也忘了它在哪里
  webpack 帮我们定位错误点