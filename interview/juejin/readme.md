## HTML语义化考点
- 为什么需要语义化？
1. 语义化：语义化是指用合理HTML标记以及其特有的属性去格式化文档内容。通俗地讲,语义化就是对数据和信息进行处理,使得机器可以理解.
2.优点：易修改，易维护；无障碍阅读支持；搜索引擎好力与SEO;面向未来的HTML,浏览器未来可能提供更丰富的支持。
- 结构语义化
1. 语义元素仅仅是页面结构的规范化，不会对对内容有本质的影响。
2. <header>头部:不应设置为display:none.(看不见摸不着)
3. <nav>导航栏：导航通常包含一组链接，普遍认为，链接使用列表来组织。
4. <aside>:附注，文章中同样可以使用<aside>元素，来说明文章的附加内容、解释说明某个观点、相关内容链接等等；当<aside>用于侧栏时，其表示整个网页的附加内容。
5. <section>标签适合标记的内容区块：与页面主体并列显示的小内容块。独立性内容，清单、表单等；
6. <div>标签依然是可用的，当你觉得使用其它标签都不太合适的时候。新的语义元素出现之前，我们总是这么干的！
7. <main>主要内容:通常是<body>的子标签，或者是全局<div>的子标签。助屏幕阅读工具识别页面的主体部分，从而让访问者迅速得到有用的信息。

## 50道CSS基础面试题
- 标准的盒子模型和低配版盒子模型
 标准：宽度 = 内容的宽度(content)+barder+padding+margin
 低配：宽度 = 内容的宽度(content+barder+padding)+margin
- box-sizing属性？
  1. box-sizing 是用于告诉浏览器如何计算一个元素是总宽度和总高度
- css的选择器有哪些？哪些属性可以继承？
详细：https://www.jianshu.com/p/5daaa32dc5a9
1. css选择器：id选择器；类选择器；标签选择器；相邻选择器；子选择器；后代选择器；通配符选择器；属性选择器；伪类选择器
2. 可继承属性：font-size, font-family, color
3. 不可继承的样式：border, padding, margin, width, height
4. 优先级（就近原则）：!important > [ id > class > tag ]
!important 比内联优先级高
5. css优先级如何计算？
元素选择符：1
class选择符：10
id选择符：100
元素标签：1000
6. !important声明的样式优先级最高，如果冲突再进行计算。
7. 如果优先级相同，则选择最后出现的样式。
8. 继承得到的样式的优先级最低。
- css3新增的伪类有哪些？
1. p:first-of-type 选择属于其父元素的首个元素
2. p:last-of-type 选择属于其父元素的最后元素
3. p:only-of-type 选择属于其父元素唯一的元素
4. p:only-child 选择属于其父元素的唯一子元素
5. p:nth-child(2) 选择属于其父元素的第二个子元素
6. :enabled :disabled 表单控件的禁用状态。
7. :checked 单选框或复选框被选中。
- display有哪些值？说明他们的作用?
inline(默认)-内联
none-隐藏
block-快显示
table-表格显示
list-item-项目列表
inline-block-行内元素
- position的值？
static(默认):按照正常文档流进行排列；
relative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；
absolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；
fixed(固定定位)：所固定的参照对像是可视窗口。
- CSS3有哪些新特性？
1. RGBA和透明度
2. background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
3. word-wrap（对长的不可分割单词换行）word-wrap：break-word
4. 文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
5. font-face属性：定义自己的字体
6. 圆角（边框半径）：border-radius 属性用于创建圆角
7. 边框图片：border-image: url(border.png) 30 30 round
8. 盒阴影：box-shadow: 10px 10px 5px #888888
9. 媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性
- 请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？
1. 该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。
2. 试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。