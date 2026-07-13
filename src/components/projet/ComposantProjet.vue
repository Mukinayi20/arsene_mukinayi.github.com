<template>
    <div class="flex flex-wrap max-xl:flex-col gap-10 justify-center w-full">
        <div v-for="projet in projets" class="w-[30%] max-xl:w-full h-full">
            <CardProjet :image="projet.img" :title="projet.name" :link="projet.link" :description="projet.description" :technos="projet.technos" />
        </div>
    </div>
</template>

<script setup>
import portfolio from "@/assets/images/portfolio.png";
import robbilens from "@/assets/images/robbilens.png";
//import tdr from "@/assets/images/tdr.webp";
import portfolio1 from "@/assets/images/portfolio1.png";
import hexatrip from "@/assets/images/hexatrip.png";
import x from "@/assets/images/x.png";

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
                name: "HTML",
                logo: "https://api.iconify.design/skill-icons:html.svg",
            },
            {
                name: "CSS",
                logo: "https://api.iconify.design/skill-icons:css.svg",
            },
        ],
    },
    {
        name: "Robbi Lens",
        img: robbilens,
        link: "https://robbie-lens-la-photographe.onrender.com/",
        description: "Premier projet front-end en HTML et CSS réalisé pour apprendre les bases de l’intégration et de la structuration de pages web. << Openclassroom >>",
        technos: [
            {
                name: "HTML",
                logo: "https://api.iconify.design/skill-icons:html.svg",
            },
            {
                name: "CSS",
                logo: "https://api.iconify.design/skill-icons:css.svg",
            },
        ],
    },
    {
        name: "Clone x",
        img: x,
        link: "",
        description: "Clone de Twitter développé en full stack pour pratiquer l’authentification, la gestion des publications et les interactions utilisateurs.",
        technos: [
            {
                name: "Adonis",
                logo: "https://api.iconify.design/skill-icons:adonis.svg",
            },
            {
                name: "Tailwind",
                logo: "https://api.iconify.design/skill-icons:tailwindcss-light.svg",
            },
            {
                name: "Js",
                logo: "https://api.iconify.design/skill-icons:javascript.svg",
            },
        ],
    },
    {
        name: "Hexatrip",
        img: hexatrip,
        link: "https://fabled-print.netlify.app",
        description: "Application web de réservation et de gestion de voyages conçue pour offrir une expérience simple, rapide et intuitive aux utilisateurs souhaitant planifier leurs déplacements.",
        technos: [
            {
                name: "Express",
                logo: "https://api.iconify.design/skill-icons:expressjs-light.svg",
            },
            {
                name: "Tailwind",
                logo: "https://api.iconify.design/skill-icons:tailwindcss-light.svg",
            },
            {
                name: "TS",
                logo: "https://api.iconify.design/skill-icons:typescript.svg",
            },
            {
                name: "Mongo",
                logo: "https://api.iconify.design/skill-icons:mongodb.svg",
            },
        ],
    },
    {
        name: "Portfolio",
        img: portfolio1,
        link: "",
        description: "Clone de Twitter développé en full stack pour pratiquer l’authentification, la gestion des publications et les interactions utilisateurs.",
        technos: [
            {
                name: "Vue",
                logo: "https://api.iconify.design/skill-icons:vuejs-light.svg",
            },
            {
                name: "Tailwind",
                logo: "https://api.iconify.design/skill-icons:tailwindcss-light.svg",
            },
        ],
    },
]);
</script>
