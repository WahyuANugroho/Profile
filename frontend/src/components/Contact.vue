<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="relative min-h-screen bg-p3-blue-base p-4 md:p-8 flex flex-col justify-center items-start text-left overflow-hidden">
    <div class="container mx-auto relative">
      <div class="max-w-xl">
        <SectionTitle title="Kontak" subtitle="Mari Terhubung" />
        <p class="text-base md:text-xl text-p3-gray mb-8">Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya.</p>

        <a href="mailto:wahyuadinugroho@students.amikom.ac.id"
           class="inline-block bg-p3-gold text-p3-blue-dark font-bold py-3 px-8 md:py-4 md:px-10 text-base md:text-xl transition-all duration-300 transform -skew-x-12 hover:bg-p3-white hover:shadow-lg hover:shadow-p3-gold/20">
            Kirim Email
        </a>

        <div class="mt-12 flex justify-start space-x-6">
          <a href="https://github.com/WahyuANugroho" target="_blank" class="text-p3-gray hover:text-p3-white transition-colors duration-300" aria-label="GitHub">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.29c0 .316.19.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://wa.me/6283133006690" target="_blank" class="text-p3-gray hover:text-p3-white transition-colors duration-300" aria-label="WhatsApp">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.5 1.32 5.05L2 22l5.25-1.38c1.47.81 3.12 1.24 4.79 1.24h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM18.1 16.45c-.2-.1-.72-.35-1.54-1.12-.1-.1-.2-.24-.34-.24-.13 0-.28.1-.42.23-.28.28-.6.72-.74.86-.14.13-.28.17-.5.07-.22-.1-.94-.34-1.78-1.1-1.08-.96-1.45-1.72-1.78-2.22-.07-.1-.13-.24-.03-.38.1-.14.2-.2.3-.3.1-.1.17-.18.23-.3.07-.1.1-.2.13-.34.03-.14 0-.28-.04-.38-.04-.1-.1-.23-.2-.34-1.02-1.02-1.16-1.02-1.16-1.02-.13-.03-.27-.03-.4 0-.14 0-.35.04-.5.2-.14.17-.57.54-.57 1.32 0 .78.58 1.54.68 1.68.1.14 1.16 1.78 2.81 2.5.38.17.68.27.9.35.48.17.9.14 1.22.08.38-.07.72-.3.82-.57.1-.28.1-.5.07-.57l-.02-.02z"/></svg>
          </a>
          <a href="https://www.facebook.com/wahyu.adinugroho.9889" target="_blank" class="text-p3-gray hover:text-p3-white transition-colors duration-300" aria-label="Facebook">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </a>
        </div>
      </div>
    </div>
      <div class="absolute -right-12 bottom-0 text-[12rem] md:text-[18rem] font-black text-p3-blue-dark/50 select-none z-0 transform leading-none">
        CONNECT
    </div>
  </footer>
</template>
