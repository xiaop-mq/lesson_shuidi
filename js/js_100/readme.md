- 朗读出来
- 手写代码的抄写工作
- 研究几个VUE/REACT
VUE的响应式原理中的Object.defineProperty有什么缺陷?

- proxy可以代理整个对象 defineProperty 每个属性单独代理

- 在vue2.0中,defineProperty并没有对数组提供完全的数据劫持
  有一个前端性能的坑, n  empty object  数组，会进入到死循环中。  push pop 常用的方法 

1. Object.defineProperty 无法监控到数组下标的变化(vue对push常用操作,defineProperty)不能实时响应
2. Object.defineProperty只能劫持对象的属性,proxy 可以代理(劫持)整个对象,并返回一个新的对象
3. proxy不仅可以代理对象,还可以代m理数组.

- vue 2.0 数组没有下标支持变化  push  pop  ?


# JS一百问???

## 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么?
- key的作用是什么?
主要是为了diff同级比较的效率
1. 更准确
因为带key就不是就地复用了,在sameNode函数a.key=== b.key对比中可以避免就地服用的情况.所以会更准确.
2. 更快
利用key的唯一性生成map对象来获取对应节点,比遍历方式更快.
## 介绍下HTTPS中间人攻击
 https = http + ssl协议组成
中间人攻击过程如下:
1. 服务器向客户端发送公钥
2. 攻击者截获公钥,保留在自己的手上
3. 然后攻击者自己生成一个伪造的公钥,发送给客户端
4. 客户端收到伪造的公钥后,生成家吗hash值发给服务器
5. 攻击者通过加密hash值,用自己的私钥解密获得真密钥
6. 同时生成家的加密hash值,发给服务器
7. 服务器用私钥解密获得假密钥
8. 服务器用假密钥加密传输信息

防范方法:
服务端在发送浏览器的公钥中加入CA证书,浏览器可以验证CA证书的有效性.

## React中的retState什么时候是同步的，什么时候是异步的？

注意：react的同步和异步，并不是真正意义上的同步异步。react的异步代表的是指多个state会合并到一起进行批量更新。

- 如果是由react引发的事件处理(比如onclick引发的事件处理)，调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state

## 介绍下重绘和回流，以及如何进行优化？
- 重绘
由于`节点的几何属性发生改变或者由于样式发生改变而不会影响布局`的，称为重绘
- 回流是`布局或者几何属性需要改变就称为回流`

`回流必定会发生重绘，重绘不一定会引发回流`
- 减少重绘和回流：
  - CSS
    - 使用transform代替top
    - 使用visibility替换display:none,前者会引起重绘后者会引发回流。
    - 避免使用table布局
    - 尽量在DOM树的最末端改变class
    - 避免设置多层样式
    - 将动画效果应用到position属性为absolute或fixed的元素上
    - 避免使用CSS表达式
    - 将频繁重绘或者回流的节点设置为图层
    - CSS3 硬件加速（GPU加速）
  - javascript
    - 避免频繁操作样式
    - 避免频繁操作DOM
    - 避免频繁读取会引发回流/重绘的属性
    - 对具有复杂动画的元素使用绝对定位

## 介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？
- npm模块安装机制：
  - 发出npm install命令
  - 查询node_modules目录之中是否已经存在指定模块
      - 存在，则不需要重新安装
      - 不存在：
         1. npm向register查询网址
         2. 下载压缩快
         3. 解压压缩包

- npm实现原理
  - 执行工程自身preinstall
  - 确定首层依赖模块
  - 获取模块
  - 模块扁平化

## 浏览器和Node 事件循环的区别
- 主要的区别在于执行的顺序不同
node.js中有micro event;
promise属于micro event 该一部事件的处理顺序与浏览器不同，nodejs 11.0以上，这两者执行顺序相同。

