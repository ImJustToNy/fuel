import Vue from 'vue'
import axios from 'axios';

import App from './App.vue'

Vue.config.productionTip = false

if (process.env.NODE_ENV) {
  axios.defaults.baseURL = 'http://localhost:8787'
} else {
  axios.defaults.baseURL = 'https://fuel.siek.workers.dev/'
}

Vue.prototype.$http = axios

import './assets/tailwind.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
