<template>
    <div v-if="projets.length > 0" class="flex flex-wrap max-xl:flex-col gap-10 justify-center w-full">
        <div v-for="projet in projets" class="w-[26%] max-xl:w-full h-108">
            <CardProjet :image="projet.img" :title="projet.name" :link="projet.link" :description="projet.description" :technos="projet.technos"> </CardProjet>
        </div>
    </div>
    <div v-else class="text-center text-lg text-mutedForeground pt-15 flex flex-col items-center">
        <h1 class="desktop:w-210">Cette section est momentanement indisponible. Vous pouvez consulter ma page <a href="https://github.com/Mukinayi20" class="no-underline hover:underline text-blue-600 z-1" target="_blank">Github</a> si besoin. Merci !</h1>
    </div>
</template>

<script setup>
import portfolio from "@/assets/images/portfolio.png";
import robbilens from "@/assets/images/robbilens.png";
import tdr from "@/assets/images/tdr.webp";

import CardProjet from "./CardProjet.vue";
import { ref } from "vue";

const projets = ref([
    {
        name: "Portfolio",
        img: portfolio,
        link: "https://my-portfolio-y00h.onrender.com",
        description: "Projet d’apprentissage en HTML et CSS dédié à la création d’interfaces responsive et structurées en front-end.",
        technos: [
            {
                name: "HTML5",
                logo: "https://api.iconify.design/skill-icons:html.svg",
            },
            {
                name: "CSS3",
                logo: "https://api.iconify.design/skill-icons:css.svg",
            },
        ],
    },
    {
        name: "Robbi Lens",
        img: robbilens,
        link: "https://robbie-lens-la-photographe.onrender.com/",
        description: "Premier projet front-end en HTML et CSS réalisé pour apprendre les bases de l’intégration et de la structuration de pages web.",
        technos: [
            {
                name: "HTML5",
                logo: "https://api.iconify.design/skill-icons:html.svg",
            },
            {
                name: "CSS3",
                logo: "https://api.iconify.design/skill-icons:css.svg",
            },
        ],
    },
    {
        name: "Clone x",
        img: tdr,
        link: "",
        description: "Clone de Twitter développé en full stack pour pratiquer l’authentification, la gestion des publications et les interactions utilisateurs.",
        technos: [
            {
                name: "HTML5",
                logo: "https://api.iconify.design/skill-icons:html.svg",
            },
            {
                name: "CSS3",
                logo: "https://api.iconify.design/skill-icons:css.svg",
            },
        ],
    },
]);
</script>
