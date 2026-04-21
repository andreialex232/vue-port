import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
const HomeView = () => import('@/views/HomeView.vue')

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: HomeView
  }
]

/* const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    }
  ],
})

export default router */
