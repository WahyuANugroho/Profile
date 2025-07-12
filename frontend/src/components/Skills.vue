<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
// PERBAIKAN: Impor data langsung dari file lokal
import { skills as localSkills } from '../data.js';

const skills = ref(localSkills);

// URL API untuk produksi (Vercel) dan pengembangan (lokal)
const API_URL = import.meta.env.PROD ? '/api/skills' : 'http://localhost:3001/api/skills';

onMounted(async () => {
  try {
    // RENCANA A: Coba ambil data dari API
    console.log('Mencoba mengambil data skills dari API...');
    const response = await axios.get(API_URL);
    // Transform API data to match local format
    skills.value = response.data.map(skill => ({
      name: skill.name,
      level: skill.proficiency === 5 ? 'Mahir' :
             skill.proficiency === 4 ? 'Mahir' :
             skill.proficiency === 3 ? 'Menengah' :
             skill.proficiency === 2 ? 'Pemula' : 'Pemula'
    }));
    console.log('Berhasil mengambil data skills dari API.');
  } catch (error) {
    // RENCANA B: Jika API gagal, gunakan data lokal
    console.warn('Gagal mengambil data dari API. Beralih ke data lokal.', error);
    skills.value = localSkills;
  }
});
</script>
<template>
  <section id="skill" class="relative min-h-screen bg-p3-blue-dark p-4 md:p-8 flex flex-col justify-center overflow-hidden">
    <div class="absolute top-1/2 -right-20 text-[8rem] md:text-[10rem] font-black text-p3-white/5 select-none z-0 transform -translate-y-1/2 rotate-90 leading-none">
      ABILITY
    </div>
    <div class="container mx-auto relative">
      <SectionTitle title="Skills" subtitle="Teknologi yang Dikuasai" />
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        <div v-for="skill in skills" :key="skill.name" class="skill-card group">
          <div class="slash-bg"></div>
          <h3 class="text-base md:text-xl font-heading text-p3-white relative z-10 transition-colors group-hover:text-p3-white">{{ skill.name }}</h3>
          <p class="text-sm md:text-base font-body text-p3-gold relative z-10 transition-colors group-hover:text-p3-white">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.skill-card { @apply bg-p3-blue-base/80 p-4 border-l-4 border-p3-blue-light flex flex-col md:flex-row md:items-center md:justify-between relative overflow-hidden transition-all duration-300; clip-path: polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%); }
.skill-card:hover { @apply bg-p3-blue-base border-p3-gold -translate-y-1; }
.slash-bg { @apply absolute top-0 left-0 w-full h-full bg-p3-gold transition-transform duration-300 ease-in-out; transform: translateX(-101%); clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%); }
.skill-card:hover .slash-bg { transform: translateX(0); }
</style>
