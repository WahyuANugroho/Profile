<template>
  <section id="profil" class="container mx-auto px-6 py-20">
    <div class="flex flex-col items-center md:flex-row">

      <div class="mb-10 md:w-1/2 md:mb-0">
        <h1
          class="animate-slidein-left mb-4 text-5xl font-bold text-gray-800"
          style="animation-delay: 200ms;"
        >
          Halo, Saya <span class="text-blue-600">Wahyu Adi Nugroho</span>
        </h1>

        <p
          class="animate-slide-in-left mb-8 text-xl text-gray-600"
          style="animation-delay: 400ms;"
        >
          Mahasiswa Informatika yang bersemangat dalam pengembangan android app.
        </p>

        <a
          href="#kontak"
          class="inline-block animate-slide-in-left rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-700"
          style="animation-delay: 600ms;"
        >
          Hubungi Saya
        </a>
      </div>

      <div class="flex justify-center md:w-1/2 animate-slide-in-right">
        <img
          src="https://i.pinimg.com/736x/d4/c1/8b/d4c18b392742b79b933453295a0a1e8e.jpg"
          alt="Foto Profil"
          class="h-80 w-80 rounded-full object-cover shadow-lg"
        >
      </div>

    </div>
  </section>
</template>
