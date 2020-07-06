## 常见标签分类
- 块级元素：ul li ol form table div hr h1-h6
- 行内元素：label img select input span a button  br i 

### 行内元素和块级元素的区别
1. 块级元素
- 会独占一行，默认情况下，其宽度自动填满其父元素宽度
- 块级元素可以设置height width属性
- 块级元素即时设置了宽度，但仍占一行
- 块级元素可以设置padding margin属性
- 块级元素对应display: block

2. 行内元素
- 不会独占一行，相邻的行内元素会排列在同一行里，直到排不下，才会换行。
- 行内元素设置width height无效，它的长度宽度主要由内容决定。
- 行内元素的padding margin,水平方向的padding-left,padding-right,margin-left,margin-right，和竖直方向的padding-top,padding-button,margin-top,margin-button不会产生边距效果。


## 可置换元素和不可置换元素
- 可置换元素：标签的具体显示内容要根据其属性来决定的标签就是可置换标签。如img, input, textarea, select
- 不可置换元素：标签的具体显示内容直接呈现给用户端的标签就是不可置换元素
置换元素就是会根据标签的属性来显示元素，否则就是不可置换元素。
置换元素一般内置宽高属性，因此可以设置宽高。
几乎大部分置换元素都是行内元素
比如：img根据src属性来显示，input根据value属性来显示，因此可以知道img和input是可置换元素，当然同理textarea和select也是可置换元素。


## 圣杯布局
缺点：宽度小于left的时候会掉下去
## 双飞翼布局
解决了圣杯布局的bug，但缺点是DOM树更为复杂，渲染性能不如圣杯布局。
