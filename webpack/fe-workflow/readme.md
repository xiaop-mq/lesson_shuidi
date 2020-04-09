## 前端工作流 flowend(fe:前端工作流)workflow webpack

- webpack 配置看坤哥文章，凯凯文章
  6个知识点
  二线面试需求
- webpack 又学 架构
  webPack-build webpack的编译文件
  cross-env跨环境配置
  1. 源头 package.json
      // 架构中需要思考的两个环境
    "dev":"",
    "build":"",
    webpack 不直接出厂？架构 dev build
    cross-env 服务器误差别环境变量配置 node npm 都用哪些？
    并行同时考虑工作流架构
    将编译工作（工作流） 通过目录
    build目录确定为开发架构的一项
    rimraf():编译之前清空我们的目录在编译
2. webpack 重要性
 写代码，养孩子是一样的 每天运营项目，改了一点点，webpack build
3. base.js 架构里的意义：可以同时服侍dev.js,build.js
模块化 把我们的基础配置做好，向外输出，
4. webpack 其他的module及插件处理呢？
   config.js 
5. lib 把module 放在config目录 一个文件做一件事 
findSync 所有的js文件 组成一个数组输出出来