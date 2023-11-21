const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭 eslint
  // 代理跨域
  devServer: {
    proxy: {
      'api': {
        target: 'http://gmall-h5-api.atguigu.cn'
      }
    }
  }
})
