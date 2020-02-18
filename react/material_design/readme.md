# material design 来自google的UI风格

react基础语法
https://blog.csdn.net/weixin_41012753/article/details/78771436

before after 伪元素
https://blog.csdn.net/qq_34579060/article/details/80510759
特别？
从css 风格->组件->react入门

波浪的感觉？
css 思路

Browser.js
JSX 语法转为 JavaScript 语法

- material design 的灵魂，在于对交互的创新
  波浪感，进度条的进度感
  移动端细节,cursor:pointer 用的是非button组件
  user-select: none;
  stylus 嵌入式 ::after :active::after


1. background image
   背景图片 url 引入的方式，在移动时代，渐变也可以生成
   既生成了背景，同时有没有图片
   10% 白 1% 透明（带来了仙气）
   transform:scale(12) 12 -> 0

2. 我们要做一堆的组件
   为开发准白好基础基础，小程序里用过的组件
   要用到的按钮，这里都会有，warning？大一些，快一级
   提供通用的，变通的，灵活性很好，各种常见要求（70%的业务开发）就叫组件
   自己写下这个组件，以后用就好了，复用
   css有一些变化（状态，primary circle block），如何变化封装出去？
   html 区别？
   1. 把它的样式封装进去
      button? 样式是样式
      组件（组合html,css,js）成为一个组件

- ReactDOM React 跟之前的DOM交互
  基本语法：
  组件是强大的，定义一个了button组件
  type 文字 block ...
  <Boyfriend /><Girlfriend />
  1. ReactDOM.render <div><Button></Button></div>
  (,document.getElementById('root'))
  JSX语法
  才可以在root 里面显示组件 组件 要编译
  2. function Button(props){
        return (
        <div></div>
    )
  }
  3. 只要写一次，以后按钮就它了