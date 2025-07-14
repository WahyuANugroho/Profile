<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
import { skills as localSkills } from '../data.js';

const skills = ref([]);
const isLoading = ref(true);
const error = ref(null);

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

onMounted(async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(`${API_URL}/skills`);
    skills.value = response.data;
  } catch (err) {
    error.value = err.message || 'Failed to fetch skills from backend.';
    skills.value = localSkills;
  } finally {
    isLoading.value = false;
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
      <div v-if="isLoading" class="text-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-p3-gold mx-auto"></div>
        <p class="text-p3-gray mt-2">Loading skills...</p>
      </div>
      <div v-else-if="error && skills.length === 0" class="text-center py-8">
        <p class="text-red-400">Error loading skills: {{ error }}</p>
      </div>
      <div v-else-if="skills.length === 0" class="text-center py-8">
        <p class="text-p3-gray">No skills found.</p>
      </div>
      <div v-else class="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        <div v-for="skill in skills" :key="skill.id || skill.name" class="skill-card group">
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
