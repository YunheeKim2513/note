import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
