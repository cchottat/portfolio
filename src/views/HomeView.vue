<script setup>
import { RouterLink } from 'vue-router'
import PortfolioCard from '../components/PortfolioCard.vue'


import imgProfil from '../assets/me.webp'
import imgImproSite from '../assets/improland.webp' 
import imgWavreBrand from '../assets/brandboard-la-wavrienne.webp' 
import imgAcrLogo from '../assets/logoacr.webp' 
import imgTerroirFlyer from '../assets/beaujolais.webp' 
import imgTriAffiche from '../assets/poubellepmc.webp' 

const projects = [
  { 
    id: 'impro', 
    title: "Imprototype", 
    category: "Web / UI", 
    description: "Site e-commerce & Design System d'une entreprise fictive sur l'improvisation dans le cadre de mon cours CMS2 ", 
    image: imgImproSite, 
    tags: ['UI', 'Web'],
    color: '#E0E7FF' // Indigo très clair
  },
  { 
    id: 'wavre', 
    title: "La Wavrienne", 
    category: "Branding", 
    description: "Identité visuelle complète pour une micro-brasserie locale dans le cadre de l'examen du cours DESIGN UI", 
    image: imgWavreBrand, 
    tags: ['Branding', 'Print'],
    color: '#FEF3C7' // Jaune très clair
  },
  { 
    id: 'chine', 
    title: "Atelier Chine", 
    category: "Logo", 
    description: "Refonte de logo pour une restauratrice de meubles dans le cadre d'une évalution pour mon cours de DESIGN UI", 
    image: imgAcrLogo, 
    tags: ['Logo', 'Vector'],
    color: '#F3E8FF' // Mauve très clair
  },
  { 
    id: 'terroir', 
    title: "Terroir & Gourmandises", 
    category: "Print", 
    description: "Flyers promotionnels et affiches évenementielles pour une entreprise locale.", 
    image: imgTerroirFlyer, 
    tags: ['Mise en page', 'Communication'],
    color: '#FFEDD5' // Orange très clair
  },
  { 
    id: 'tri', 
    title: "Héros du Tri", 
    category: "Affiche", 
    description: "Campagne de sensibilisation scolaire au tri.", 
    image: imgTriAffiche, 
    tags: ['Illustration','Originalité'],
    color: '#D1FAE5' // Vert très clair
  }
]
</script>

<template>
  <div class="pb-20">
    
    <section class="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div class="order-2 md:order-1 flex flex-col items-start">
        
        <div class="inline-block bg-black text-white px-4 py-1 font-body font-bold uppercase tracking-widest mb-6 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
          Portfolio 2026
        </div>
        
        <h1 class="font-retro text-7xl md:text-9xl mb-4 leading-[0.9] uppercase text-gray-900">
          Clara<br>
          <span class="text-pop-raspberry">Hottat</span>
        </h1>
        
        <h2 class="text-2xl md:text-3xl font-body font-bold border-l-4 border-black pl-6 mb-8 text-gray-700">
          Étudiante en <span class="bg-yellow-300 px-2 inline-block transform -skew-x-3">Webdesign UI/UX</span>
        </h2>
        
        <p class="font-body text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
          Curieuse et créative, je traduis vos besoins en visuels cohérents, colorés et fonctionnels. Bienvenue dans mon univers ! 🎨✨
        </p>
        
        <div class="flex gap-4">
          <RouterLink to="/portfolio" class="bg-black text-white text-lg font-body font-bold px-8 py-4 shadow-[8px_8px_0px_0px_#A855F7] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase border-2 border-black">
            Voir mes travaux
          </RouterLink>
        </div>
      </div>

      <div class="order-1 md:order-2 flex justify-center md:justify-end relative">
        <div class="relative w-72 h-72 md:w-96 md:h-96">
           <div class="absolute inset-0 bg-pop-orange rounded-full translate-x-4 translate-y-4 border-4 border-black"></div>
           
           <div class="absolute inset-0 rounded-full border-4 border-black overflow-hidden bg-white shadow-xl z-10 hover:scale-105 transition-transform duration-500">
             <img :src="imgProfil" class="w-full h-full object-cover">
           </div>
           
           <div class="absolute -bottom-4 -left-4 bg-white border-2 border-black px-4 py-2 font-retro text-xl rotate-6 z-20 shadow-[4px_4px_0px_0px_#000]">
             Dispo pour un stage ! ✌️
           </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20">
      
      <div class="mb-20 text-center px-2"> <h2 class="font-retro text-3xl md:text-6xl uppercase inline-block leading-snug">
          Mes 
          <span class="bg-orange-500 text-white px-2 md:px-4 py-1 mx-1 md:mx-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform -skew-x-3 text-3xl md:text-6xl">
            Réalisations
          </span>
        </h2>
        <p class="mt-6 font-body text-lg md:text-xl text-gray-500">Une sélection de mes projets favoris</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <RouterLink 
          v-for="project in projects" 
          :key="project.id"
          :to="`/portfolio#${project.id}`"
          class="block h-full"
        >
          <PortfolioCard v-bind="project" />
        </RouterLink>
      </div>
      
      <div class="text-center mt-16">
         <RouterLink to="/portfolio" class="inline-block font-body font-bold text-xl border-b-4 border-pop-purple hover:text-pop-purple hover:border-black transition-colors pb-1">
            Voir tous les détails dans le Portfolio ➔
         </RouterLink>
      </div>

    </section>

  </div>
</template>