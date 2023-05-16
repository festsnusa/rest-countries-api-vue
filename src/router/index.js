import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AppDetails from '@/components/AppDetails.vue'
import json from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:name',
      name: 'card',
      component: AppDetails,
    },
    {
      path: "/:catchAll(.*)",
      component: HomeView,
    },
  ]
})

export default router
