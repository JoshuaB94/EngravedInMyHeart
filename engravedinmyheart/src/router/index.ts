import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Features from '../pages/Features.vue'
import Download from '../pages/Download.vue'
import Support from '../pages/Support.vue'
import About from '../pages/About.vue'
import BaserowApp from '../pages/BaserowApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transition: 'fade' }
    },
    {
      path: '/features',
      name: 'features',
      component: Features,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/download',
      name: 'download',
      component: Download,
      meta: { transition: 'slide-left' }
    },
    {
      path: '/support',
      name: 'support',
      component: Support,
      meta: { transition: 'fade' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { transition: 'fade' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { transition: 'fade' }
    },
    {
      path: '/app',
      name: 'app',
      component: BaserowApp,
      meta: { transition: 'fade' }
    }
  ]
})

export default router
