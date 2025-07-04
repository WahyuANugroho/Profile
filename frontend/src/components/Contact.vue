<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="bg-gray-800 py-20 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />

      <p class="mb-8 text-xl text-gray-300">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <a
        href="mailto:emailanda@example.com"
        class="
          mb-12 inline-block rounded-lg bg-blue-600 px-6 py-3
          font-bold text-white transition-colors duration-300 hover:bg-blue-700
        "
      >
        Kirim Email
      </a>

      <div class="mb-8 flex justify-center space-x-6">
        <a
          href="#"
          target="_blank"
          class="text-gray-400 transition-colors duration-300 hover:text-white"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          class="text-gray-400 transition-colors duration-300 hover:text-white"
        >
          LinkedIn
        </a>
      </div>

      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }} Wahyu Adi Nugroho. Dibuat dengan ❤️
      </p>
    </div>
  </footer>
</template>
