<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import DateHud from './components/DateHud.vue';

const isLoading = ref(true);
const isMobileMenuOpen = ref(false);

onMounted(() => {
  // Show loading screen for at least 2.5 seconds
  setTimeout(() => { 
    isLoading.value = false; 
  }, 2500);
});
</script>

<template>
  <div class="bg-p3-blue-dark font-body text-p3-white">
    <Transition name="fade"><LoadingScreen v-if="isLoading" /></Transition>

    <div v-if="!isLoading">

      <div class="fixed top-0 left-0 w-48 h-48 bg-p3-blue-light/5 -z-10 animate-float-1" style="clip-path: polygon(0 0, 100% 0, 0 100%);"></div>
      <div class="fixed bottom-0 right-0 w-64 h-64 bg-p3-gold/5 -z-10 animate-float-2" style="clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>

      <div class="md:hidden fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="p-2 bg-p3-blue-base/80 rounded-md backdrop-blur-sm">
          <svg class="w-6 h-6 text-p3-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <DateHud />
      </div>

      <div class="hidden md:block fixed top-4 right-4 z-30">
        <DateHud />
      </div>

      <Navigation :is-mobile-open="isMobileMenuOpen" @close-mobile-menu="isMobileMenuOpen = false" />

      <div class="relative md:ml-64">
        <RouterView />
      </div>
    </div>
  </div>
</template>