## 模块化发展历程
模块化的作用：抽离公共代码、隔离作用域、避免变量冲突
- `IIFE`：使用自执行函数来编写模块化。
   - 特点：在一个单独的函数作用域内执行代码，避免变量冲突。
   ```js
    (function(){
    return {
    data:[]
    }
  })()
   ```
- `AMD`: 使用requireJS来编写模块化
   - 特点：以来必须提前声明好
   ```js
    define('./index.js',function(code){
    // code 就是index.js 返回的内容
  })
   ```
-` CMD:` 使用searJS来编写模块化
   - 特点：支持动态引入依赖文件。
   ```js
   define(function(require, exports, module) {  
  var indexCode = require('./index.js');
  });
   ```
- `commonJS`: nodeJS自带模块化
  ```js
  var fs = require('fs');
  ```
- `UMD`: 兼容AMD，CommonJS模块语法化
- `webpack`: webpack2.x版本中代码分割
- `ES Modules`: ES6引入的模块化，支持import来引入另一个JS

## 关于 const 和 let 声明的变量不在 window 上 
- 在es5中，顶层对象的属性和全局变量是等价的，var命令和function命令声明全局变量，自然也是顶层对象。
```js
var a = 12;
function f(){};

console.log(window.a); // 12
console.log(window.f); // f(){}
```
- 但ES6规定，var和function命令声明的全局变量，依旧是顶层对象的属性，但是let、const、class命令声明的全局变量，不属于顶层对象的属性
```js
let aa = 1;
const bb = 2;

console.log(window.aa); // undefined
console.log(window.bb); // undefined
```
- 怎么获取？在定义变量的块级作用域中就能获取。

## cookie 和 token 都存放在 header 中，为什么不会劫持 token？
- token不是防止XSS的，而是为了防止CSRF的。
- CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会带上token.

## 谈谈view的双向数据绑定，model如何改变view,view又是如何改变model的？


## Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法
- 原生DOM操作VS通过框架封装操作
这是一个性能 vs. 可维护性的取舍。
框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。
- 对react的virtual 
React 从来没有说过 “React 比原生操作 DOM 快”。React 的基本思维模式是每次有变动就整个重新渲染整个应用。如果没有 Virtual DOM，简单来想就是直接重置 innerHTML。很多人都没有意识到，在一个大型列表所有数据都变了的情况下，重置 innerHTML 其实是一个还算合理的操作... 真正的问题是在 “全部重新渲染” 的思维模式下，即使只有一行数据变了，它也需要重置整个 innerHTML，这时候显然就有大量的浪费。
  - 我们可以比较一下 innerHTML vs. Virtual DOM 的重绘性能消耗：

-  MVVM vs. Virtual DOM

- 性能比较也要看场合
以上这些比较，更多的是对于框架开发研究者提供一些参考。主流的框架 + 合理的优化，足以应对绝大部分应用的性能需求。如果是对性能有极致需求的特殊情况，其实应该牺牲一些可维护性采取手动优化：比如 Atom 编辑器在文件渲染的实现上放弃了 React 而采用了自己实现的 tile-based rendering；又比如在移动端需要 DOM-pooling 的虚拟滚动，不需要考虑顺序变化，可以绕过框架的内置实现自己搞一个。

## 为什么vuex的mutation和redux的reducer中不能做异步操作？
因为更改state的函数必须是纯函数，纯函数即是统一输入就会统一输出，没有任何副作用；如果是异步则会引入额外的副作用，导致更改后的state不可预测；

## 介绍下BFC及其应用
- BFC就是`块级格式上下文`，是页面盒模型布局中的一种CSS渲染模式，相当于独立的容器，里面的元素和外部元素互不影响。创建BFC的方式有：
  - html根元素
  - float浮动
  - 绝对定位
  - overflow不为visiable
  - display 为表格布局或者弹性布局
- BFC的主要作用是：
  - 清理浮动
  - 放在同一BFC容器中的相邻元素间的外边距重叠问题。

