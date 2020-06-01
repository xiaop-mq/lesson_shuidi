1. 创建：document.createElement([标签名])
动态创建一个DOM元素

2. 增加：
- [CONTAINER].appendChild([元素])
把元素动态插入到指定容器的末尾
- [CONTAINER].insertBefore([新元素]，[原始页面中的元素])

3. 删除：
[CONTAINER].removeChild([元素])
在指定器种移除元素

4. 给DOM设置内容
1). innerHTML
- 给非表单元素设置或者操作其内容
- 能识别HTML标签
2). innerText
给非表单元素设置或者操作其内容
不能识别HTML标签
3).value
给表单元素设置或者操作其内容

5. 设置自定义属性
1). 利用对象特性
- 每一个元素都是一个对象（堆内存），我们向堆内存中设置自定义属性即可
- 语法：[元素].xxx=xxx; / 元素[xxx]=xxx;
写在堆内存中的

获取方式：console.log([ELEMENT].xxx);
删除方式：delete [ELEMENT].xxx;
2).利用标签特性
每一个元素也是一个标签，可以操作其DOM结构，给结构上新增自定义的属性
语法：[元素].setAttribute('xxx',xxx);


直接写在结构上的

获取方式：[元素].getAttribute('xxx');
删除方式：[元素].removeAttribute('xxx');

两种方法的区别：原理不一样，一个操作的是堆内存，一个操作的是DOM结构，所以不能混用

二、操作DOM元素样式
1. 元素.style.xxx
修改（获取）当前元素的行内样式
操作的都是行内样式，哪怕把样式写在样式表中，只要没有写在行内上，也获取不到
获取当前元素样式（不论写在哪，都能获取到的方法）我们在JS中的盒子模型一篇已经讲过
2. 元素.className
操作的是当前元素的样式类，基于样式类的管理给予其不同的样式


元素.className = ‘样式类’

这样操作会把之前的样式类名给覆盖掉



元素.className +=“空格 样式类”

这样操作是不覆盖原有的基础上设置一个
记得加空格分每个样式类



元素.classList.add("样式类")

向指定样式集合中新增一个样式类
（兼容性差）


```js
let itemBox = document.getElementById('itemBox'),
    navList = itemBox.getElementsByTagName('li');
// console.dir(itemBox); //=>它是一个对象：itemBox.xxx=xxx
// console.dir(navList); //=>它是一个元素集合HTMLCollection（类数组集合：数字作为索引，LENGTH代表长度），集合中的每一项是单独的元素对象  navList[0].xxx=xxx

//===========设置样式
itemBox.style.color = 'red';
itemBox.style.backgroundColor = 'green'; //=><ul class="item" id="itemBox" style="color: red; background-color: green;"> 设置的结果都是行内样式
itemBox.style.cssText = `color: red; background-color: green;`; // 这种方式是STYLE一个个设置样式的简写，批量给行内上设置很多样式

itemBox.className = 'active'; //=>CLASSNAME这样操作会把之前的样式类名给覆盖掉
itemBox.className += ' active'; //=>这样也可以，记得加空格区分每个样式类
itemBox.classList.add('active'); //=>向指定样式集合中新增一个样式类（兼容性差）
```

