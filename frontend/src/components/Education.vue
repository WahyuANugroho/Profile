<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
  onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan" class="bg-white py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative mt-12">
        <div
          class="absolute left-1/2 h-full -translate-x-1/2 transform border-r-2 border-gray-200"
        ></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="relative mb-8 flex w-full items-center justify-between"
        >
          <div v-if="index % 2 === 0" class="flex w-full">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
            <div class="z-10 flex w-1/2 justify-start pl-[calc(0.5rem-2px)]">
              <div class="h-4 w-4 rounded-full bg-blue-600"></div>
            </div>
          </div>

          <div v-else class="flex w-full">
            <div class="z-10 flex w-1/2 justify-end pr-[calc(0.5rem-2px)]">
              <div class="h-4 w-4 rounded-full bg-blue-600"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
