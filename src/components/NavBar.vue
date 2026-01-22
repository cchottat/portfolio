<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Mes Projets', path: '/portfolio' },
  { name: 'Qui suis-je ?', path: '/about' },
]
</script>

<template>
  <nav class="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm py-4 border-b-2 border-black">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      
      <RouterLink to="/" class="text-3xl font-retro uppercase text-black hover:text-pop-raspberry transition-colors">
        Clara <span class="text-pop-raspberry"></span>Hottat
      </RouterLink>

      <div class="hidden md:flex items-center gap-8 font-body font-bold text-lg uppercase tracking-wide">
        <RouterLink 
          v-for="link in links" 
          :key="link.name" 
          :to="link.path"
          active-class="text-pop-purple decoration-wavy underline decoration-2 underline-offset-4"
          class="hover:text-pop-orange transition-all"
        >
          {{ link.name }}
        </RouterLink>
        
        <a href="mailto:tonemail@gmail.com" class="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-pop-raspberry hover:scale-105 transition-all border-2 border-transparent hover:border-black">
          Me Contacter
        </a>
      </div>
    </div>
  </nav>
</template>