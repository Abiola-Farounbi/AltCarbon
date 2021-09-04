import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard/Dashboard'
import store from './store.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        // meta: {
        //   requiresAuth: true
        // }
    },
  
];







const router = createRouter({ history: createWebHistory(), routes })
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  })
export default router