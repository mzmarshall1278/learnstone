<template>
    <nav class="pt-14 flex justify-between w-5/6 mx-auto py-4">
        <img src="/logo.svg" class="my-auto" alt="logo" />

        <div class="flex gap-2">
            <div class="flex  bg-beige-1 rounded-xl px-8 py-1">
                <NuxtLink to="/" class="my-auto px-2">Details</NuxtLink>
                <NuxtLink to="/" class="my-auto px-2">Pricing</NuxtLink>
                <NuxtLink to="/" class="my-auto px-2">Team</NuxtLink>
            </div>
            <button class="btn-primary">Get in Touch</button>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>