<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Mes Projets', path: '/portfolio' },
  { name: 'Qui suis-je ?', path: '/about' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Empêche le scroll quand le menu est ouvert
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-cream/95 backdrop-blur-md py-4 border-b-2 border-black">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      
      <RouterLink to="/" class="text-3xl font-retro uppercase text-black hover:text-pop-raspberry transition-colors relative z-50" @click="closeMenu">
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

      <button @click="toggleMenu" class="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none">
        <span :class="{'rotate-45 translate-y-2.5 bg-pop-raspberry': isMenuOpen, 'bg-black': !isMenuOpen}" class="block w-8 h-1 transition-all duration-300"></span>
        <span :class="{'opacity-0': isMenuOpen, 'bg-black': !isMenuOpen}" class="block w-8 h-1 transition-all duration-300"></span>
        <span :class="{'-rotate-45 -translate-y-2.5 bg-pop-raspberry': isMenuOpen, 'bg-black': !isMenuOpen}" class="block w-8 h-1 transition-all duration-300"></span>
      </button>

      <div 
        v-if="isMenuOpen"
        class="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-10 md:hidden animate-fade-in"
      >
        <div class="flex flex-col items-center gap-8">
            <RouterLink 
            v-for="link in links" 
            :key="link.name" 
            :to="link.path"
            @click="closeMenu"
            active-class="text-pop-purple decoration-wavy underline decoration-4"
            class="font-retro text-4xl uppercase text-black hover:text-pop-orange transition-all"
            >
            {{ link.name }}
            </RouterLink>
        </div>

        <a href="mailto:hottatclara@gmail.com" class="bg-black text-white px-8 py-4 font-body font-bold text-xl rounded-full shadow-[4px_4px_0px_0px_#A855F7] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all border-2 border-black">
          Me Contacter
        </a>
      </div>

    </div>
  </nav>
</template>

<style scoped>
/* Petite animation douce pour l'apparition du menu */
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>