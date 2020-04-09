const rimraf = require('rimraf');
const path = require('path');
const ora = require('ora'); // 加载指示器
// console.log(process.cwd(), __dirname);
// 项目的根目录下
// 找到dist目录删除 sync这个是用来进行的删除方法
rimraf.sync(path.join(process.cwd(), 'dist'));
// spinner 菊花图
const spinner = ora('开始构建项目...');
spinner.start();
