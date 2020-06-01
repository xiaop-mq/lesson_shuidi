一、节点类型
1. 文档节点
- document
- nodeType(节点类型)：9
  nodeName(节点名字)：‘document’
  nodeValue(节点文本内容)：null

2. 元素节点
- 所有元素标签
- nodeType: 1
  nodeName: "大写标签名字"
  nodeValue: null

3. 文本节点
  nodeType: 3
  nodeName（节点名字）：“#text”
  nodeValue（节点文本内容）：文本内容

4. 注释节点：
nodeType: 8

二、获取节点的方式
1、获取所有子节点——节点集合
语法：[CONTAINER].childNodes
获取当前容器中所有的子节点
包含各种类型的节点
获取到的是一个节点集合，包含容器中的所有类型节点（空格换行是文本节点）
2、获取元素子节点——元素集合
语法：[CONTAINER].children
获取当前容器中所有的元素子节点
获取的是一个元素集合，只有元素节点
只有元素标签的，在IE低版本浏览器中，也会把注释当作元素节点
3、获取父节点

语法：[NODE].parentNode
获取某一个节点的父节点

4、获取一个哥哥节点

语法：[NODE].previousSibling
获取某一个节点的上一个哥哥节点

5、获取一个哥哥元素节点

语法：[NODE].previousElementSibling
获取某一个节点的上一个哥哥元素节点（不兼容IE低版本浏览器）

6、获取一个弟弟节点

语法：[CONTAINER].nextSibling
获取某一个节点的下一个弟弟节点

7、获取一个弟弟元素节点

语法：[CONTAINER].nextElementSibling
获取某一个节点的下一个弟弟元素节点（不兼容IE低版本）

8、获取第一个子节点

语法：[CONTAINER].firstChild
获取容器中第一个子节点

9、获取第一个元素子节点

语法：[CONTAINER].firstElementChild
获取容器中第一个元素子节点（不兼容IE低版本）

10、获取最后一个字节点

语法：[CONTAINER].lastChild
获取容器中最后一个字节点

11、获取最后一个元素子节点

语法：[CONTAINER].lastElementChild
获取容器中最后一个元素子节点（不兼容IE低版本）
