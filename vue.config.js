module.exports = {
  pwa: {
    name: 'Akif Kadıoğlu',
    workboxOptions: {
      exclude: ['_redirects'],
    },
  },

  transpileDependencies: [
    'vuetify'
  ],

  publicPath: '',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
}
