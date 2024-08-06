import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import EventView from '@/views/EventView.vue'
import ExhibitionView from '@/views/ExhibitionView.vue'
import EducationView from '@/views/EducationView.vue'
import DigitalMuseumView from '@/views/DigitalMuseumView.vue'

const routes = [
  { path: '/', name: 'main', component: MainView, props: true },
  { path: '/exhvt', name: 'exhibition', component: ExhibitionView, props: true },
  { path: '/edu', name: 'education', component: EducationView, props: true },
  { path: '/evt', name: 'event', component: EventView, props: true },
  { path: '/dgtm', name: 'digital-museum', component: DigitalMuseumView, props: true },

  
  // { path: '/exhibit', name: 'AboutView', component: () => import('../views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
