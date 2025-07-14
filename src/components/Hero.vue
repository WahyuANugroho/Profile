<script setup>
import { ref, onMounted } from 'vue';
import profileImage from '@/assets/profile.webp';

const nameText = ref('');
const isTyping = ref(true);
const fullName = "Wahyu Adi Nugroho";
const typingSpeed = 60;
const typeName = () => { let i = 0; const interval = setInterval(() => { if (i < fullName.length) { nameText.value += fullName.charAt(i); i++; } else { clearInterval(interval); } }, typingSpeed); };
onMounted(() => { setTimeout(() => { typeName(); }, 200); });
</script>

<template>
  <section id="profil" class="relative min-h-screen bg-p3-blue-dark flex items-center overflow-hidden p-4 sm:p-8">
    <div class="absolute -left-8 bottom-4 text-[8rem] md:text-[12rem] font-black text-p3-white/5 select-none z-0 transform -rotate-12 leading-none">
      PROFILE
    </div>
    <div class="absolute top-0 left-0 w-full h-full bg-p3-blue-light/10" style="clip-path: polygon(100% 0, 0% 100%, 20% 100%, 100% 20%);"></div>
    <div class="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')]"></div>
    <div
      class="hidden md:block absolute bottom-0 right-0 w-1/2 h-full max-h-[800px] opacity-0 animate-slide-in-right"
      style="animation-delay: 1400ms;"
    >
      <div class="relative w-full h-full" style="clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);">
        <img
          :src="profileImage"
          alt="Foto Profil"
          class="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom"
          style="filter: grayscale(1) contrast(1.2); mix-blend-mode: screen;"
        >
      </div>
    </div>
    <div
      class="md:hidden absolute bottom-0 left-0 w-full h-3/4 z-0 opacity-0 animate-fade-in-up"
      style="animation-delay: 500ms;"
    >
      <img
        :src="profileImage"
        alt="Foto Profil"
        loading="lazy"
        class="w-full h-full object-cover object-top"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-p3-blue-dark via-p3-blue-dark/60 to-transparent"></div>
    </div>

    <div class="relative flex flex-col justify-center min-h-screen w-full md:pl-12">
      <div class="absolute top-8 left-0 md:left-12 transform -skew-x-12">
        <div class="bg-p3-gold text-p3-blue-dark px-4 py-1 font-bold text-xl">Lv 99</div>
        <div class="bg-p3-blue-dark text-p3-white px-4 py-1 font-heading text-lg">ShiroMity</div>
      </div>
      <div class="mt-auto md:mt-0 mb-20 md:mb-0">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-p3-white my-1 min-h-[68px] md:min-h-[88px]">
          {{ nameText }}
          <span v-if="isTyping" class="w-1 h-12 md:h-20 bg-p3-white inline-block align-middle animate-blink-caret"></span>
        </h1>
        <div class="w-full h-px bg-p3-gold my-6 md:my-8 md:w-2/3"></div>
        <p class="font-body max-w-lg text-base md:text-lg animate-text-focus-in opacity-0" style="animation-delay: 500ms;">
          Mahasiswa Informatika dengan semangat pada android development dan UI/UX, menciptakan pengalaman digital yang intuitif dan modern.
        </p>
      </div>
    </div>
  </section>
</template>
