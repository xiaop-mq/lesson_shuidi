- 游戏框架 引擎 可以帮助我们快速开发游戏
- 精灵 Sprite
- es6 语法
es5 js 定义变量 var
es6 let 定义变量
const 定义常量
如果是简单数据类型，const值不能改变（数字，字符串，布尔值null,undefined）
如果是复杂数据类型的，{}，[]，值可以改，不能把它重新整体付值

let? 定义变量 有块级作用域 加个{}就属于块级作用域
- 变量的类型由值决定 let a = 1;(a:number[java])
- 变量一定有作用域，window全局，{块级作用域}
局部作用域 funuction func(){let a=1;}
- 2D游戏开发，网易大厂h5
网页2D游戏 canvas
- Game 对象，游戏总管
- new Phaser.Game(参数) phaser{}
回调的方式来设置
- 预加载 create 创建场景 update 更新 每秒60帧
