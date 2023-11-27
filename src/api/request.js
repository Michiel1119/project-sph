// 对 axios 进行二次封装
import axios from "axios"
// 引入 nprogress 实现进度条功能
import nprogress from 'nprogress'
// start 方法: 进度条开始    done 方法: 进度条结束
import 'nprogress/nprogress.css'
// 利用 axios 对象的 create 方法创建一个 axios 实例对象
const instance = axios.create({
    // 配置实例对象
    // 基础路径：发送请求的时候，路径当中会出现 api
    baseURL: '/api',
    // 请求超时的时间
    timeout: 3000
})

// 请求拦截器：在发送请求之前，将其拦截并进行相关业务或逻辑处理
instance.interceptors.request.use(config => {
    // 进度条开始滚动
    nprogress.start()
    // config: 配置对象，其中的 headers 属性作用为设置请求头
    return config
})

// 响应拦截器：在返回响应之前，将其拦截并设置成功和失败时触发的的回调函数
instance.interceptors.response.use(res => {
    // 进度条结束滚动
    nprogress.done()
    // 成功响应时触发该回调函数
    return res.data
}, error => {
    // 响应失败时触发该回调函数
    return Promise.reject(new Error('响应失败'))
})

// 对外暴露重新封装后的 axios 实例对象
export default instance