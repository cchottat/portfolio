import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // On importe le routeur qu'on va créer

createApp(App).use(router).mount('#app')