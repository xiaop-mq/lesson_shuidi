## 你能讲讲MVVM吗？
MVVM全名为model-view-viewmodel;相当于将MVC中的contronller变为viewmodel,model为数据模型，view为组件UI，ViewModel是model层和view层之间的桥梁，数据会绑定到ViewModel层并将其渲染至页面中，视图变化会通知ViewModel层更新数据。

## 简单说说vue2.x响应式原理
初始化项目时，会通过Object.defineProperty重新定义data属性，当页面使用data属性时，会进行依赖收集以及data数据发生变化时通知修改以来的相关操作。

## 简单说说vue3.x响应式原理
vue3.x将Proxy替换Object.defineProperty。因为proxy可以直接监听数组和对象的变化，proxy多达13种拦截方式。
- proxy只能监听第一层对象，其他的怎么办？
可以使用reflex.get防范判断对象是不是Object,如果是的话则使用relative进行更深入的数据观测。
- proxy有多个set/get，那么是不是要进行多次触发？
使用key来判断当前对象是否为target自身属性，判断新值和旧值是否相等，满足以上条件之一，则会引起trigger的执行。

## 再说下vue2.x如何检测数组变化？
使用函数劫持的方式，重写了数组的方法，vue将data数组进行了原型链重写，指向了自己定义的数组原型方法。

## vue2.x组件通信有哪些方式？
父组件向子组件可以通过props进行通信
子组件向父组件可以通过：$on、$emit进行通信
兄弟组件进行通信可以使用：vuex event bus
组件间进行通信可以使用：vuex $attrs $listener inject provide

## SSR了解吗？
服务器渲染：也就是将在客户端进行标签渲染成html的工作放在了服务器端进行操作，最后将html结果返回给客户端。
好处：使用更好的SEO、首屏加载速度更快
缺点：开发受到限制，只能在beforecreate和created两个钩子执行。

## 你都做过哪些vue性能优化？
编码风格：
- 尽量减少data里数据的使用，会触发getter和setter，增加watcher事件。
- v-if和v-for不能连用
- SPA页面使用keep-alive缓存组件
- 防抖、节流
- 图片懒加载
- 如果需要使用v-for给每项绑定事件使用事件代理
- 使用v-if代替v-show
- key保证唯一
- 使用路由懒加载、异步组件
- 第三方模块按需引入

SEO优化：
- 预渲染
- 服务端渲染SSR

打包优化：
- 压缩代码
- Tree Sharking和scope hosting
- 使用cdn来加载第三方模块
- 多线程打包happyhack
- ChunkSplit存放公共代码
- SourceMap优化

用户体验：
- PWA
- 使用缓存机制
- 骨架屏

## history路由和hash路由实现原理说下
- location.hash路由代表的时URL#后面的内容
- history路由采用了HTML5的API来实现，使用hietory.pushState()和history.replaceState()

## nextTick知道吗，实现原理是什么？
在下次DOM更新循环结束之后执行延迟回调。nextTick主要使用了宏仁务和微任务。根据执行环境分别采用
- promise
- MutationObserver
- setImmediate
- 如果以上都不行则采用setTimeout
定义异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

## vue生命周期
- beforeCreate: 在创建new Vue()第一个钩子函数，在这个阶段data、compouted、methods以及watch上的数据和方法都不能被访问。
- created: 在实例创建后发生，当前阶段已经完成了对数据的观测，也就是可以使用数据、更改数据，做一些数据初始化的操作。这个阶段的操作不会触发update函数，不会和DOM做一些交互，如果想与DOM进行交互，可以使用$vm.nextTick
- beforeMount: 发生在挂载之前，在此之前模板引擎template已经导入到渲染函数编译。当前DOM创建已经完成，即将开始渲染。在此之前可以对数据进行修改，不会触发updated.
- mounted: 发生在挂载完成之后，当前阶段，真实的DOM挂载完毕，数据完成双向绑定，可以访问到DOM节点，使用$refs属性对DOM进行操作。
- beforeUpdate：发生在更新之前，也就是响应式数据发生更新，虚拟DOM重新渲染之前被处罚，你可以在当前阶段进行更改数据，不会造成重渲染。
- updated：发生在更新完成之后，当前阶段DOM已经更新。要注意的是避免在此阶段进行更新，可能导致无线循环的更新。
- beforeDestory：发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行收尾工作，比如清除计时器。
- destoryed：发生在销毁之后，这个时候只剩下DOM空壳，组件已经被拆除，数据绑定被卸除，监听被移除，子实例也统统被销毁。

## 你的接口一般放在哪个生命周期中？
- 接口请求一般放在mounted中，但要注意的是服务端渲染时不支持mounted,需要放到created中。

## v-if和v-show的区别：
- 当条件不成立时，v-if不会渲染DOM元素。
- v-show切换的是样式，切换当前DOM的显示和隐藏。
