## babel
parse -> transform -> generate
```js
<div>
  <p></p>
</div>
function foo() {
}
```

我今天很高兴：
词法分析：分词： '我'   '今天'   '很'  '高兴'(有意义的词不能分开)
语法分析：分析，强调的是 整个语境 上下文

parse:解析
解析：code -> AST(抽象语法树)
   - 词法分析：状态机 ，将源码解析成一个个 token:start ->div end -> p
   - 语法分析：LL算法 LR算法 html -> DOM树 
     父子关系构造出来
     编译原理(书籍)
   - AST 抽象语法树
     babelon7解析器解析成树
```js
{
  tag: 'div'
  children: [
    {
      tag:'p'
    }
  ]
}
```
数字：
```js
var a = 123;
```

transform: babel 插件就在这里工作

```js
while(true){
  try{
    var a= 1;
  }catch(err){

  }
}
```
```js
body:[
  while: {
    condition: true,
    statement: null
  }
  try: {
    var: {
      variable: 'a',
      value: 1
    }
    catch: {
      arguments: err
    }
  }
]
```