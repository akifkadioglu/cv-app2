module.exports = {
  pwa: {
    name: 'Akif Kadıoğlu',
    workboxOptions: {
      exclude: ['_redirects'],
    },
    icons: {
      favicon32: 'img/icons/ios/16.png',
      favicon16: 'img/icons/ios/32.png',
      appleTouchIcon: 'img/icons/ios/152.png',
      maskIcon: 'img/icons/ios/152.svg',
      msTileImage: 'img/icons/windows11/StoreLogo.scale-150.png'
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
