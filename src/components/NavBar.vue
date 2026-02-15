<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Mes Projets', path: '/portfolio' },
  { name: 'Qui suis-je ?', path: '/about' },
]

// Variable pour savoir si le menu mobile est ouvert ou fermé
const isMenuOpen = ref(false)

// Fonction pour fermer le menu quand on clique sur un lien
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-cream/95 backdrop-blur-md py-4 border-b-2 border-black">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      
      <RouterLink to="/" class="text-3xl font-retro uppercase text-black hover:text-pop-raspberry transition-colors z-50 relative" @click="closeMenu">
        Clara<span class="text-pop-raspberry">.</span>H
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

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden z-50 focus:outline-none">
        <div class="space-y-2">
          <span :class="{'rotate-45 translate-y-2.5': isMenuOpen}" class="block w-8 h-1 bg-black transition-transform duration-300"></span>
          <span :class="{'opacity-0': isMenuOpen}" class="block w-8 h-1 bg-black transition-opacity duration-300"></span>
          <span :class="{'-rotate-45 -translate-y-2.5': isMenuOpen}" class="block w-8 h-1 bg-black transition-transform duration-300"></span>
        </div>
      </button>

      <div 
        :class="{'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen}"
        class="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden"
      >
        <RouterLink 
          v-for="link in links" 
          :key="link.name" 
          :to="link.path"
          @click="closeMenu"
          active-class="text-pop-purple decoration-wavy underline decoration-2 underline-offset-4"
          class="font-retro text-4xl uppercase text-black hover:text-pop-orange transition-all"
        >
          {{ link.name }}
        </RouterLink>

        <a href="mailto:hottatclara@gmail.com" class="mt-8 bg-black text-white px-8 py-4 font-body font-bold text-xl rounded-full shadow-[4px_4px_0px_0px_rgba(190,18,60,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
          Me Contacter
        </a>
      </div>

    </div>
  </nav>
</template>