import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '@/pages/menu-page.vue';
import CategoryPage from '@/pages/category-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuPage
    },
    {
      path: '/category/:categoryID',
      name: 'category',
      component: CategoryPage
    },
    {
      path: '/add-category',
      name: 'add category',
      component: () => import('@/pages/add-category-page.vue')
    }
  ]
})

export default router
