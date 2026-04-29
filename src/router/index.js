import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import TeamPage from '../pages/TeamPage.vue'
import ContactPage from '../pages/ContactPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/services', component: ServicesPage },
    { path: '/team', component: TeamPage },
    { path: '/contact', component: ContactPage }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})