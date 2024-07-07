<template>
  <nav class="hidden pt-14 lg:flex justify-between w-2/3 mx-auto py-4">
    <img src="/logo.svg" class="my-auto" alt="logo" />

    <div class="flex gap-2">
      <div class="flex bg-beige-1 rounded-xl px-8 py-1">
        <NuxtLink to="/" class="my-auto px-2">Details</NuxtLink>
        <NuxtLink to="/" class="my-auto px-2">Pricing</NuxtLink>
        <NuxtLink to="/" class="my-auto px-2">Team</NuxtLink>
      </div>
      <button class="btn-primary">Get in Touch</button>
    </div>
  </nav>

  <nav class="lg:hidden">
    <div class="flex justify-between p-4">
      <img src="/logo.svg"  class="my-auto" alt="logo" />
      <img src="/burger.svg" @click="()=> isOpen = !isOpen" class="my-auto cursor-pointer" alt="logo" />
    </div>
    <transition name="fade-slide">
        <div v-if="isOpen" class="bg-beige-1 w-full">
          <ul class="text-green divide-y-2 divide-beige-2 px-5 text-center text-xl">
            <li class="py-4 cursor-pointer" @click="isOpen = false">Details</li>
            <li class="py-4 cursor-pointer" @click="isOpen = false">Pricing</li>
            <li class="py-4 cursor-pointer" @click="isOpen = false">Team</li>
            <li class="py-4 font-bold cursor-pointer" @click="isOpen = false">Get in Touch</li>
          </ul>
        </div>
      </transition>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

