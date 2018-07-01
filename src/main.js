// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import 'animate.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../static/bil/css/public.css'
import '../static/bil/css/reset.css'
import '../static/bil/js/index'
/* eslint-disable no-new */

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://47.96.234.246:80/'

Vue.prototype.imgurl = 'http://47.96.234.246:80/'
Vue.use(VueResource)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

