import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaseAuth from '@/views/auth/BaseAuth.vue'
import BaseMenu from '@/views/menu/BaseMenu.vue'

import LoginView from '@/views/auth/login/LoginView.vue'
import DashboardView from '@/views/menu/dashboard/DashboardView.vue'
import StatisticsView from '@/views/menu/statistics/StatisticsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/menu',
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: BaseAuth,
    meta: {
      hideForAuth: true,
    },
    children: [{
      path: 'login',
      name: 'Login',
      component: LoginView,
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
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: DashboardView,
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: StatisticsView,
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  let session = !!localStorage.getItem('userSession')

  if (to.name === from.name && to.params === from.params) {
    next(false)
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!session) {
      next({ name: 'Login'})
    } else {
      next()
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (session) {
      next({ path: "/" });
    } else {
      next();
    }
  }

  next()
})

export default router
