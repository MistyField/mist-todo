const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  pages: {
    index: 'src/main.js',
    postIt: 'src/views/post_it/main.js'
  },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },
  pluginOptions:{
    electronBuilder:{
      customFileProtocol: "./",
      nodeIntegration:true,
      builderOptions: {
        mac: {
          icon: 'build/icons/icon.icns'
        },
        win: {
          icon: 'build/icons/icon.ico'
        },
        linux: {
          icon: 'build/icons/icon.png'
        },
        extraResources: [
          {
            "from": "src/todos/data.json",
            "to": "app/data/todos/data.json"
          },
          {
            "from": "src/postits/data.json",
            "to": "app/data/postits/data.json"
          }
        ]
      }
    }
  }
})
