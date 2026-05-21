<template>
    <div class="group overflow-hidden bg-accent/10 rounded-lg mt-15 desktop:w-full transition duration-700 hover:-translate-y-2 ease-in-out hover:shadow-[0px_10px_93px_-73px_#4D9FA3]">
        <div class="flex flex-col gap-4 overflow-hidden">
            <div class="w-full h-40 mx-auto overflow-hidden rounded-1xl">
                <img :src="image" :alt="alt || 'card'" class="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out" />
            </div>
            <div class="p-3 flex flex-col justify-between h-47">
                <div class="flex justify-between pb-3">
                    <h1 class="text-primary/75 font-bold text-[1.3rem]">{{ title }}</h1>
                    <a :href="link" target="_blank" class="w-[30%] flex flex-col justify-center items-center bg-accent/20 rounded-full transition duration-700 hover:-translate-y-1 ease-in-out">
                        <div class="flex gap-3 items-center">
                            <LucideSquareArrowOutUpRight :size="15" class="text-accent" />
                            <small class="text-primary font-bold">Ouvrir</small>
                        </div>
                    </a>
                </div>
                <p class="text-mutedForeground">{{ description }}</p>
                <div class="flex gap-3">
                    <div v-for="techno in technos">
                        <div class="flex items-center gap-3">
                            <small class="text-primary font-bold">
                                {{ techno.name }}
                            </small>
                            <img :src="techno.logo" :alt="techno.name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { LucideSquareArrowOutUpRight } from "@lucide/vue";
defineProps({
    image: String,
    title: String,
    link: String,
    description: String,
    alt: String,
    technos: Array,
});
</script>
