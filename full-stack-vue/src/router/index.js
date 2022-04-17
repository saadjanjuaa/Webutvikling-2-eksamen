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
