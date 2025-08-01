const VMain = () => import('@/components/mainPage/vMain.vue')

const vRate = () => import('@/components/ratePage/v-rate.vue')
const VCalendar = () => import('@/components/claendarPage/v-calendar.vue')

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'rate',
    component: vRate,
  },
  {
    path: '/calendar',
    name: ' calendar',
    component: VCalendar,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
