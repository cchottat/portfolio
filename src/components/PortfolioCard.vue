<script setup>
defineProps({
  title: String,
  category: String,
  description: String,
  image: String,
  tags: Array,
  color: String
})
</script>

<template>
  <div class="group relative h-full">
    <div class="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
    
    <div :class="`relative h-full bg-white border-4 border-black rounded-2xl overflow-hidden flex flex-col transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1`">
      
      <div class="h-48 overflow-hidden border-b-4 border-black relative">
        <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute top-0 left-0 bg-black text-white text-xs font-bold px-3 py-1 uppercase rounded-br-lg border-b-2 border-r-2 border-white">
          {{ category }}
        </div>
      </div>

      <div class="p-6 flex flex-col flex-grow" :style="{ backgroundColor: color }">
        <h3 class="text-2xl font-black uppercase mb-2 leading-none">{{ title }}</h3>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="tag in tags" :key="tag" class="px-2 py-0.5 bg-white border-2 border-black text-xs font-bold rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            #{{ tag }}
          </span>
        </div>

        <p class="text-sm font-medium leading-relaxed mb-6 flex-grow border-t-2 border-black border-dashed pt-2">
          {{ description }}
        </p>
        
        <button class="w-full bg-black text-white font-bold py-3 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
          Voir le projet
        </button>
      </div>
    </div>
  </div>
</template>