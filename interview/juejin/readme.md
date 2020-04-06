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
 标准：宽度 = 内容的宽度(content)+border+padding+margin
 低配：宽度 = 内容的宽度(content+border+padding)+margin
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
  1. static(默认):按照正常文档流进行排列；
  2. relative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；
  3. absolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；
  4. fixed(固定定位)：所固定的参照对像是可视窗口。
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
- 用纯CSS创建一个三角形的原理是什么？
  1. 高宽都为0，在设置边框样式。
- 常见的兼容性问题？
  1. 不同浏览器的标签默认的margin和padding不一样。*{margin:0;padding:0;}
  2. E6双边距bug：块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大。hack：display:inline;将其转化为行内属性。
  3. 渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用“9”这一标记，将IE浏览器从所有情况中分离出来。接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
  4. 设置较小高度标签（一般小于10px），在IE6，IE7中高度超出自己设置高度。hack：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。
  5. IE下，可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性；Firefox下，只能使用getAttribute()获取自定义属性。解决方法:统一通过getAttribute()获取自定义属性。
  6. Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
  7. 超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了。解决方法是改变CSS属性的排列顺序:L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}
- 为什么要初始化CSS样式
  1. 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
- absolute的containing block计算方式跟正常流有什么不同？
  1. 无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：
  2. 若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；
  3. 否则,则由这个祖先元素的 padding box 构成。
  如果都找不到，则为 initial containing block。
  补充：
  1. static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）
  2. absolute: 向上找最近的定位为absolute/relative的元素
  3. fixed: 它的containing block一律为根元素(html/body)
- CSS里的visibility属性有个collapse属性值？在不同浏览器下以后什么区别？
  1. 当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。
  2. chrome中，使用collapse值和使用hidden没有区别。
  3. firefox，opera和IE，使用collapse值和使用display：none没有什么区别。
- position跟display、overflow、float这些特性相互叠加后会怎么样？
  1. display属性规定元素应该生成的框的类型；position属性规定元素的定位类型；float属性是一种布局方式，定义元素在哪个方向浮动。
  类似于优先级机制：position：absolute/fixed优先级最高，有他们在时，float不起作用，display值需要调整。float 或者absolute定位的元素，只能是块元素或表格。
- 对BFC规范(块级格式化上下文：block formatting context)的理解？
1. BFC规定了内部的Block Box如何布局。
  定位方案：
  1. 内部的Box会在垂直方向上一个接一个放置。
  2. Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
  3. 每个元素的margin box 的左边，与包含块border box的左边相接触。
  4. BFC的区域不会与float box重叠。
  5. BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
  计算BFC的高度时，浮动元素也会参与计算。
  满足下列条件之一就可触发BFC
  1. 根元素，即html
  2. float的值不为none（默认）
  3. overflow的值不为visible（默认）
  4. display的值为inline-block、table-cell、table-caption
  5. position的值为absolute或fixed
- 为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？
浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。
浮动带来的问题：
  1. 父元素的高度无法被撑开，影响与父元素同级的元素
  2. 与浮动元素同级的非浮动元素（内联元素）会跟随其后
  3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。
  清除浮动的方式：
  1. 父级div定义height
  2. 最后一个浮动元素后加空div标签 并添加样式clear:both。
  3. 包含浮动元素的父标签添加样式overflow为hidden或auto。
  4. 父级div定义zoom
- 上下margin重合的问题
  1. 在重合元素外包裹一层容器，并触发该容器生成一个BFC。
- 设置元素浮动后，该元素的display值是多少？
  自动变成display:block
- 使用 CSS 预处理器吗？
  Less sass
- 移动端的布局用过媒体查询吗？
  通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。

- CSS优化、提高性能的方法有哪些？
  1. 避免过度约束
  2. 避免后代选择符
  3. 避免链式选择符
  4. 使用紧凑的语法
  5. 避免不必要的命名空间
  6. 避免不必要的重复
  7. 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么
  8. 避免！important，可以选择其他选择器
  9. 尽可能的精简规则，你可以合并不同类里的重复规则
- 浏览器是怎样解析CSS选择器的？
  1. CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。
  2. 而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。
- 在网页中的应该使用奇数还是偶数的字体？为什么呢？
  1. 使用偶数字体。
  2. 偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。
- margin和padding分别适合什么场景使用？
  1. 何时使用margin：
  需要在border外侧添加空白
  空白处不需要背景色
  上下相连的两个盒子之间的空白，需要相互抵消时。
  2. 何时使用padding：
  需要在border内侧添加空白
  空白处需要背景颜色
  上下相连的两个盒子的空白，希望为两者之和。
  兼容性的问题：在IE5 IE6中，为float的盒子指定margin时，左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决。
- 元素竖向的百分比设定是相对于容器的高度吗？
  1. 当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top ,padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。
  - 全屏滚动的原理是什么？用到了CSS的哪些属性？
  1. 原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现
  2. overflow：hidden 溢出隐藏
  transition：all 1000ms ease
  all 全部过度效果
  1s 时间一秒
  ease 缓慢
  整体理解为一秒钟完成所有过度效果，缓慢的（还有其他先快后慢，先慢后快）
- 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
  1. 响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
  2. 基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。
  页面头部必须有meta声明的viewport。
- 视差滚动效果？
  视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。
  1. CSS3实现
  优点：开发时间短、性能和开发效率比较好，缺点是不能兼容到低版本的浏览器
  2. jQuery实现
  通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。
  优点：能兼容到各个版本的，效果可控性好
  缺点：开发起来对制作者要求高
  3. 插件实现方式
  例如：parallax-scrolling，兼容性十分好
- ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用
  1. 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
  2. ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。
  3. :before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after
- 你对line-height是如何理解的？
  1. 行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。
  2. 单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。
  3. 多行文本垂直居中：需要设置- - 
  display属性为inline-block。
- 怎么让Chrome支持小于12px 的文字？
  p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例
- 让页面里的字体变清晰，变细用CSS怎么做？
  -webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。
- 如果需要手动写动画，你认为最小时间间隔是多久，为什么？
  多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。
- li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
  1. 行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。
  解决方法：
  可以将<li>代码全部写在一排
  浮动li中float：left
  在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px
- display:inline-block 什么时候会显示间隙？
  1. 有空格时候会有间隙 解决：移除空格
  2. margin正值的时候 解决：margin使用负值
  3. 使用font-size时候 解决：font-size:0、letter-spacing、word-spacing
- 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度
  1. 外层div使用position：relative；高度要求自适应的div使用position: absolute; top: 100px; bottom: 0; left: 0
- png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
  1. png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。 大多数地方都可以用。
  2. jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。
  3. gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.
  4. webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。
- style标签写在body后与body前有什么区别？
  1. 页面加载自上而下 当然是先加载样式。
  2. 写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）
- CSS属性overflow属性定义溢出元素内容区的内容会如何处理?
  1. 参数是scroll时候，必会出现滚动条。
  2. 参数是auto时候，子元素内容大于父元素时出现滚动条。
  3. 参数是visible时候，溢出的内容出现在父元素之外。
  4. 参数是hidden时候，溢出隐藏。
- 阐述一下CSS Sprites
  将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background- repeat，background-position 的组合进行背景定位。利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能；CSS Sprites能减少图片的字节。