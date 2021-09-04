import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home'
import Dashboard from './components/Dashboard/Dashboard'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
      
    },
  
];







const router = createRouter({ history: createWebHistory(), routes })

export default router