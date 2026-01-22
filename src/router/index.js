import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView },
    { path: '/about', name: 'about', component: AboutView },
  ],
  // 👇 C'est cette partie qui gère le scroll vers l'ancre
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // Pour ne pas être caché par la navbar
      }
    }
    return { top: 0 }
  }
})

export default router