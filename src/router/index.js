import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  { path: '/', name: 'main', component: MainView, props: true },
  { path: '/seoul', name: 'seoul', component: MainView, props: true},

  
  { path: '/exhibit', name: 'AboutView', component: () => import('../views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
