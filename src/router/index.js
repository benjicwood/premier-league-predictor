import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Clubs from '../views/Clubs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: Clubs
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
