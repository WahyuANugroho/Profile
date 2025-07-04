<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const skills = ref([]);
  onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data; } catch (error) { console.error(error);
    }
});
</script>

<template>
  <section id="skill" class="bg-gray-50 py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">

        <div
          v-for="skill in skills"
          :key="skill.name"
          class="
            transform rounded-lg bg-white p-6 text-center shadow-lg
            transition-transform duration-300 hover:-translate-y-2
          "
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="mt-2 text-gray-500">{{ skill.level }}</p>
        </div>

      </div>
    </div>
  </section>
</template>
