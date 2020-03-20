import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// utils 不用引入loadsh vue-lazyloader 将我们的项目体积变小 节省了空间
import utils from '@/utils/base.js' 
// import Plugins from '@/plugins/index.js'


Vue.config.productionTip = false
// 将常用的工具类 插入到Vue.prototype
Vue.prototype.utils = utils // this.$utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
