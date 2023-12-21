import { createRouter, createWebHistory } from 'vue-router'
import { LoginPage, CategoryPage, MenuPage } from '@/pages';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
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
