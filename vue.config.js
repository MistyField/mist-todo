const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
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
          }
        ]
      }
    }
  }
})
