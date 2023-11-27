// 在这个 js 文件中对接口进行统一管理
import instance from "@/api/request"

// 首页三级分页
export const reqCategoryList = () => instance({url: '/product/getBaseCategoryList', method: 'get'}) // 发送请求