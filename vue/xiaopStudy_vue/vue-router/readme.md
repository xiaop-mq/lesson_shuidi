## vue-router
- vue.js路由管理器，包含的功能有：
  - 嵌套的路由/试图表
  - 模块化的、基于组件的路由配置
  - 路由参数、查询、通配符
  - 基于vue.js过滤系统的视图过度效果
  - 细粒度的导航控制
  - 带有自动激活的CSS class的链接
  - HTML5历史模式或者hash模式，在IE9中自动降级
  - 自定义的滚动条行为
- vue.js + vue-router 常见单页应用

## this.$router
- 与router使用起来完全一样.
- 使用原因: 我们并不像在每个独立需要封装路由的组件中都导入路由

- 当<router-link>对应的路由匹配成功,将自动设置class属性的值.router-link-active.

## router-link
- 支持用户在具有路由功能的应用中导航
- 通过to 属性指定目标地址,默认渲染成<a>标签

### <router-link>和<a href="...">好些,理由如下:
- 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
- 在 HTML5 history 模式下，router-link 会守卫点击事件，让浏览器不再重新加载页面。
- 当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写 (基路径) 了。


### v-slot
- <router-link>通过一个 `作用域插槽暴露底层的定制能力`
- 使用v-slot时,需要向router-link传入一个单独的子元素.

### router-view
- 渲染路径匹配到视图组件


## Router实例属性
- router.app: 配置了router的vue根实例
- router.mode: 路由使用的模式
- router.currentRoute: 当前路由对应的路由信息对象

## 路由嵌套
```js
const user = {
  template: '<div>User { $routes.params.id }</div>'
}

const router = new Vue({
  routes: [
    { path: '/user/: id',components: User }
  ]
})
```

## 动态路由
- 以冒号开始的为动态路由
{ path:'/user/: id' }