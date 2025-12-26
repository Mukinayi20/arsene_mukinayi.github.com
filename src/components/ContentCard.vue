<template>
    <div class="flex flex-col gap-2 pt-4">
        <h1 class="text-cardForeground text-xl">
            <slot name="head"></slot>
        </h1>
        <small class="text-mutedForeground">
            <slot name="main"></slot>
        </small>
    </div>
</template>

<script setup>

</script>