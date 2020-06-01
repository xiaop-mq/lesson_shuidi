1. 通过ID获取-元素对象
- 语法：document.getElementById([ID])
- 在整个文档中，根据元素的ID，获得这个元素对象
- document是获取元素的上下文（获取元素的范围）
获取到的结果是一个对象（堆内存：里面存储着很多内置的属性和方法）

1).getElementById 方法的上下文只能是document：

2).通过标签名获取——元素集合
语法：[context].getElementsByTagName([标签名])
在指定的上下文中，基于元素的标签名获取一组元素集合
获取的结果是HTMLCollection元素集合（类数组：数字作为索引，length代表长度）
集合中的每一项都是一个单独的元素对象

3).通过CLASS类名获取——元素集合
语法：[context].getElementsByClassName([样式类])
在指定上下文中，基于样式类名获取对应的元素集合
集合就是集合，想操作某一项需要通过索引获取后在操作
不兼容IE6～8低版本浏览器
通过NAME属性名获取——元素集合

4).语法：document.getElementsByName([NAME 属性名])
根据元素的Name 属性值，在整个文档中获取一组元素集合
真实项目中也是基于它操作表单元素的，尤其是单选框或者复选框
在IE9以下只对表单元素作用

5).获取HTML——元素对象
语法：document.documentElement
获取整个HTML元素对象
HTML是页面的根节点

6)获取BODY——元素对象
语法：document.body

7)获取HEAD——元素对象
语法：document.head

8)通过CSS选择器获取——元素对象
语法：[context].querySelector([选择器])
根据选择器（类似于CSS选择器）获取一个元素对象
不兼容IE6~8低版本浏览器

9)通过CSS选择器获取——元素集合
语法：[context].querySelectorAll([选择器])
根据选择器（类似于CSS选择器）快速获取一组元素集合
哪怕只有一项也是集合
不兼容IE6~8低版本浏览器