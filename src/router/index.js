import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/each/:countryName',
    name: 'Each',
    component: () => import('../views/Each.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
