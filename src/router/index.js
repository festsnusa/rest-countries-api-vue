import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue'
import NotFound from '../views/NotFound.vue'
import json from '../data.json'

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
      component: CardView,
      props: route => ({ arr: json.filter(e => e.name === route.params.name) })
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ]
})

export default router
