import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

// import filters
import './filters'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-stock-trader-203b1.firebaseio.com/'

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
