import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/dashboard/DashboardView.vue'
import ShowsList from '@/views/dashboard/tv-shows/ShowsList.vue'
import SearchShows from '@/views/dashboard/tv-shows/SearchShows.vue'
const ShowDetails = () => import('@/views/dashboard/tv-shows/ShowDetails.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
      redirect: { name: 'TV Shows List' },
      children: [
        {
          path: '/tv-shows-list',
          name: 'TV Shows List',
          component: ShowsList
        },
        {
          path: '/show/:id',
          name: 'Show details',
          component: ShowDetails
        },
        {
          path: '/search',
          name: 'Search',
          component: SearchShows
        }
      ]
    },
    {
      path: '/:catchAll(.*)*',
      redirect: () => {
        return '/tv-shows-list'
      }
    }
  ]
})

export default router
