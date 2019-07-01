import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/mainpage'
import SignUp from '@/pages/signup'
import Auth from '@/pages/auth'
import NoticeMain from '@/pages/noticemain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'MainPage', component: MainPage},
    {path: '/signup', name: 'SignUp', component: SignUp},
    {path: '/auth', name: 'Auth', component: Auth},
    {path: '/noticemain', name: 'NoticeMain', component: NoticeMain},
  ]
})
