## react 最佳实战
- 样式组件的使用 css in js
App.js  App.css 过时了 styled-components
1. 做项目 reset 这个你想怎么做
   最近 react 知识点 ？
2. 如何给我们的项目添加 iconfont 图标？
alibaba iconfont 选择我们想要的图标 下载
3. 全家桶
   react-vue-dom vue-router 配置？ 有
   react-router-config
4. 每个组件做法 func_component + style.js(css)

- React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。

组件仅在它的 props 发生改变的时候进行重新渲染。通常来说，在组件树中 React 组件，只要有变化就会走一遍渲染流程。但是通过 PureComponent 和 React.memo()，我们可以仅仅让某些组件进行渲染。
性能提升
PureComponent 要依靠 class 才能使用。而 React.memo() 可以和 functional component 一起使用。
