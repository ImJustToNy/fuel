import Vue from 'vue'
import VueCookies from 'vue-cookies'
import axios from 'axios';
import App from './App.vue'

import './assets/tailwind.css'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8787'
} else {
  axios.defaults.baseURL = 'https://fuel.siek.workers.dev/'
}

Vue.prototype.$http = axios

Vue.use(VueCookies)
Vue.$cookies.config('1y')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
