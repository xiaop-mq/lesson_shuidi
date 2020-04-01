- es6 node bable loader
- 前端生产工艺 CI CD、
- src 开发目录
  入口文件 main.js  宛如煮火锅
  webpack 宛如火锅底料
  bundle
- js 与其他类型的文件并不是水火不相容的
  1. 文本 
  2. { json }


- webpack 如何让js 文件理解css


  1. cross-env NODE_env = development
    可以屏蔽不同系统的环境变量不同
     
  2. rimraf 删除目录
  3. loader 
    webpack 工厂流水线
    工人 不能理解的文件css styl vue loader 能理解的地方 去处理
    .vue js component
- loader 概念通过 css-loader


- css 通过css-loader!  => js css in js!!
  []
  静态资源之间通过字符串来达到认同
- bundle.js webpack打包生成的代码
  立即执行函数，
  将入口，分析出来的依赖，做成一个json 传给bundle 函数去执行
  main.js 他依赖于 index.css 先做
  main.js 依赖的文件名作为key:内容作为value
  webpack 大型工程 首先解决的是，模块间的依赖问题
  main.js  a
  index.css  b
  index.css  import base.css c
  entry  a
  c => b ->a
  文件依赖关系组成一个json object
  _webpack_require_他是require的升级版