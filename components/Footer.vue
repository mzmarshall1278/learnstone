<template>
  <footer class="p-8 lg:p-24 flex flex-col-reverse lg:flex-row justify-between noise-bg mt-20">
    <div class="lg:flex md:1/2 lg:w-2/5 gap-4">
      <ul class="text-beige-1 w-1/2">
        <img src="/logo.svg" alt="" class="mb-20" />
        <li class="my-2">Details</li>
        <li class="my-2">Pricing</li>
        <li class="my-2">Team</li>
      </ul>
      <div class="w-1/2 text-beige-1">
        <p class="">228 Park Avenue South  PMB 21976, New York  NY 10003</p>
        <p class="mt-20 my-2">contact@learnstone.ai</p>
        <p class=" my-2">support@learnstone.ai</p>
        <div class="flex gap-3 mt-8 w-1/2">
            <img src="/insta.svg" class="" />
            <img src="/in.svg" class="" />
            <img src="/yt.svg" class="" />
        </div>
      </div>
    </div>
    <div class="md:1/2 lg:w-2/4 mb-24 lg:mb-0">
        <h2 class="text-3xl text-beige-1">Join our email list <br> to stay updated</h2>
        <div class="flex mt-16 gap-3">
            <input type="text" class="border border-beige-0 placeholder:text-beige-1 w-1/2 rounded-lg bg-transparent px-3 py-2" placeholder="your email" />
            <button class="btn-primary">Sign up</button>
        </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
