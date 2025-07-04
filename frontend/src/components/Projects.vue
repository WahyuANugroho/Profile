<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const projects = ref([]);
  onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects'); projects.value =
    response.data; } catch (error) { console.error(error);

  }
});
</script>

<template>
  <section id="proyek" class="bg-white py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="mt-12 grid gap-12 md:grid-cols-2">

        <div
          v-for="project in projects"
          :key="project.title"
          class="overflow-hidden rounded-lg bg-gray-50 shadow-lg"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="h-56 w-full object-cover"
          />
          <div class="p-6">
            <h3 class="mb-2 text-2xl font-bold text-gray-800">
              {{ project.title }}
            </h3>
            <p class="mb-4 text-gray-600">
              {{ project.description }}
            </p>

            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="
                  mb-2 mr-2 inline-block rounded-full bg-blue-100
                  px-2.5 py-0.5 text-sm font-semibold text-blue-800
                "
              >
                {{ t }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-600 hover:underline"
            >
              Lihat Detail →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
