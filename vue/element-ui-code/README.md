1. element-ui 源码在哪里？ node_modules/element-ui

2. github element-ui  
  怎么做？ 学， 边看代码边实现一下? 

3. 写出来element-ui 组件
  css文件引入留下， 将 Vue.use(ElementUI)注释

- 学到代码风格 
  属性一行一个  有利于代码可读
- :class 的用法 []  有多个动态样式要输出 
  computed 属性 根据props 再计算
  6000 人民币(props, data) 再计算 raw 
  去美国买房 底特律  1000美元 
- props 高级声明 
  type : {  // props  name 
    type: String,   // 类型
    default: '默认值',
    validate: function(){}  return boolean 
  }
  ['type', 'title'] //粗线条的， 不能做太多的检测
