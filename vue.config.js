

var baseUrl = 'http://localhost:14000';


module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 这里的选项会传递给 sass-loader
      }
    }
  },
  devServer: {
    proxy: {
      '/auth': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/auth': '/auth'
        }
      },
    }
  }

}
