<template>
    <div v-if="projets.length > 0"></div>
    <div v-else class="text-center text-lg text-mutedForeground pt-15 flex flex-col items-center">
        <h1 class="desktop:w-210">Cette section est momentanement indisponible. Vous pouvez consulter ma page <a href="https://github.com/Mukinayi20" class="no-underline hover:underline text-blue-600 z-1" target="_blank">Github</a> si besoin. Merci !</h1>
    </div>
</template>

<script setup>
import { ref } from "vue";

const projets = ref([
    {
        name: "Portfolio",
        img: "",
        path: "https://my-portfolio-y00h.onrender.com",
        description: "Projet d’apprentissage développé en HTML et CSS pour mettre en pratique les fondamentaux de l’intégration web. L’objectif était de construire une interface propre, responsive et structurée tout en améliorant mes compétences en design et en développement front-end. Ce projet représente une étape importante dans mon parcours de développeur web.",
    },
    {
        name: "Robbi Lens la photographe",
        img: "",
        path: "https://robbie-lens-la-photographe.onrender.com/",
        description: "Premier projet front-end conçu avec HTML et CSS dans le cadre de mon apprentissage du développement web. Ce projet m’a permis de pratiquer la structuration de pages web, l’organisation du code et les bases de l’intégration d’interfaces utilisateur. Il représente mes débuts dans le développement web ainsi que mon évolution progressive en tant que développeur.",
    },
    {
        name: "Clone x",
        img: "",
        path: "",
        description: "Projet de fin d’année consistant en la création d’un clone de Twitter afin de mettre en pratique mes compétences en développement web full stack. Cette application m’a permis de travailler sur l’authentification, la gestion des publications, les interactions entre utilisateurs ainsi que l’organisation d’une application web complète. Ce projet reflète ma capacité à concevoir une plateforme dynamique inspirée d’un réseau social moderne.",
    },
    { name: "", path: "", description: "", stack: {} },
    { name: "", path: "", description: "", stack: {} },
]);
</script>
