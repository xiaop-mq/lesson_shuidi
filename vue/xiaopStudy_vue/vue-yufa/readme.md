## vue模板语法
- vue数据绑定语法
  - {{ text }} 文本插值
  - <div v-html="html"></div> HTML输出
  - v-bind HTML属性插值。如<button v-bind:disabled="someDynamicCondition">Button</button>
  - javascript表达式。直接在mustache、属性插值里面使用各种表达式（加减乘除、三元运算、方法调用等）。
  - 过滤器（有点类似 Shell 命令中的管道，可以定义过滤器来对原始值进行变化）
  - 指令。之前提到的 v-bind 也是一种指定，其他包括 v-on: 系列（dom 事件的监听）、v-for、v-model等。


## vue2.0全面入坑 01
- vue主要是“面向数据”编程。当数据发生改变时使用虚拟DOM来更改某一DOM节点，避免将整个页面渲染。

1. vue特色-双向数据绑定：数据模型(model)与视图组件(view)的自动同步。

2. vue实例
- 每一个应用都是通过vue这个构造函数创建根实例，启动new Vue.需要传入选项对象，对象包含挂载元素，数据，模板，方法等。
   - el: 挂在元素选择器
   - data: 代理数据
   - methods: 定义方法
- `vue代理data数据`,每个vue实例都会代理其data对象里所有的属性，这些被代理的属性是响应的。新添加的属性不具备响应功能，改变后不会更新视图。
- vue实例自身属性和方法，暴露自身的属性和方法，以'$'开头的，例如$el、$data

- 声明式渲染
只需要声明在哪里做什么，而无需关心怎么去实现。
- 命令式
需要表明具体代码在哪里做什么，如何实现。

4. vue指令
- v-bind: 动态绑定数据。简写为“ : ”。 =>以后的:class="{ red:boolean }"
- v-on: 绑定事件监听器。简写为" @ "。例如：@click="xxx"
- v-text: 更新数据，会覆盖掉已有的结构。类似于{{ msg }}
- v-show: 根据值的真假，切换display属性；
- v-if: 根据值的真假，切换元素会被销毁、重建；=>在dom中已经消失
- v-else-if: 多条件判断，为真则渲染
- v-for: 基于源数据多次渲染元素或者模块
- v-model: 在表单空间元素(input)上创建双向数据绑定(数据源)；
- v-pre: 跳过元素和子元素的编译过程；
- v-once: 只渲染一次，随后数据更新也不重新渲染
- v-cloak: 隐藏未编译的mustache语法，在css中设置[v-cloak]{display: none}

5. 特殊的attribute
- key: `用于vue的虚拟DOM算法，在新旧nodes对比辨识VNodes`。
- 如果不适用key，vue会使用一种`最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素`的算法。
- 使用key时，它会基于key的变化重新排列元素顺序，并且会移除key不存在的元素

- `有相同父元素的子元素必须有独特的key`。重复的key会造成渲染错误。
```html
<ul>
    <li v-for="item in items" :key="item.id"></li>
</ul>
```

- 也可`用于强制替换元素/组件`而不是重复使用它。
  - 完整的触发组件生命周期钩子
  - 触发过滤
  ```html
  <transition>
      <span :key="text">{{ text }}</span>
      </transition>
  ```

- ref: 被用来给元素或子组件注册引用信息。
- 引用信息将会注册在父组件的$refs对象上。
- 如果是在普通DOM元素上使用，引用指向的就是DOM元素；如果是在子组件上，引用就指向组件实例
```html
<!-- DOM -->
<p ref="p">hello</p>

<!-- 子节点 -->
<child-component ref="child"></child-componet>
```
- 当v-for用于元素或者组件的时候，引用信息将是包含DOM节点或组件实例的数组。
- ref注册时间的重要说明：ref本身是作为渲染结果创建的，在`初始化的时候不能被访问，因为他们还没有被创建`！$refs也不是响应式的，因此`不应该使用ref在数据上进行数据绑定。`


6. vue模板
  1. html模板
  插值：文本使用mustache语法 大括号{{value}};
  作用替换实例上的属性值，值的内容会被自动更新。可以使用v-text="value"代替

  2. 数据对象属性
     - class: {}, 绑定class,和v-bind: class一样的API
     - style: {}, 绑定样式，和v-bind: style一样的API
     - attrs: {}, 添加行间属性
     - domProps: {}, DOM元素属性
     - on: {}, =>绑定事件
     - nativeOn: {}, => 监听原生事件
     - directives: {}, => 自定义指令
     - scopedSlots: {}, => slot作用域
     - slot: {}, =>定义slot名称 和组件有关系，插槽
     - key: "key", => 给元素添加唯一标识
     - ref: "ref", => 引用信息
  3. console.dir(): 可以显示一个对象所有属性和方法


## vue2.0入坑
1. 列表渲染v-for=""
- 功能：根据一组数据的选项列表进行渲染(自动for循环)
- 语法：value, key in items/value, key for items
- 变异方法： vue提供一组方法，对数组进行操作的时候，会触发视图更新（map()不会触发） ,但其并不是原生的方法，原生的方法是不会触发视图的更新

2. 事件处理器(指令，绑定事件) v-on=""
- 功能：用来监听DOM事件触发代码
- 语法：v-on:eventName = "eventHandle"
  简写：@click:eventName = "eventName"
- 事件处理函数：写在vue实例的methods中统一进行管理

3. 事件修饰符
- 阻止冒泡、取消默认行为、判断按键
- `修饰符位置`：以"."写在事件名称后面(v-on:eventName.修饰符 = "xxx")
- 事件修饰符：
  .stop(冒泡) | .prevent(默认事件) | .capture(捕获) | .self | .once(执行一次)

4. 条件渲染 v-show = ""
- 功能：根据表达式的值，用来隐藏/显示元素
- v-show="表达式"，根据表达式的值true/false，来判断显示或隐藏
元素会被渲染到页面中，只是根据表达式的值进行css的切换(display: none)
数据list数组是否有内容
v-show="!list.length"
v-if="xxx",是不在页面渲染的

5. 动态绑定class
- class也为元素的属性，可以使用v-bind:class
- 语法：:class="{className:表达式}"
  表达式值为true 添加className(add)
  表达式值为false 不添加className(remove)
  `:class={completed: item.isChecked}`



## vue2.0入口
### 自定义指令
除了vue内置指令之外，还可以自己设置指令
1. 注册全局指令：所有人可以一起使用
2. 注册局部指令：当前组件下可用
选项对象的directives属性

### 计算数据(计算属性)：在选项对象中定义
- 计算属性和数据使用的方式不一样。页面加载的时候后触发get函数，当点击事件后会触发get函数。

### 组件化开发
vue中的组件是一个自定义标签（元素），Vue.js的编译器为它添加特殊功能；vue也可以拓展原生的html元素，封装可重用的代码
- 全局注册组件
Vue.component('组件名',{
  template:``
})
- 局部注册组件
var 组件名 = (
  template: ``
)
- 组件模板编写方式
当我们组件模板内容比较多的时候，不要用字符串的方式了，比较繁琐。可使用在外部定义一个模板然后再组件注册的时候引用一下。

- 在组件中定义组件(父子组件)
  - 组件中得数据是以函数的形式，并且有返回值