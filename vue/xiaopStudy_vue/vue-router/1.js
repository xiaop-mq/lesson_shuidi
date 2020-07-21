// 如果使用模块化机制编程，导入vue和vueRouter，要调用 Vue.use(vueRouter)

// 1. 定义路由组件
// 可以从其他文件import进来
const Foo = { template: '<div>foo</div>'}
const Bar = { template: '<div>bar</div>'}
const Xiaop = { template: '<div>Xiaop</div>' }
// 2. 定义路由
// 每个路由都应该映射一个组件.其中"components"可以是
// 通过vue.extends()创建的组件构造器
// 或者只是一个组件配置对象
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: 'xiaop', components: Xiaop }
]

// 3. 创建router实例，然后传'route'配置
const router = new VueRouter({
    routes // 缩写：相当于routes: routes
})

// 4. 创建和挂载根实例
// 通过router配置参数注入路由
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app')

// 现在已经启动了

