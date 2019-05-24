import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/mainpage'
import SignUp from '@/pages/signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'MainPage', component: MainPage},
    {path: '/signup', name: 'SignUp', component: SignUp}
  ]
})
