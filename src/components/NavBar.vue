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
  // Bloque le scroll quand le menu est ouvert
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <nav class="sticky top-0 z-40 bg-white border-b-2 border-black py-4">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      
      <RouterLink to="/" class="text-2xl md:text-3xl font-retro uppercase text-black hover:text-pop-raspberry transition-colors z-40 relative">
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

      <button @click="toggleMenu" class="md:hidden z-40 focus:outline-none">
        <div class="space-y-1.5">
          <span class="block w-8 h-1 bg-black rounded-full"></span>
          <span class="block w-8 h-1 bg-black rounded-full"></span>
          <span class="block w-8 h-1 bg-black rounded-full"></span>
        </div>
      </button>

      <div 
        v-if="isMenuOpen"
        class="fixed inset-0 z-[999] flex flex-col animate-fade-in md:hidden"
        style="background-color: #FDFBF7;" 
      >
        <button 
          @click="closeMenu" 
          class="absolute top-6 right-6 p-2 bg-white rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex-grow flex flex-col items-center justify-center gap-10">
            <RouterLink 
            v-for="link in links" 
            :key="link.name" 
            :to="link.path"
            @click="closeMenu"
            active-class="text-pop-purple decoration-wavy underline decoration-4"
            class="font-retro text-5xl uppercase text-black hover:text-pop-orange transition-all"
            >
            {{ link.name }}
            </RouterLink>

            <a href="mailto:hottatclara@gmail.com" class="mt-8 bg-black text-white px-10 py-5 font-body font-bold text-2xl rounded-full shadow-[4px_4px_0px_0px_#A855F7] border-2 border-black active:translate-y-1 active:shadow-none">
              Me Contacter
            </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>