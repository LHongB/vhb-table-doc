const version = 3
const publicPath = './'
// if (process.env.NODE_ENV === 'production') {
//   publicPath = `/vhb-table/v${version}/`
//   if (process.env.npm_lifecycle_event === 'build:main') {
//     publicPath = `/v${version}/`
//     process.env.VUE_APP_CDN_URL = '/umd/'
//     process.env.VUE_APP_MAIN_URL = '/'
//   }
// }

module.exports = {
  publicPath,
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vhb-table v3'
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: {
      'highlight.js': 'hljs'
    }
  },
  chainWebpack (config) {
    // 移除
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}
