<template>
  <div class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-p3-blue-dark font-heading overflow-hidden">
    <div class="relative w-32 h-32 md:w-48 md:h-48 mb-8">
      <svg class="w-full h-full" viewBox="0 0 100 100" style="transform: rotate(-90deg);">
        <circle cx="50" cy="50" r="45" stroke="#0A1A3A" stroke-width="4" fill="transparent" />
        <circle
          cx="50" cy="50" r="45"
          stroke="#F7B733" stroke-width="4" fill="transparent"
          stroke-linecap="round"
          stroke-dasharray="282.7"
          stroke-dashoffset="282.7"
          class="animate-draw-circle"
          style="animation-delay: 500ms;"
        />
      </svg>
      <div class="absolute w-full h-full top-0 left-0">
        <div class="absolute bottom-1/2 left-1/2 w-0.5 h-14 md:h-20 bg-p3-blue-light/50 animate-spin-slow" style="transform-origin: bottom;"></div>
        <div class="absolute bottom-1/2 left-1/2 w-1 h-16 md:h-24 bg-p3-white animate-spin-fast" style="transform-origin: bottom;"></div>
        <div class="absolute bottom-1/2 left-1/2 w-1 h-12 md:h-16 bg-p3-gold animate-spin-medium" style="transform-origin: bottom;"></div>
        <div class="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-p3-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
    <div class="text-p3-gold text-xl md:text-2xl tracking-widest flex items-baseline">
      <span>LOADING</span>
      <div class="w-10 flex">
        <span class="animate-blink" style="animation-delay: 0s;">.</span>
        <span class="animate-blink" style="animation-delay: 0.2s;">.</span>
        <span class="animate-blink" style="animation-delay: 0.4s;">.</span>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes spin-fast {
  from { transform: translateX(-50%) rotate(0deg); }
  to { transform: translateX(-50%) rotate(360deg); }
}

@keyframes spin-medium {
  from { transform: translateX(-50%) rotate(0deg); }
  to { transform: translateX(-50%) rotate(-360deg); }
}

@keyframes spin-slow {
  from { transform: translateX(-50%) rotate(0deg); }
  to { transform: translateX(-50%) rotate(360deg); }
}

.animate-spin-fast {
  animation: spin-fast 0.6s linear infinite;
}
.animate-spin-medium {
  animation: spin-medium 1.2s linear infinite;
}
.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>
