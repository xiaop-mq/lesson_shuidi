- 想成为滴滴老司机吗？vue
  npm i -g yarn 安装yarn

## vue建项目
vue create + 项目名称

## react建项目
create-react-app 


# vue代码技巧
## slots新语法向3.0看齐
  `使用带有 # 的新命名插槽缩写语法`
eg:
old: <template v-slot:content></template>
new: <template #content></template>
- 构建插槽与构建组件没有什么不同。本质上，插槽是具有超强功能的组件。

## 动态指令参数
- 动态指令参数现在可以接受动态javascript表达式 动态参数值应该是字符串，但允许null作为一个明确只是应该删除绑定的特殊值，那将会很方便。任何其他非字符串的值都有可能出错，并会触发警告。(仅适用于v-bind和v-on)
<div v-bind:[attr] = "attributeName"></div>
<!-- 简写 -->
<div :[attr] = "attributeName"></div>

- 使用动态参数作为一个动态的事件名绑定处理函数
<button v-on:[eventName] = "handler"></button>
<!-- 简写 -->
<button @[eventName] = "handler"></button>


## hook那些事

## vue中的$props、$attrs、$listeners(可用来二次封装组件)
- $props: 当前组件接收到的props对象。vue实例代理了对其props对象属性的访问。

## 响应式数据
vuex解决状态共享问题再小项目中使用会增大代码体积。
vue新增：vue.observable(object)让一个对象可响应，内部会用他来处理data函数返回的对象。

## jsx模板组件

## 动态组件
通过vue的元素加一个特殊的is attribute 可以实现动态组件的效果

## vue.filter
过滤器
假设：时间戳转化成年月日这是一个公共方法，所以可以抽离成过滤器使用
```html
// 使用
// 在双花括号中
{{ message | capitalize }}

// 在 `v-bind` 中
<div v-bind:id="rawId | formatId"></div>

// 全局注册
Vue.filter('stampToYYMMDD', (value) =>{
  // 处理逻辑
})

// 局部注册
filters: {
  stampToYYMMDD: (value)=> {
    // 处理逻辑
  }
}

// 多个过滤器全局注册
// /src/common/filters.js
let dateServer = value => value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3') 
export { dateServer }
// /src/main.js
import * as custom from './common/filters/custom'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))

```

## .sync语法糖
`sync就是为了实现prop进行双向绑定仅此而已`

## 利用object.freeze提升性能
Object.freeze() 方法可以冻结一个对象。一个被冻结的`对象再也不能被修改`；冻结了一个对象则`不能向这个对象添加新的属性`，`不能删除已有属性`，`不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值`。此外，冻结一个对象后该`对象的原型也不能被修改`。
freeze() 返回和传入的参数相同的对象。

