import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AssignmentView from '../views/AssignmentView.vue'
import CompanyView from '../views/CompanyView.vue'
import DeveloperView from '../views/DeveloperView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/assignments',
    name: 'assignments',
    component: AssignmentView
  },
  {
    path: '/companies',
    name: 'companies',
    component: CompanyView
  },
  {
    path: '/developers',
    name: 'developers',
    component: DeveloperView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
