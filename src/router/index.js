import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaseAuth from '@/views/auth/BaseAuth.vue'
import BaseMenu from '@/views/menu/BaseMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: BaseAuth,
    children: [{
      path: 'login',
      name: 'Login',
      component: () => import('@/views/auth/login/LoginView.vue')
    }]
  },
  {
    path: '/login',
    redirect: '/auth/login',
  },
  {
    path: '/menu',
    redirect: '/menu/dashboard',
    component: BaseMenu,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/menu/dashboard/DashboardView.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
