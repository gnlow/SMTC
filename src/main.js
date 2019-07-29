import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import jsonpAdapter from 'axios-jsonp'

Vue.prototype.$http = axios
Vue.prototype.$jsonpAdapter = jsonpAdapter

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
