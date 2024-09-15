<template>
  <nav
    class="hidden lg:flex justify-between px-[84px] mx-auto py-4 border-b rounded-b-2xl border-beige-2"
  >
    <img src="/assets/Logo.svg" class="my-auto w-[173px] h-8" alt="logo" />

    <div class="flex gap-2">
      <div class="flex pr-10 font-medium text-darkBlue">
        <NuxtLink to="/" class="my-auto px-6">Our Work</NuxtLink>
        <NuxtLink to="/" class="my-auto px-6">Platform</NuxtLink>
        <NuxtLink to="/" class="my-auto px-6">About Us</NuxtLink>
      </div>
      <button class="btn-primary flex gap-3">
        Get in Touch
        <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
      </button>
    </div>
  </nav>

  <nav class="lg:hidden">
    <div class="flex justify-between p-4 border-b border-beige-2">
      <img src="/assets/Logo.svg" class="my-auto w-[173px] h-8" alt="logo" />
      <img
        src="/assets/burger.svg"
        @click="() => (isOpen = !isOpen)"
        class="my-auto cursor-pointer h-6 w-6"
        alt="logo"
      />
    </div>
    <transition name="fade-slide">
      <div v-if="isOpen" class="w-full">
        <ul class="text-darkBlue text-center text-xl mt-6 mb-96">
          <li class="mb-6 cursor-pointer" @click="isOpen = false">Our Work</li>
          <li class="mb-6 cursor-pointer" @click="isOpen = false">Platform</li>
          <li class="mb-6 cursor-pointer" @click="isOpen = false">About Us</li>
        </ul>
        <div class="mx-4">
          <button class="btn-primary flex justify-center gap-3 w-full mx-auto">
          Get in Touch
          <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
        </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