## 在 Vue 中，子组件为何不可以修改父组件传递的 Prop，如果修改了，Vue 是如何监控到属性的修改并给出警告的。
- 子组件为何不可以修改父组件传递的prop
  单向数据流，易于监测数据的流动，`出了错误可以更加迅速的定位到发生错误的位置`。
- 如果修改了，vue是如何监控到属性的修改并给出警告的。
```js
if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
```
在initProps的时候，在defineReactive时通过判断是否在开发环境，如果是开发环境，会在触发set的时候判断是否key处于updatingChildren中被修改，如果不是，说明此修改来自子组件，触发warning提示。

## 介绍HTTPS的握手过程


## 双向绑定和 vuex 是否冲突
- 在严格模式下使用vuex，当用户输入时，v-model会试图直接修改属性值，但这个修改不是在mutation中修改的，所以会抛出一个错误。
- 当需要在组件中使用vuex中的state时，有两种解决方案：
   - 在input中绑定value(vuex中的state)，然后监听input的change或者input事件，在事件回调中调用mutation修改state的值
   - 使用带有setter的双向绑定计算属性


## call和apply区别是什么，哪个性能更好一些？

- function.prototype.call和function.prototype.apply作用都是一样的，区别在于传入的参数不同：
   - 第一个参数都是，指定函数体内this的指向；
   - 第二个参数开始不同，`apply是传入带下标的集合，数组或者类数组`，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，`都会传给函数做参数`。
- call比apply的性能要好，平常可以多用call,call传入的参数格式正是内部所需要的格式。

## 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？
- 能够完成整个HTTP请求 + 响应
- 触发GET请求之后不需要获取和处理数据、服务器也不需要发送数据
- 跨域友好
- 执行过程无阻塞
- 相比XMLHttpRequest对象发送GET请求，性能上更好
- GIF的最低合法体积最小

## Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？

- Object.defineProperty`无法实时监控到数组下标`的变化，导致通过数组下标添加元素，不能实时响应。
- Object.defineProperty`只能劫持对象的属性`，从而需要整个对象，如果属性是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象。
- Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。



## 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
箭头函数是普通函数的缩写，可以更优雅的定义一个函数，和普通函数相比，有以下几点差异。
- 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替。
- 不可以使用yield命令，因此箭头函数不能用作generator函数。
- 不可以使用new命令
   - 没有自己的this，无法使用call, apply
   - 没有prototype属性，而new命令在执行时需要将构造函数的prototype赋值给新的对象_proto_


## 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景
- 结构：
  - display: none：会让元素完全从渲染树中消失，渲染不占空间，不能点击。
  - visibility: hidden;不会让元素完全从渲染树中消失，渲染占用空间，内容不可见，不能点击
  - opacity: 0;不会再渲染树中消失，占据空间，内容不可见，可以点击。
  
- 继承：
  - display: none和opacity: 0是非继承属性，子孙节点消失由于元素从渲染时消失造成，通过修改子孙节点属性无法显示。
  - visibility: hidden;是继承属性，子孙节点由于继承了hidden，通过设置visibility：visable可以让子孙节点显示。

- 性能：
  - display: none修改元素会造成文档回流，读屏器不会读取display:none元素内容，性能消耗较大。
  - visibility: hidden，修改元素指挥造成本元素的重绘，性能消耗较少读屏器读取visibility：hidden内容
  - opacity: 0 修改元素造成重绘，性能消耗较少。


## 如何实现token加密？
jwt做法： 
- 需要一个secret(随机数)
- 后端利用secret和加密算法生成一个token，返回给前端。
- 前端每次request在header中带上token
- 后端利用同样的方法进行解密

## redux为什么要把reduce设计成纯函数？
- 因为redux设计思想是不产生副作用，数据更改的状态可回溯，因此将reduce设计成了纯函数。

## 如何实现一个无缝轮播？
简单的来说，无缝轮播的核心就是一个连续的效果。最简单的就是，复制一个要轮播的元素。当复制元素滚动到目标位置的时候，把原来的元素进行归位操作，以达到无缝轮播的效果。

