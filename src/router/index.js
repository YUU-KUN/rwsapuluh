import { createRouter, createWebHistory } from 'vue-router'

// Components
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import History from '../views/HistoryView.vue'
import Service from '../views/ServiceView.vue'
import Contact from '../views/ContactView.vue'
import Institution from '../views/InstitutionView.vue'
import Activity from '../views/ActivityView.vue'
import ActivityDetail from '../views/ActivityDetailView.vue'
import Achievement from '../views/AchievementView.vue'
import AchievementDetail from '../views/AchievementDetailView.vue'
import OrganizationStructure from '../views/OrganizationStructureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/institution/:institution_id',
      name: 'institution',
      components: {default: Institution, Navbar, Footer}
    },
    {
      path: '/contact',
      name: 'contact',
      components: {default: Contact, Navbar, Footer}
    },
    {
      path: '/organization-structure',
      name: 'organization-structure',
      components: {default: OrganizationStructure, Navbar, Footer}
    },
    {
      path: '/service',
      name: 'service',
      components: {default: Service, Navbar, Footer}
    },
    {
      path: '/achievement/:achievement_id',
      name: 'achievement-detail',
      components: {default: AchievementDetail, Navbar, Footer}
    },
    {
      path: '/achievement',
      name: 'achievement',
      components: {default: Achievement, Navbar, Footer}
    },
    {
      path: '/activity/:activity_id',
      name: 'activity-detail',
      components: {default: ActivityDetail, Navbar, Footer}
    },
    {
      path: '/activity',
      name: 'activity',
      components: {default: Activity, Navbar, Footer}
    },
    {
      path: '/history',
      name: 'history',
      components: {default: History, Navbar, Footer}
    },
    {
      path: '/',
      name: 'home',
      components: {default: HomeView, Navbar, Footer}
    },
  ]
})

router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
    
})

export default router
