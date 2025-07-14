<script setup>
defineProps({ title: String, subtitle: String });
</script>
<template>
  <div class="relative mb-16 font-heading">
    <div class="absolute -top-2 left-0 h-1.5 w-24 md:w-32 bg-p3-gold"></div>

    <div
      class="inline-block bg-p3-blue-base py-2 pl-4 pr-12 md:py-3 md:pl-6 md:pr-16"
      style="clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);"
    >
      <h2 class="text-4xl md:text-5xl font-bold text-p3-white uppercase">{{ title }}</h2>
    </div>

    <div
      v-if="subtitle"
      class="inline-block bg-p3-gold py-2 px-4 md:px-6 mt-2"
      style="clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);"
    >
      <p class="text-md md:text-lg text-p3-blue-dark font-semibold tracking-wider whitespace-nowrap">{{ subtitle }}</p>
    </div>

  </div>
</template>
