<template>
    <div class="flex flex-col-reverse md:flex-row w-5/6 md:w-2/3 mx-auto mt-20 noise-bg rounded-3xl">
      <!-- Main content area for displaying the card of the selected tab -->
      <div class="md:w-3/4 xl:w-5/6 p-6">
        <div v-if="currentCard">
          <div class="mb-4 text-beige-1">
            <h3 class="text-3xl font-semibold">{{ currentCard.title }}</h3>
            <p class="my-5 large-font">{{ currentCard.price }}</p>
            <div class="border border-lemonGreen"></div>
            <div v-for="detail in currentCard.details" :key="detail">
              <p class="my-5 text-size">{{ detail }}</p>
            </div>
            <div class="border border-lemonGreen mt-5"></div>
            <p class="mt-6 text-size">{{ currentCard.other }}</p>
          </div>
        </div>
      </div>
  
      <div class="md:w-1/4 xl:w-1/6 flex md:flex-col rounded-t-3xl md:rounded-r-3xl border-l md:border-l-0 border-y border-r border-black">
        <button
          v-for="(card, index) in cards"
          :key="index"
          class="flex items-center justify-around flex-1"
          :class="[
            'block w-full p-4 lg:p-6 text-left',
            index === 0 && 'rounded-tl-3xl md:rounded-tl-none md:rounded-tr-3xl',
            index === cards.length - 1 && 'rounded-tr-3xl md:rounded-tr-none md:rounded-br-3xl',
            currentTab === index ? 'noise-bg text-lemonGreen font-bold' : 'bg-beige-1 text-seaGreen'
          ]"
          @click="currentTab = index"
        >
          <div
            class="size-7 md:size-12 rounded-lg my-auto"
            :class="[
              currentTab === index ? 'bg-beige-1' : 'bg-seaGreen'
            ]"
          ></div>
          <span class="my-auto">{{ card.btn }}</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  interface Card {
    title: string;
    content: string;
    price: string;
    details: string[];
    other: string;
    btn: string;
  }
  
  const cards = [
    { title: 'Price Per Month', btn: 'Plan 1', price: '50 USD', details: ['Detail 1', 'Detail 2', 'Detail 3'], other: 'Some Space To place other important details of the monthly plan' },
    { title: 'Price Per Month', btn: 'Plan 2', price: '70 USD', details: ['Detail 1', 'Detail 2', 'Detail 3'], other: 'Some Space To place other important details of the monthly plan' },
    { title: 'Price Per Month', btn: 'Plan 3', price: '90 USD', details: ['Detail 1', 'Detail 2', 'Detail 3'], other: 'Some Space To place other important details of the monthly plan'},
  ];
  
  const currentTab = ref(0);
  
  const currentCard = computed(() => cards[currentTab.value] || null);
  </script>
  
  <style scoped>
  /* Custom styles for the component can be added here */
  </style>
  