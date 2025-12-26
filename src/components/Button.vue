<template>
    <button :class="btnClass">
        <img v-if="src" :src="src" alt="icone" class="w-3 h-3">
        <slot :class="btnClass" name="btn-primary"></slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    extraClass: {
        type: String,
        default: ''
    },
    src: String,
})

const btnClass = computed(() => {
    return `btn-primary ${props.extraClass}`
})
</script>