## a.b.c.d 和 a['b']['c']['d']
a.b.c.d比a['b']['c']['d']性能更高，后者还要考虑[]的情况，再者，从两种形式结构来看，显然编译器解析前者比后者容易些，自然也就快一些。

## ES6代码转化为ES5代码的思路
- 将ES6代码转化为AST(抽象语法树)
- 对AST进行处理，在这个阶段可以对ES6代码进行转换成ES5代码
- 根据处理后的AST树再生成代码字符串

## 如何解决移动端 Retina 屏 1px 像素问题
- 伪元素 + transform scaleY(.5)
- border-image
- background-image
- box-image

## 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面
- 当修改了一个或多个文件
- 文件系统接收更改并通知webpack
- webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；
- HMR Server使用webSocket通知HMR runtime需要更新，HMR运行时通过HTTP请求更新jsonp
- HMR运行时替换更新中的模块，如果确定这些模块无法更新，则出发整个页面刷新。

## 为什么普通for循环的性能远远高于forEach的性能，请解释其中的原因
node情况下:
```js
let arrs = new Array(100000);

console.time('for');
for (let i = 0; i < arrs.length; i++) {

};
console.timeEnd('for');

console.time('forEach');
	
arrs.forEach((arr) => {
 
});
console.timeEnd('forEach');

// for: 2.263ms
// forEach: 0.254ms
```
- 在10万这个级别下，foreach的性能是for的10倍。

- 在100万的级别下，forEach的性能是和for的一致。
for: 2.844ms
forEach: 2.652ms

- 在1000万级以上的量级上 ， forEach 的性能远远低于for的性能
for: 8.422ms
forEach: 30.328m

## 介绍下BFC、IFC、GFC、FFC
FC格式上下文，页面中的渲染区域，以及渲染的规则。决定了元素的定位以及元素间的关系。
- BFC块级格式上下文
  - 独立块级渲染区域，这个区域拥有一套渲染规则来约束块级盒子布局，且与区域外部盒子无关。
  - BFC渲染规则：
    1. 内部的BOX会在垂直方向上一个接一个的放置；
    2. 垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的俩个相邻的BOX的margin会发生重叠，与方向无关。）
    3. 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此。（这说明BFC中的子元素不会超出它的包含块，而position为absolute的元素可以超出它的包含块边界）；
    4. BFC的区域不会与float的元素区域重叠；
    5. 计算BFC的高度时，浮动子元素也参与计算；
    5. BFC就是页面上的一个隔离的独立容器，容器里面的子  元素不会影响到外面的元素，反之亦然；
  - BFC的应用
    1. 防止margin发生重叠
    2. 防止发生因浮动导致的高度塌陷
  - 怎么生成BFC？
    1. float的值不为none;
    2. overflow的值不为visiable
    3. position的值为absolute或者fixed
    4. display的值为inline block table cell tabel-caption;
  - display：table的也认为可以生成BFC?
    其实在于table会默认生成table-cell，这个table-cell生成了BFC。

- IFC内联格式上下文
  - 行内元素中的line box是由行内元素中的最高实际元素计算的。
  - IFC有的特性
    1. IFC的line box的左右都紧贴整个IFC，但是会因为float元素扰乱。
    2. IFC不可能有块级元素，当插入块级元素时会产生两个匿名块与div分开，即产生两个IFC。
  - IFC的应用
    1. 水平居中：inline-block可以设置为text-align十七水平居中。
    2. 垂直居中：vertical-align: middle.

- GFC网格格式上下文
  - 当设置display属性为grid时，这个元素会拥有独立的区域，我们可以网格定义行和网格定义列。
  - GFC改变传统布局模式，将一维布局变为二维布局。有了GFC之后，不再限于单个维度。

- 自适应格式上下文
  - display的属性为flex或者inline-flex会生成。
  - Flex Box由伸缩容器和伸缩项目组成。通过设置display属性为flex或inline-flex时设置伸缩容器。