<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
// Fallback data
import { educationHistory as localEducationHistory } from '../data.js';

const educationHistory = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  isLoading.value = true;
  try {
    console.log('Fetching education data from backend...');
    const response = await axios.get('http://localhost:3001/api/education');
    educationHistory.value = response.data;
    console.log('Education data loaded from backend:', response.data);
  } catch (err) {
    console.warn('Backend not available, using local data:', err.message);
    error.value = err.message;
    // Fallback to local data
    educationHistory.value = localEducationHistory;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section id="pendidikan" class="relative min-h-screen bg-p3-blue-dark p-4 md:p-8 flex flex-col justify-center overflow-hidden">
    <div class="absolute -right-8 bottom-8 text-[9rem] md:text-[13rem] font-black text-p3-white/5 select-none z-0 leading-none">
      HISTORY
    </div>
    <div class="container mx-auto relative">
      <SectionTitle title="Pendidikan" subtitle="Riwayat Akademis" />
      <div class="relative max-w-3xl mx-auto pl-10 md:pl-16">
        <div class="absolute top-0 left-0 h-full w-1 bg-p3-blue-light/20"></div>
        <div class="space-y-12">
          <div v-if="isLoading" class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-p3-gold mx-auto"></div>
            <p class="text-p3-gray mt-2">Loading education history...</p>
          </div>
          <div v-else-if="error && educationHistory.length === 0" class="text-center py-8">
            <p class="text-red-400">Error loading education history: {{ error }}</p>
          </div>
          <div v-else-if="educationHistory.length === 0" class="text-center py-8">
            <p class="text-p3-gray">No education history found.</p>
          </div>
          <div v-else v-for="(edu, index) in educationHistory" :key="edu.id" class="relative group animate-fade-in-up opacity-0" :style="{ animationDelay: `${index * 200}ms` }">
            <div class="absolute top-1/2 -left-10 md:-left-16 h-0.5 w-10 md:w-16 bg-p3-blue-light/50 group-hover:bg-p3-gold transition-colors duration-300" aria-hidden="true"></div>
            <div class="absolute top-1/2 -left-10 md:-left-16 w-4 h-4 bg-p3-gold group-hover:bg-p3-white transition-colors duration-300"
                 style="transform: translate(-50%, -50%); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"
                 aria-hidden="true">
            </div>
            <div class="bg-p3-blue-base/50 p-6 relative overflow-hidden transition-all duration-300 transform group-hover:bg-p3-blue-base/90 group-hover:shadow-lg group-hover:-translate-y-1" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);">
              <div class="slash-bg"></div>
              <div class="relative z-10">
                <p class="font-heading font-semibold text-p3-gold text-base md:text-lg transition-colors duration-300 group-hover:text-p3-white">{{ edu.period }}</p>
                <h3 class="text-xl md:text-2xl font-heading font-bold text-p3-white transition-colors duration-300 group-hover:text-p3-white">{{ edu.institution }}</h3>
                <p class="font-body text-p3-gray transition-colors duration-300 group-hover:text-p3-white">{{ edu.major }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.slash-bg { @apply absolute top-0 left-0 w-full h-full bg-p3-gold transition-transform duration-300 ease-in-out -z-10; transform: translateX(-101%); clip-path: polygon(0 0, 25% 0, 10% 100%, 0% 100%); }
.group:hover .slash-bg { transform: translateX(0); }
.opacity-0 { opacity: 0; }
.animate-fade-in-up { animation-fill-mode: forwards; }
</style>
