import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'
Vue.config.productionTip = false
import Vuetify from 'vuetify'

Vue.use(Vuetify)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
