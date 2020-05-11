- 块级元素
1. 块级元素可以包含行内元素
2. 块级元素不一定包含块级元素
3. 行内元素一般不包含块级元素

- doctype意义？
1. 让浏览器以标准模式渲染。
2. 让浏览器知道元素的合法性。

- HTML,XHTML,HTML5的关系
html属于sgml
xhtml属于xml,是html对xml严格化的结果
html5不属于sgml或者xml,相对于xhtml宽松

- HTML5有什么变化？
新的语义化标签
表单增强
新的API

- em和i有什么区别？
em是语义化的标签，表示强调
i是纯样式的标签，表斜体
html5的I不推荐使用，一般用作图标

- 语义化的意义是什么？
开发者容易理解
机器容易理解结构
有助于SEO
semantic,microdata

- 哪些元素可以自闭合？
表单元素input
图片img
br  hr
meta  link

- HTML和DOM的关系
HTML是死的（字符串，没有结构）
DOM由HTML解析而来，是活的
JS可以维护DOM

- property和attribute的区别
attribute是‘死’的(属性，写在HTML中)
property是‘活’的(特性，DOM对象中)
attribute不会影响property,property也不会影响attribute

- form作用
直接提交表单
使用submit/reset按钮
便于浏览器保存表单
第三方库可以整体提取值
第三方库可以进行表单验证

二、css基础
- base64和性能优化
一种文本格式，显示的是一串文本，而这文本就是图片本身
优点：
传输性能，减少http请求
缺点：
增大了体积开销
 图片本身增大1/3
 增大css体积
增加了解码的开销
- 适用：小图标，例如Loading图
- 用法：一般在构建中转，打包
- Base64转码的对象只能是字符串，Base64的概念：由二进制转到字符称为编码，由字符到二进制称为解码。

- hack
区分于不同浏览器，只能在特定的浏览器生效
缺点：
  难理解，难维护，易失效
替代方案：
  特性检测，针对性加class
使用注意：
   标准属性写到前面，hack写到后面
作用：
   浏览器兼容性
典型案例：
   checkbox
   tabs

- position 确定元素的位置
1. static:静态布局，按照文档流布局
2. relative: 相对于元素本身偏移，relative偏移时，元素所占据的文档空间不会产生偏移。
3. absolute:从文档流脱离，相对于最近的父级absolute或者relative,如果父级元素不是的话，会一直往上找到body
4. fixed:相对于屏幕/可视区域
定位于relatvie、absolute、fixed都可以设置z-index，数值越大附带

- 清除浮动
让盒子负责自己的布局
overflow:hidden(auto)
::after{clear:both}

- 如何适配移动端页面？
1. 首先适配viewport(页面宽度和移动端适配)
2. rem/viewport/media query 大小的适配
3. 设计上：隐藏折行自适应

- transition
1. 位置-平移(left/right/margin/transform)
2. 方位-旋转(transform)
3. 大小-缩放(transform)
4. 透明度(opacity)


- 预处理器
less和sass区别
- less
  基于node
  优点：用JS写的，编译速度快，有个浏览器可以使用的版本，不需要预先编译，入门简单
  功能简单
  处理机制：客户端处理，解析会比sass慢
  缺点：在一些复杂特性上比较繁琐
  变量以@开始
  文件后缀：.less
  只允许循环数值
- sass
  ruby写的比较慢,但是有解决档案，可以使用移植版本node-sass
  使用：复杂
  功能复杂
  服务端处理
  变量以$开始
  .sass .scss
  可以循环任何数据类型

  - Bootstrap
    一个CSS框架
    twitter出品
    提供通用基础样式
