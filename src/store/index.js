import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件一次
Vue.use(Vuex)
// 引入各模块的 store
import home from './home'
import search from './search'
// 对外暴露 Store 类的一个实例
export default new Vuex.Store({
    // 实现 Vuex 仓库模块式开发，存储数据
    modules: {
        home,
        search
    }
})