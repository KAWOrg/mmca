import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'
import MyPageView from '../views/MyPageView.vue'
import AdminPageView from '../views/AdminPageView.vue'
import EventView from '@/views/EventView.vue'
import ExhibitionView from '@/views/ExhibitionView.vue'
import EducationView from '@/views/EducationView.vue'
import DigitalMuseumView from '@/views/DigitalMuseumView.vue'

const routes = [
   { path: '/', name: 'main-page', component: MainPageView, props: true },
   { path: '/myPage', name: 'my-page', component: MyPageView, props: true },
   { path: '/admin', name: 'admin-page', component: AdminPageView, props: true },

   { path: '/main/exhvt', name: 'exhibition', component: ExhibitionView, props: true },
   { path: '/main/edu', name: 'education', component: EducationView, props: true },
   { path: '/main/evt', name: 'event', component: EventView, props: true },
   { path: '/main/dgtm', name: 'digital-museum', component: DigitalMuseumView, props: true },

  
  // { path: '/exhibit', name: 'AboutView', component: () => import('../views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
