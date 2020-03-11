import Vue from 'vue'
import App from './App.vue'

// 两个性能优化  
// lazyload
// click 
// https://www.npmjs.com/package/vue-lazyload 详细讲解
import VueLazyload  from 'vue-lazyload'; // 引入网页的懒加载

Vue.use(VueLazyload, {
  // src 菊花图    data-src 
  // commonjs  js   图片 webpack 静态资源打包器
  // js  css  img 
  error: require('./assets/loading.svg'), // error 报错图
  loading: require('./assets/loading.svg'), // 加载中 加载图
  attempt: 1  // viewport 尝试的次数
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
