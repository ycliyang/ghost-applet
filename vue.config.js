let baseUrl = 'http://103house.com'
// let baseUrl = 'http://localhost:14000'


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
      '/admin': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      },
      '/shop': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/shop': '/shop'
        }
      },
      '/pub/shop': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/pub/shop': '/pub/shop'
        }
      }
    }
  }

}
