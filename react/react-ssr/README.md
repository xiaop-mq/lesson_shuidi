## 前后端组件衔接起来
1. 前端代码 -> webpack -> static
2. express 启动 static 静态资源的映射
3. react 组件在服务端生成了 html
4. express 返回html文件，也要前端打包完的 资源通过 script 返回回去了，前端打包完的代码执行，完成事件绑定


## 路由
前端：控制组件
地址栏里面的url是不会发送，不想后端发起请求
https://www.baidu.com

后端：请求后端API github.com/api/vq/login
```js
.get('/login',()=>{

})
```
路由 既可以在前端
https://juejin.im/timeline/fronted 后端生效，后端渲染html
https://juejin.im/timeline/fronted 前端js也可以

BrosweRouter : browser
NativeRouter: RN
StaticRouter: SSR

