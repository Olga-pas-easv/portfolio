import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CvView from '../views/CvView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/om-mig',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvView,
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router