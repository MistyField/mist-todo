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
          icon: 'build/icons/1024x1024.png'
        },
      }
    }
  }
})
