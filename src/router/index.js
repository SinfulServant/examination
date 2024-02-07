import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/available-tests',
      name: 'available-tests',
      component: () => import('../views/AvailableTestsView.vue')
    },
    {
      path: '/passing-test',
      name: 'passing-test',
      props: true,
      component: () => import('../views/PassingTestView.vue')
    },
    {
      path: '/resourses-for-study',
      name: 'resourses-for-study',
      component: () => import('../views/ResoursesView.vue')
    }
  ]
})

export default router
