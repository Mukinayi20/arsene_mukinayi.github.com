<template>
    <div class="primary-center hidden fixed z-1 rounded-full ml-4 opacity-50 border border-accent/75 desktop:hover:opacity-80 hover:scale-125 transition delay-150 duration-400 ease-in-out desktop:ml-70">
        <img class="w-17 h-17 rounded-full object-cover" src="/IMG-20250901-WA0029.jpg" alt="Profil">
    </div>
    <header class="text-Foreground pb-30">
        <div class="nav-bar fixed top-0 z-1 desktop:pl-40 desktop:pr-40 desktop:font-semibold">
            <a href="#">PORTFOLIO</a>
            <div class="hidden desktop:flex desktop:gap-8">
                <a href="#apropos">À propos</a>
                <a href="#projet">Projets</a>
                <a href="#contact">Contact</a>
            </div>
            <a  href="#">Discutons</a>
        </div>
        <div class="primary-center mt-20 h-70" ref="bigImage">
            <img class="header-profil transition-transfordesktop:w200m duration-20 ease-out" :style="{ transform: `scale(${scale})` }" src="/IMG-20250901-WA0029.jpg" alt="Profil">
        </div>
        <div>
            <div class="primary-center mt-2 h-5">
                <h1 class="text-[2.5rem] text-primary">Arsène Mukinayi</h1>
            </div>
            <div class="primary-center h-70 p-8">
                <p class="text-center text-lg text-mutedForeground desktop:w-180">Développeur créatif, je conçois des expériences numériques minimalistes et innovantes en appliquant mes compétences pour résoudre les problématiques avec rigueur et créer des solutions à forte valeur ajoutée</p>
            </div>
            <div class="flex gap-4 justify-center">
                <Button extraClass="bg-primary text-primaryForeground hover:opacity-75">
                    <template #btn-primary>Voir mes projets</template>
                </Button>
                <Button extraClass="border-secondary hover:bg-secondary">
                    <template #btn-primary>Me contacter</template>
                </Button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Button from './Button.vue';

const scale = ref(1)

const handelScroll = () => {
    const scrollY = window.scrollY

    const newScale = 1 - scrollY / 400
    scale.value = Math.max(newScale, 0.30)
}

onMounted(() => {
    window.addEventListener('scroll', handelScroll)
})

onUnmounted(() => {
    window.addEventListener('scroll', handelScroll)
})
</script>