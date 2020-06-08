- 三元的逐行读VUE源码
1. 组件的本质是什么？
历史来讲(前端变得复杂起来，jquery?? )   现在vue2.0语法由来()  未来vue3.0
loadsh  jquery ->强大的前端工具库RIA   MVVM
模板编译的语法 
2. lodash:通过使用数组，数字，对象，字符串等方法，Lodash使JavaScript变得更简单。

 模板引擎的概念 编译模板(字符串 + 数据) = html
 一个组件就是一个函数 给我什么样的数据， 我就渲染对应的 html 内容


3. 问题
   模板编译之后，要挂载到 挂载点上 mount  
   工作流  webpack vue-cli 那种
   webpack.config.js + babel 有其它的方法吗？
   webpack缺点：复杂， 轻量级的，
   parcle:极速零配置web应用打包工具

   过去：模板 + 数据 = html
   现在：模板 + 数据 = virtualDOM

   snabbdom 快速的DOM
   snabbdom: 研究虚拟DOM所用的库

- patch 