<script setup>
import imgTerroirBasket from '../assets/basketgift.webp' 
import imgImproBrand from '../assets/bbimpro.webp' 
import imgTerroirFlyer from '../assets/beaujolais.webp' 
import imgWavreBrand from '../assets/brandboard-la-wavrienne.webp' 
import imgAcrCard from '../assets/cartevisiteacr.webp' 
import imgWavreCard1 from '../assets/cartevisitewavrienne.webp' 
import imgWavreCard2 from '../assets/cartevisitewavrienne2.webp' 
import imgImproSite from '../assets/improland.webp' 
import imgAcrLogo from '../assets/logoacr.webp' 
import imgTriAffiche1 from '../assets/poubelle.webp' 
import imgTriAffiche2 from '../assets/poubellepmc.webp' 
import imgTarifMiel from '../assets/tarifmiel.webp'       
import imgTarifConfiture from '../assets/tarifconfiture.webp' 
import imgHalloween from '../assets/halloween.webp'       

const fullProjects = [
  {
    id: 'impro',
    title: "Imprototype",
    subtitle: "Refonte Site E-commerce & Identité",
    description: "Le défi était crée un commerce fictif. Ayant comme passion l'improvisation théâtrale, j'ai décidé de lier l'utile à l'agréable. J'ai créé un design system basé sur l'énergie, la créativité et le mouvement.",
    mainImage: imgImproSite, 
    gallery: [imgImproBrand], 
    bg: 'bg-indigo-50',
    accent: 'text-indigo-600',
    tags: ['UI/UX', 'Web', 'E-Commerce']
  },
  {
    id: 'wavre',
    title: "La Wavrienne",
    subtitle: "Branding & Packaging Micro-Brasserie",
    description: "Création d'une identité visuelle pour une entreprise fictive dans le cadre du cours Design UI. L'entreprise imposée était une micro-brasserie située à Wavre dans un ancien moulin. Préférences pour le logo : image moderne, jeune et dynamique, facilement déclinables. Mots-clés : bière, artisanal, passion, authentique",
    mainImage: imgWavreBrand,
    gallery: [imgWavreCard1, imgWavreCard2], 
    bg: 'bg-yellow-50',
    accent: 'text-yellow-600',
    tags: ['Branding', 'Logo', 'Print']
  },
  {
    id: 'chine',
    title: "Atelier Chine & Rénove",
    subtitle: "Logotype & Papeterie",
    description: "Création d'une identité visuelle pour une restauratrice de meubles anciens. Le logo mélange typographie vintage et modernité. Contexte : Création d'un logo pour une indépendante qui récupère des meubles pour les restaurer. La cliente voulait une image qui se démarque des autres logos dans ce milieu",
    mainImage: imgAcrLogo,
    gallery: [imgAcrCard],
    bg: 'bg-purple-50',
    accent: 'text-purple-600',
    tags: ['Logo', 'Vector', 'Carte de visite']
  },
  {
    id: 'terroir',
    title: "Terroir & Gourmandises",
    subtitle: "Communication Print & Flyers",
    description: "Réalisation de flyers dans le cadre d’une collaboration avec une entreprise, afin de soutenir la communication visuelle autour de différents produits et événements. Les supports devaient intégrer des tarifs tout en restant clairs, lisibles et attractifs, pour un usage direct sur le terrain (distribution, affichage, vente).",
    mainImage: imgTerroirFlyer,
    // 👇 J'ai ajouté tes 3 nouvelles affiches ici dans la galerie
    gallery: [imgTerroirBasket, imgTarifMiel, imgTarifConfiture, imgHalloween],
    bg: 'bg-orange-50',
    accent: 'text-orange-600',
    tags: ['Mise en page', 'Publicité', 'Print']
  },
  {
    id: 'tri',
    title: "Héros du Tri",
    subtitle: "Affiche de Sensibilisation Scolaire",
    description: "Contexte : Création d’une affiche de sensibilisation réalisée dans un cadre scolaire, destinée à encourager le tri des déchets au sein de l’établissement. Objectifs: Sensibiliser au tri des déchets - Rendre l’information compréhensible rapidement - Créer un visuel pédagogique et efficace ",
    mainImage: imgTriAffiche2, 
    gallery: [imgTriAffiche1],
    bg: 'bg-green-50',
    accent: 'text-green-600',
    tags: ['Illustration', 'Poster', 'Éducation']
  }
]
</script>

<template>
  <div class="bg-cream min-h-screen pb-20">
    
    <div class="py-24 text-center px-6">
       <h1 class="font-retro text-6xl md:text-7xl uppercase mb-6 inline-block leading-tight">
         Mes 
         <span class="bg-purple-500 text-white px-4 py-2 mx-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform -skew-x-3">
           Réalisations
         </span>
       </h1>
       <p class="font-body text-xl max-w-2xl mx-auto text-gray-600 mt-6">
         Plongez dans les détails. Chaque projet a sa propre histoire, sa propre palette et ses propres défis. 🎨
       </p>
    </div>

    <div class="flex flex-col gap-0">
      
      <section 
        v-for="(project, index) in fullProjects" 
        :key="project.id" 
        :id="project.id"
        class="py-24 border-t-2 border-black/10 transition-colors duration-500"
        :class="project.bg"
      >
        <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
           
           <div class="w-full lg:w-4/12 lg:sticky lg:top-32" :class="{'lg:order-2': index % 2 !== 0}">
             <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-white border border-black rounded-full text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {{ tag }}
                </span>
             </div>
             <h2 class="font-retro text-5xl uppercase mb-3 leading-[0.9] drop-shadow-sm">{{ project.title }}</h2>
             <p class="font-body font-bold text-xl mb-8 italic" :class="project.accent">{{ project.subtitle }}</p>
             <div class="relative pl-6 border-l-4 border-black">
                <p class="font-body text-lg leading-relaxed text-gray-800 text-justify">
                  {{ project.description }}
                </p>
             </div>
           </div>

           <div class="w-full lg:w-8/12 flex flex-col gap-8" :class="{'lg:order-1': index % 2 !== 0}">
              
              <div class="group relative rounded-xl border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img :src="project.mainImage" class="w-auto mx-auto max-h-[70vh] object-contain rounded-lg">
                <div class="absolute top-4 left-4 bg-black text-white px-3 py-1 font-bold text-xs uppercase rounded-md shadow-md z-10">
                   Vue Principale
                </div>
              </div>

              <div v-if="project.gallery && project.gallery.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div 
                    v-for="(img, idx) in project.gallery" 
                    :key="idx" 
                    class="relative rounded-xl border-4 border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
                    :class="{'md:col-span-2': project.gallery.length === 1}" 
                 >
                    <img :src="img" class="w-auto mx-auto max-h-[500px] object-contain rounded-lg">
                 </div>
              </div>

           </div>
        </div>
      </section>

    </div>

  </div>
</template>