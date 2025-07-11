<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya komponen ini
const skills = ref([]);
const API_URL = import.meta.env.PROD ? '/api/skills' : 'http://localhost:3000/api/projects';
onMounted(async () => {
try {
skills.value = (await axios.get(API_URL)).data;
} catch (error) {
console.error('Gagal mengambil data skill:', error);
}
});
</script>

<template>
  <section id="proyek" class="relative min-h-screen bg-p3-blue-base p-4 md:p-8 flex flex-col justify-center overflow-hidden">
    <div class="absolute -left-12 top-10 text-[10rem] md:text-[14rem] font-black text-p3-blue-dark/40 select-none z-0 leading-none">
      WORKS
    </div>
    <div class="container mx-auto relative">
      <SectionTitle title="Proyek" subtitle="Karya Pilihan" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"

          class="block relative group transform hover:-translate-y-2 transition-transform duration-300 h-[400px] md:h-[420px]"
        >
          <div class="absolute top-0 left-0 w-full h-56 md:h-60 overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);">

            <img
              :src="getImageUrl(project.image)"
              :alt="'Gambar ' + project.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 bg-p3-blue-dark"
            >
          </div>

          <div class="absolute bottom-0 left-0 w-[95%] bg-p3-blue-dark p-4 md:p-6 z-10" style="clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);">
            <h3 class="text-xl md:text-2xl font-heading font-bold text-p3-white mb-2 mt-4 transition-colors group-hover:text-p3-gold">{{ project.title }}</h3>
            <p class="text-p3-gray text-sm md:text-base mb-3 h-10 md:h-12 overflow-hidden">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span v-for="tech in project.tech" :key="tech" class="bg-p3-blue-light/10 text-p3-blue-light text-xs font-mono py-1 px-3 rounded-full">
                {{ tech }}
              </span>
            </div>
            <span class="text-p3-gold font-bold group-hover:underline self-start mt-auto">Lihat Detail &rarr;</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
