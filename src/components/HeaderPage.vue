<template>
    <div class="primary-center hidden fixed z-1 rounded-full ml-4 opacity-50 border border-accent/75 desktop:hover:opacity-80 hover:scale-125 transition delay-150 duration-400 ease-in-out desktop:ml-70">
        <img class="w-17 h-17 rounded-full object-cover" src="/IMG-20250901-WA0029.jpg" alt="Profil">
    </div>
    <header id="nav-bar" class="text-Foreground pb-30">
        <nav class="nav-bar shadow-none border-b border-secondary/30 fixed items-center top-0 z-1 desktop:pl-40 desktop:pr-40 desktop:font-semibold">
            <a href="#nav-bar" class="nav-bar__title">PORTFOLIO</a>
            <div class="hidden desktop:flex desktop:gap-8">
                <a href="#apropos">À propos</a>
                <a href="#projet">Projets</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="flex gap-3">
                <button @click="toggleTheme" class="p-2 w-12 flex justify-center items-center bg-secondary rounded-lg">
                    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#363b3f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#363b3f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-dim-icon lucide-sun-dim"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.657 6.343h.01"/><path d="M17.657 17.657h.01"/><path d="M6.343 17.657h.01"/><path d="M6.343 6.343h.01"/></svg>
                </button>
                <a  href="#" class="p-2 text-accent font-medium border border-accent/30 rounded-xl pl-4 pr-4">Discutons</a>
            </div>
        </nav>
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
        <div class="flex justify-center pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#41494F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
        </div>
    </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Button from './Button.vue';

const scale = ref(1)
const isDark = ref(false)

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

onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    }else {
        isDark.value = false
        document.documentElement.classList.remove('dark')
    }
})

const toggleTheme = () => {
    isDark.value = !isDark.value
  
    if(isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}
</script>