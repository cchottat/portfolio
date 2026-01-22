<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-[#fffdf5] font-sans text-gray-900">
    <NavBar />
    
    <RouterView />
    
    <footer class="mt-32 py-12 border-t-4 border-black bg-white text-center font-['Space_Grotesk']">
      <p class="font-bold">© 2026 Clara Hottat • Design & Code</p>
      <div class="mt-4 flex justify-center gap-4">
        <a href="#" class="hover:text-purple-600 font-bold">LinkedIn</a>
        <a href="#" class="hover:text-purple-600 font-bold">Behance</a>
      </div>
    </footer>
  </div>
</template>