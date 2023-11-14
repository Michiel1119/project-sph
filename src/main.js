import Vue from 'vue'
import App from './App.vue'
// 三级联动组件---全局组件
import TypeNav from '@/views/Home/TypeNav'
// 引入路由
import router from './router'

Vue.config.productionTip = false
// 全局注册组件（要写在创建 Vue 实例之前），第一个参数：组件别名，第二个参数：组件
Vue.component('TypeNav',TypeNav)
new Vue({
  render: h => h(App),
  // 注册路由
  router // router: router 简写
}).$mount('#app')
