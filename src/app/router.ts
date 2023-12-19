import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '@/pages/menu-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuPage
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/pages/add-page.vue')
    }
  ]
})

export default router
