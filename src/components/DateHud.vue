<script setup>
import { ref, onMounted } from 'vue';

const date = ref('');
const day = ref('');
const month = ref('');

onMounted(() => {
  const now = new Date();
  day.value = now.toLocaleDateString('id-ID', { weekday: 'long' }).toUpperCase();
  date.value = now.toLocaleDateString('en-GB', { day: '2-digit' });
  month.value = now.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
});
</script>

<template>
  <div class="font-heading text-p3-white flex items-center space-x-1 md:space-x-2">
    <div class="w-8 h-8 md:w-10 md:h-10 bg-p3-blue-base flex items-center justify-center" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6 text-p3-gold" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.891 0 3.686-.502 5.25-1.386A8.995 8.995 0 0 1 13 11c0-4.962 4.037-9 9-9 .239 0 .473.012.708.034A9.96 9.96 0 0 0 12 2z"></path>
      </svg>
    </div>
    <div class="bg-p3-blue-base/80 backdrop-blur-sm" style="clip-path: polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%);">
      <div class="px-3 py-1 md:px-4 text-right">
        <div class="text-xs md:text-sm leading-none text-p3-gold">{{ day }}</div>
        <div class="text-2xl md:text-3xl font-bold leading-tight">
          {{ date }} <span class="text-lg md:text-xl text-p3-gray">{{ month }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
