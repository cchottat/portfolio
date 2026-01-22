<script setup>
import imgProfil from '../assets/me.webp' 

const tools = ['Illustrator', 'Photoshop', 'Indesign', 'Figma', 'Vue.js', 'Tailwind']
</script>

<template>
  <div class="min-h-screen bg-cream overflow-hidden">
    
    <div class="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      <div class="relative">
         <div class="absolute inset-0 bg-pop-orange transform translate-x-3 translate-y-3 border-2 border-black rounded-2xl"></div>
         <div class="relative border-2 border-black bg-white rounded-2xl overflow-hidden shadow-sm">
            <img :src="imgProfil" class="w-full h-full object-cover">
         </div>
      </div>

      <div>
        <h1 class="font-retro text-7xl mb-6 leading-none">
          Holà !<br>Moi c'est <span class="text-pop-raspberry">Clara</span> 👋
        </h1>
        
        <div class="font-body text-lg space-y-6 text-gray-900 leading-relaxed mb-10 border-l-4 border-pop-orange pl-6">
          <p>
            Officiellement ? Je suis étudiante en Webdesign UI/UX. <br>
            Officieusement ? La princesse aux petits pois.
          </p>
          <p>
            Je ne suis pas une machine à coder ennuyeuse. Je suis remplie d'humour, d'énergie et de créativité. 
            Étudiante en Webdesign UI/UX à l’IFOSUP de Wavre, je m’intéresse particulièrement à la création d’identités visuelles et d’interfaces centrées sur l’utilisateur.
            Curieuse, créative et à l’écoute, j’aime comprendre les besoins d’un client pour les traduire en visuels cohérents, colorés et fonctionnels.
          </p>
        </div>

        <div class="mb-10">
          <h3 class="font-retro text-2xl mb-4">Ma Boîte à Outils :</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="tool in tools" :key="tool" class="bg-white border border-black px-4 py-1 font-bold shadow-[2px_2px_0px_0px_#000] cursor-default">
              {{ tool }}
            </span>
          </div>
        </div>

        <a href="mailto:hottatclara@gmail.com" class="inline-block bg-black text-white font-retro text-2xl px-10 py-4 border-2 border-black shadow-[6px_6px_0px_0px_#A855F7] hover:bg-white hover:text-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            On bosse ensemble ? 🚀
        </a>

      </div>

    </div>
  </div>
</template>