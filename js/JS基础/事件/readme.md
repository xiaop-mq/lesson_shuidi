# 事件及事件绑定&&事件对象及事件传播

- 事件：是元素天生自带的默认操作行为，不论我们是否给其绑定了方法，当我们操作的时候，也会把对应的事件触发。
- 事件绑定：是给元素的某个行为绑定一个方法，目的是当前事件行为触发的时候可以做一些事情。

## 浏览器常用的事件行为
1. 鼠标事件：鼠标按下弹起算一次点击
鼠标点击：
- onclick: 点击
- ondbclick: 双击
- oncontextmenu：右键点击
鼠标按下：
- onmousedown：鼠标按下
- onmouseup：鼠标抬起
鼠标滚动：
- onmousewhell: 鼠标滚轮或滚动
鼠标移动：
- onmousemove: 鼠标移动
鼠标经过
- onmouseout: 鼠标滑出
- onmouseover: 鼠标滑过
鼠标进入
- onmouseenter：鼠标进入
- onmouseleave: 鼠标离开

### onmouseover和onmouseenter的区别
- mouseover/mouseout存在冒泡机制。划过和划出
- mouseenter/mouseleave: 不存在冒泡机制。进入和离开。

### 键盘事件
- onkeydown: 按下某个键
- onkeyup：抬起某个键
- onkeypress：除shift/fn/cabslock键以外，其它按住

### 表单事件
- onfocus：获取焦点(光标进入input时，触发事件)
- onblur: 失去焦点(光标离开input,触发事件)
- oninput：内容改变(只要内容发生改变就会触发)
- onchange: 内容改变(并且失焦的时候才会触发)

### 音视频事件
- canplay: 可以播放(资源没有加载完，播放中可能卡顿)
- canplaythrough：可以播放(资源已经加载完，播放中不会卡顿)
- play: 开始播放
- pkaying: 播放中
- pause: 暂停播放

### 系统事件
- window.onscroll: 页面滚动
- window.onsize: 页面大小发生改变时触发
- window.onload: 资源加载完毕之后触发
- img.onload: 图片加载完成
- window.onbeforeunload: 当前页面关闭之前
- window.onerror: 资源加载失败

### 移动端事件
单手指事件模型 Touch

ontouchstart：手指碰到屏幕（手指按下）
ontouchmove：手指在屏幕上移动
ontouchend：手指离开屏幕（手指松开）
ontouchcancel：操作取消（一般应用于非正常状态下操作结束）

多手指事件模型 Gesture

ongesturestart：手指碰到屏幕（手指按下）
ongesturechange / ongestureupdate：手指在屏幕上移动
ongestureend：手指离开屏幕（手指松开）
ongesturecancel：操作取消（一般应用于非正常状态下操作结束）

7、其他事件
transitionend：动画过渡完成
onreadystatechange：AJAX请求状态改变事件

## DOM0和DOM2事件绑定
1. DOM0事件绑定
- 语法：元素.on事件行为=function(){}
- 原理：给元素的私有属性赋值，的那个当事件触发，浏览器会帮我们把赋的值执行，但是这样也导致“只能给当前元素某一个事件行为绑定一个方法”
```js
box.onclick = function () {
	console.log('哈哈哈~~');
}
box.onclick = function () {
	console.log('呵呵呵~~');
}
```

- 移除
```js
box.onclick = function () {
	console.log('哈哈哈~~');
	//=>移除事件绑定：DOM0直接赋值为null即可
	box.onclick = null;
}
```

2. DOM2事件绑定
- 语法：元素.addEventListerer(事件行为，function(){},true/false)

3. 注意
- DOM0和DOM2可以混在一起使用：执行顺序以绑定的顺序为主。
- DOM0比DOM2快
- DOM0中能做事件绑定的行为，DOM2都支持；DOM2里面的一些事件，DOM9不一定能绑定处理


4. window.onload和$(document).ready的区别
- $(document).ready()
采用的是DOM2事件绑定，监听的是DOMContentLoaded这个事件，所以只要DOM结构加载完成就会被触发执行
同一个页面可以使用多次
- window.onload
等待所有资源加载完成才会被触发执行，采用DOM0事件绑定
同一个页面也只能绑定一次

5. DOM0和DOM2的传播的区别
- DOM0绑定的方法，只能在目标阶段和冒泡阶段触发执行。
- DOM2绑定的方法，我们可以控制在捕获阶段执行

## 事件对象
1. 定义：
给元素的事件行为绑定方法，当事件行为触发方法会被执行，不仅被执行，而且还会把当前操作的相关信息传递给这个数=> 传递过来相关信息就叫做事件对象，
> 事件对象是由事件当前本身产生的，和执行什么函数没有关系。

2. 原理
每一次事件触发，浏览器都会这样处理一下:

1.捕获到当前操作的行为（把操作信息获取到），通过创建MouseEvent等类的实例，得到事件对象EV
2.通知所有绑定的方法（符合执行条件的）开始执行，并且把EV当做实参传递给每个方法，所以在每个方法中得到的事件对象其实是一个
3.后面再重新触发这个事件行为，会重新获取本次操作的信息，用新的信息替换老的信息，然后继续之前的步骤...


3. 事件对象类型
- 鼠标事件对象
```js
box.onclick = function (ev) {
    console.log(ev);
}
```
- 键盘事件对象

4. 事件对象event属性
- type: 触发事件类型
- target: 事件源
- preventDefault(): 用来阻止默认方法
- stopPropagation(): 组织冒泡传播

## 事件传播进制
1. 冒泡传播机制
Event.prototype: Event原型上记录了冒泡传播的顺序
2. 组织冒泡传播

## 事件委托
又叫做事件代理
- 核心： 基于事件冒牌传播机制完成
- 原理：利用事件的冒泡传播机制，只给最外层容器的相关事件行为绑定方法，这样不管触发容器内部哪一个后代元素的相关事件行为，都会传播到容器上，触发它的对应事件行为，
在执行的方法中，可以基于ev.target来判断事件源，从而做不同的事情；避免给后台元素一个个的注册事件绑定，性能有很大的提高；
