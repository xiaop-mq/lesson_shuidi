# VUE优化手段：开发过程
## 优先使用v-if
- `v-if和v-show都是用于对元素的显示隐藏，只是一个是直接对DOM，一个是通过CSS的display来操作的`。
- 使用v-if代替v-show，只有当DOM频繁进行显示和隐藏的时候，但是这种场景非常少见。

## v-for和v-if不要一起使用
- `v-for的优先级高于v-if，所以当两个指令出现来一个DOM中，那么v-for渲染的当前列表，每一次都要使用v-if来进行一个判断`。而对应的列表也会重新变化，这个设计非常不合理。
- 需要进行同步指令的时候。尽量使用计算属性，先将v-if不需要的值先过滤掉。
```js
// 计算属性
computed: {
  filterList: function () {
  return this.showData.filter(function (data) {
    return data.isShow
  })
}
```
```html  
<!-- DOM -->
  
<ul>
  <li v-for="item in filterList" :key="item.id">
  {{ item.name }}
  </li>
</ul>
```

## v-for key避免使用index作为标识
- 众所周知，`v-for是不推荐使用Index作为下标为key的值`。
- 当Index为标识的时候，插入一条数据的时候，列表后面的key都发生了变化，那么当前的v-for都会对key变化的element重新渲染，但是其实它们除了插入的element数据都没有发生改变，导致了没必要的开销。
- 所以尽量不要使用index作为标识，而去采用数据中的唯一值，如id等字段。

## 释放组件资源
资源：每创建一个事物都需要消耗资源，资源不是凭空产生的，是分配出来的。
- 当组件销毁后，尽量把我们开辟出来的资源块给毁掉，比如setInterval，addEventListener等，不手动释放会导致资源浪费。
```js
// 添加的事件
created(){
    addEventListener('click', Function, false)
}
beforeDestory(){
    removeEventListener('click', Function, false)
}

// 定时器
created(){
    this.currentInterval = setInterval(code, millisec, lang)
}
beforeDestory(){
    clearInterval(this.currentInterval)
}
```


## 长列表
- 长列表：区别于普通的分页来说，在做无限列表的时候，大部分都通过v-for将数据遍历出来，想的多一点就是做分页。
- 滚动到底部的时候就继续请求API。 -> 欠妥当
- 随着数据的加载，DOM会越来越多，导致性能开销问题的产生
- 对于长列表优化的时候，将DOM移除掉，类似于懒加载的方式，出现在视图上的DOM才是最重要的DOM。
`vue-virtual-scroller`


## 图片优化的合理方式
- 大部分认为使用懒加载，但是只有当存在图片的DOM出现才会进行图片的加载，无形中起到了分流的作用。
  - 小图片使用SVG或者字体图标
  - 通过base64和webp的方式加载小型图片
  - 能通过cdn加速的大图尽量使用cdn
  - 大部分框架都带有懒加载的图片


## 路由按需加载
路由的懒加载有两种方式：一种是require，另一种是import
```js
// require法
component: resolve=>(require(['@/components/HelloWorld'], resolve))
// import方法
component: () =>import('@/components/HelloWorld')
```

## UI框架使用方式
- UI框架如：element,ant等等，都会使用官方给暴露出来的按需加载组件。

## 首屏优化
- vue项目过大时，那么首次加载的资源时间也会很长。
- 界面还没加载完毕，界面的DOM也不会渲染，会造成白屏的问题。

# VUE优化手段：项目过程

## 最小化JS文件
- 通过webpack打包JS文件，让其更加精简
```js
config.optimization.minimize(true)
```

## 图片资源压缩
- image-webpack-loader对图片进行压缩

## 打包公告代码
- optimization.minimize将公共代码进行打包

## 删除沉淀代码
- Tree-sharking

## 依赖库CDN加速
```js
// 在html引入script标签后。在vue的配置中，进行声明
configureWebpack: {
  externals: {
    'echarts': 'echarts' // 配置使用CDN
  }
}
```
## GZIP