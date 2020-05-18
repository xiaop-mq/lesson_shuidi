- JS/CSS 面试基础 宝典
- 面向顶级就业， 阿里/腾讯/头条
  tree DOM树/css 渲染树 VNODE 虚拟节点 virtual DOM
  JS 原生   基础能力 

- Virtual DOM （肯定可以）babel  AST 抽象语法树(?)

问题，
<template>
 <div id="root">
  <span class = "demo">
   This is a span
   </span>
   <p>DOM</p>
   </div>
</template>
内存：JSON 表达 JS 原生能力 
html -> js (tree, json)
描述性 描述关键内容 抽象能力
别无其它 JSON 表达对一个节点的抽象
DOM 文本节点nodeType
tree 的定义 treeNode 结构都一样
屏蔽了最底层文本节点的差异
满足递归算法，退出条件，大问题划分成小问题
{
    tag: 'div', /*  标签 */
    attrs:{ /* 标签上的所有属性 封装*/
       id: 'root'
    },
    children: [
        {
            tag: 'span'
            attrs: {
                className: 'demo' /* 规避语法关键字 */
            },
            children: [
                {
                    tag: undefined,
                    text: 'DOM'
                }
            ]
        },
        {
            tag：'p',
            children:[
                {
                    tag:undefined,
                    text: 'DOM'
                }
            ]
        }
    ]
}

只要更强 就一定可以就业更强