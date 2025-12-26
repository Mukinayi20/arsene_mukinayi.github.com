<template>
    <header class="text-Foreground">
        <div class="nav-bar fixed top-0">
            <a href="#">PORTFOLIO</a>
            <a class="font-medium" href="#">Discutons</a>
        </div>
        <div class="primary-center mt-20 h-70">
            <img class="header-profil fixed top-25 left-83 -translate-x-1/2 transition-opacity duration-500 ease-out will-change-transform z-50 " :style="imageStyle" src="/IMG-20250901-WA0029.jpg" alt="Profil">
        </div>
        <div class="primary-center mt-2 h-5">
            <h1 class="text-[2.5rem] text-primary">Arsène Mukinayi</h1>
        </div>
        <div class="primary-center h-70 p-8">
            <p class="text-center text-lg text-mutedForeground">Développeur créatif, je conçois des expériences numériques minimalistes et innovantes en appliquant mes compétences pour résoudre les problématiques avec rigueur et créer des solutions à forte valeur ajoutée</p>
        </div>
        <div class="flex gap-4 justify-center">
            <Button extraClass="bg-primary text-primaryForeground hover:opacity-75">
                <template #btn-primary>Voir mes projets</template>
            </Button>
            <Button extraClass="border-secondary hover:bg-secondary">
                <template #btn-primary>Me contacter</template>
            </Button>
        </div>
    </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Button from './Button.vue';

const scrollY = ref(1)

const handelScroll = () => {
    scrollY.value = window.scrollY

}

onMounted(() => {
    window.addEventListener('scroll', handelScroll)
})

onUnmounted(() => {
    window.addEventListener('scroll', handelScroll)
})

const imageStyle = computed(() => {
  const maxScroll = 600
  const progress = Math.min(scrollY.value / maxScroll, 1)

  const scale = 1 - progress * 0.7

  const translateX = -50 + progress * -60
  const translateY = progress * -100

  const opacity = Math.max(1 - progress * 0.7, 0.5)

  return {
    transform: `
      translate(${translateX}%, ${translateY}px)
      scale(${scale})
    `, opacity
  }
})
</script>