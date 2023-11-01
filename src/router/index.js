import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 配置路由
const routes = [
    {
        path: "/home",
        component: () => import('@/views/Home'),
        meta: {showFooter: true}
    },
    {
        path: "/search",
        component: () => import('@/views/Search'),
        meta: {showFooter: true}
    },
    {
        path: '/login',
        component: () => import('@/views/Login'),
        meta: {showFooter: false}
    },
    {
        path: '/register',
        component: () => import('@/views/Register'),
        meta: {showFooter: false}
    },
    // 重定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]
// 引入路由组件
const router = new VueRouter({
    routes
})

export default router
