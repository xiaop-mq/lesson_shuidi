## 按需加载
做法：
1. import('./a.js').then()
2. import(/* chunkname */'./a,js')

如果没有import('./a.js'),需要你异步一个js文件 怎么做? 淘宝笔试题

import().then(xxx)语法被webpack编译过后，最终webpack实现起来也是用动态构造script便签的形式