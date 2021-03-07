import Vue from 'vue'
import axios from 'axios';

import App from './App.vue'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8787'
Vue.prototype.$http = axios

import './assets/tailwind.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
