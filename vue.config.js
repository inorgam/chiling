const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    https: false,
    hot: false,
    proxy: {
      '/api': {
        target: 'http://192.168.1.103:3001/api/v1',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
