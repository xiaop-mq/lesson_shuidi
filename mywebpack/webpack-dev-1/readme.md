## webpack简介
1. 模块打包器；代码的转换：es6->es5;文件优化；代码分割；模块合并；自动刷新;代码校验；自动发布
2. 掌握node,es6,npm
## webpack安装
  安装本地webpack:webpack;webpack-cli -D;
## webpack可以进行0配置
- 打包工具 -> 输出后的结果(js模块)
- 打包 (支持我们的js的模块化)

## 手动配置webpack
- 默认配置文件的名字 webpack.config.js
## 更改我们的config配置文件名
- 修改文件名 在终端输入npx webpack --config '文件名'
- 在我们的package.json文件的scripts添加build: "build":"webpack --config webpack.config.my.js" 在使用npm run build执行
