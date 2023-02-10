
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'

import { routeName } from './router/routeName'
import { keys } from './locales/keys'
import { storage } from './storage'
import { icons } from './icons'
import { functions } from './functions'

import "./assets/style.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.prototype.$routeName = routeName
Vue.prototype.$keys = keys
Vue.prototype.$storage = storage
Vue.prototype.$icons = icons
Vue.prototype.$functions = functions

new Vue({
  router,
  store,
  vuetify,
  i18n,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
