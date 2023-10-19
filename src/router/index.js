import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入路由组件

export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: () => import('@/pages/Home'),
      meta: { showFooter: true }
    },
    {
      path: "/search",
      component: () => import('@/pages/Search'),
      meta: { showFooter: true }
    },
    {
      path: '/login',
      component: () => import('@/pages/Login'),
      meta: { showFooter: false }
    },
    {
      path: '/register',
      component: () => import('@/pages/Register'),
      meta: { showFooter: false }
    },
    // 重定向到首页
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
