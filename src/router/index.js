import { createRouter, createWebHistory } from 'vue-router'

// Components
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUsView.vue'
import Service from '../views/ServiceView.vue'
import Institution from '../views/InstitutionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/institution',
      name: 'insititution',
      components: {default: Institution, Navbar, Footer}
    },
    {
      path: '/service',
      name: 'service',
      components: {default: Service, Navbar, Footer}
    },
    {
      path: '/about-us',
      name: 'about-us',
      components: {default: AboutUs, Navbar, Footer}
    },
    {
      path: '/',
      name: 'home',
      components: {default: HomeView, Navbar, Footer}
    },
  ]
})

export default router
