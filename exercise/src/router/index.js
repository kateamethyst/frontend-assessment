import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'First',
    component: () => import(/* webpackChunkName: "about" */ '../views/First.vue')
  },
  {
    path: '/second',
    name: 'Second',
    component: () => import(/* webpackChunkName: "about" */ '../views/Second.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
