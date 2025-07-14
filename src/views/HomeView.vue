<script setup>
import { defineAsyncComponent } from 'vue';
import Hero from '@/components/Hero.vue';

const Skills = defineAsyncComponent(() => import('@/components/Skills.vue'));
const Projects = defineAsyncComponent(() => import('@/components/Projects.vue'));
const Education = defineAsyncComponent(() => import('@/components/Education.vue'));
const Contact = defineAsyncComponent(() => import('@/components/Contact.vue'));
</script>
<template>
  <main id="main-content">
    <Hero />
    <div v-animate-on-scroll><Skills /></div>
    <div v-animate-on-scroll><Projects /></div>
    <div v-animate-on-scroll><Education /></div>
    <div v-animate-on-scroll><Contact /></div>
  </main>
</template>
