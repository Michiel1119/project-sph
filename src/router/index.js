import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 备份 VueRouter 原型对象的 push 和 replace 方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写 push 和 replace 方法
// 第一个参数 location：告诉原来的 push 方法，你要向哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call 和 apply 都可以调用函数一次，都可以篡改函数的上下文一次，使用 call 方法传递的参数之间需要使用逗号隔开，而 apply 方法使用一个数组来传递参数
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {
        }, () => {
        })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        // call 和 apply 都可以调用函数一次，都可以篡改函数的上下文一次，使用 call 方法传递的参数之间需要使用逗号隔开，而 apply 方法使用一个数组来传递参数
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {
        }, () => {
        })
    }
}
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
