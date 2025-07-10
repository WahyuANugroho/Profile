<script setup>
defineProps({ isMobileOpen: Boolean });
defineEmits(['close-mobile-menu']);
</script>

<template>
  <aside
    class="fixed top-0 left-0 h-screen w-64 bg-p3-blue-base p-6 font-heading flex flex-col justify-between z-40 transition-transform duration-300 ease-in-out border-r-4 border-p3-blue-dark"
    :class="isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
    style="clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);"
  >
    <div>
      <h1 class="text-2xl md:text-3xl font-bold text-p3-white mb-2 transform -skew-x-12">Wahyu Adi Nugroho</h1>
      <h2 class="text-base md:text-lg text-p3-gold mb-12 md:mb-16">Web Developer</h2>
      <ul class="space-y-5 text-lg md:text-xl pl-6">
        <li><a href="#profil" @click="$emit('close-mobile-menu')" class="nav-link">PROFIL</a></li>
        <li><a href="#skill" @click="$emit('close-mobile-menu')" class="nav-link">SKILLS</a></li>
        <li><a href="#proyek" @click="$emit('close-mobile-menu')" class="nav-link">PROYEK</a></li>
        <li><a href="#pendidikan" @click="$emit('close-mobile-menu')" class="nav-link">PENDIDIKAN</a></li>
      </ul>
    </div>
    <div>
      <a href="#kontak" @click="$emit('close-mobile-menu')"
         class="bg-p3-gold text-p3-blue-dark font-bold py-3 px-4 rounded-sm transition-all duration-300 block text-center text-base md:text-lg transform -skew-x-12 hover:bg-p3-white hover:shadow-lg hover:shadow-p3-gold/20">
        HUBUNGI SAYA
      </a>
      <p class="text-p3-gray text-xs text-center mt-4 pr-12">&copy; {{ new Date().getFullYear() }}</p>
    </div>
  </aside>
</template>

<style scoped>
.nav-link {
  @apply text-p3-gray hover:text-p3-white transition-colors duration-200 block relative;
}

/* REVISI: Posisi panah diatur agar menempel di kiri layar */
.nav-link::before {
  content: '';
  position: absolute;
  /* (6+6) * 0.25rem = 3rem. Mengimbangi padding dari aside (p-6) dan ul (pl-6) */
  left: -3rem;
  top: 50%;
  width: 12px;
  height: 20px;
  background-color: theme('colors.p3-gold');
  clip-path: polygon(100% 50%, 0 0, 0 100%); /* Panah menunjuk ke kanan */

  /* Pengaturan animasi */
  transform: translateY(-50%) scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::before {
  /* Memunculkan panah saat di-hover */
  transform: translateY(-50%) scaleX(1);
}
</style>
