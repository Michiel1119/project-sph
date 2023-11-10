import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 配置路由
const routes = [
    {
        path: '/home',
        component: () => import('@/views/Home'),
        meta: {showFooter: true}
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/views/Search'),
        meta: {showFooter: true},
        // props 传参第一种写法：boolean 值
        // props: true
        // props 传参第二种写法：对象写法
        // props: {a: 3, b: 5}
        // props 传参第三种写法（常用）：函数写法
        props: ($route) => ({keyword: $route.params.keyword, upperCase: $route.query.upperCase, a: 3, b: 5})
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
