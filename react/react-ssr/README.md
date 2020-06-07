## 启动
1. npm run dev
2. cd mock-server && nodemon index.js

## 前后端组件衔接起来
1. 前端代码 -> webpack -> static
2. express 启动 static 静态资源的映射
3. react 组件在服务端生成了 html
4. express 返回html文件，也要前端打包完的 资源通过 script 返回回去了，前端打包完的代码执行，完成事件绑定

## 路由
前端：控制组件
地址栏发生变化，地址栏里面的 url 是不会发送，不会像后端发起请求
https://www.baidu.com/

后端：github.com/api/v1/login
```js
.get('/login', () => {
})
```
路由 既可以在前端


https://juejin.im/timeline/frontend 后端生效，后端渲染html
https://juejin.im/timeline/frontend 前端js也可以，控制地址栏


localhost:3000/login 
- js切换 login
- /login 访问后端 后端也应该返回 login 对应的组件的html


## SPA + SSR
1. / 页面渲染生成的
2. 点击 Link（/login）  去到 login 页面，js history api 达到 SPA体验, 这一步并没有和后端有任何交互，这一步用户看到的页面是 js 构造出来的
3. 在当前这个 /login 页面，刷新一下页面（发出 /login 请求）, 又成了服务端渲染

同一个页面，既可以是 SSR， 也可以SPA，用户行为。

落地页：第一次打开(或者刷新)的页面，SSR
之后用户操作：变成了 SPA


古老：jsp：后端要给前端传输数据

## store
存着我们应用的状态
redux：
```js
function reducer() {
  return {
    hotCars: [
      {}
    ]
  }
}
// 找一个 既可以在服务端发请求（xhr，fetch），也可以在客户端发请求的库（http.get）
axios().then(() => {
  // redux update
  dispatch()
})
```
## SPA
1. 用户一进来，用户看不到内容，正在加载中...
2. axios 3s, 用户才会看到内容
3. redux 有数据，页面才构造出来

## SSR

用户一进来，页面加载完毕，它就应该有，热门车型内容
- 兼顾html生成
- 兼顾请求发送，请求完毕是不是拿到一堆 JSON 数据，服务端会把 JSON 数据告诉前端，为什么要告诉前端，因为这个请求我在服务端已经请求完毕了，你可以直接用数据了，

