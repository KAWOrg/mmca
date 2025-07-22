import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'
import MyPageView from '../views/MyPageView.vue'
import AdminPageView from '../views/AdminPage/AdminPageView.vue'
import EventView from '@/views/EventView.vue'
import ExhibitionView from '@/views/ExhibitionView.vue'
import EducationView from '@/views/EducationView.vue'
import DigitalMuseumView from '@/views/DigitalMuseumView.vue'

import AdminExhibitionView from '@/views/AdminPage/Exhibition/AdminExhibitionView.vue'
import AddExhibitionView from "@/views/AdminPage/Exhibition/AddExhibitionView.vue"

import AdminPlaceView from '@/views/AdminPage/PlaceInfo/AdminPlaceView.vue';

const routes = [
   { path: '/', name: 'main-page', component: MainPageView },
   
   // 메인페이지 - 메뉴 선택
   { path: '/main/exhbt', name: 'exhibition', component: ExhibitionView, props: true },
   { path: '/main/edu', name: 'education', component: EducationView, props: true },
   { path: '/main/evt', name: 'event', component: EventView, props: true },
   { path: '/main/dgtm', name: 'digital-museum', component: DigitalMuseumView, props: true },

   // 마이페이지
   { path: '/myPage', name: 'my-page', component: MyPageView, props: true },

   // 관리자 페이지
   { path: '/admin', name: 'admin-page', component: AdminPageView,
      children:
      [
        // 시설정보 관리
        { path: 'place', name: 'admin-place', component: AdminPlaceView }
      ]
    },
   
   // 전시관리
   { path: '/admin/exhbt', name: 'admin-exhibition', component: AdminExhibitionView, props: true },
   { path: '/admin/exhbt/addExhbt', name: 'admin-add-exhibition', component: AddExhibitionView, props: true },
  
  // { path: '/exhibit', name: 'AboutView', component: () => import('../views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
