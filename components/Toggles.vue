<template>
    <div class="bg-beige-1 py-24 px-[132px] rounded-[32px]">
      <div class="flex gap-[132px] mt-20 w-[1166px] mx-auto">
        <!-- Left Column: Collapsible Lists -->
        <div class="w-1/2">
          <h5 class="text-orange font-semibold text-base">Platform</h5>
          <h2 class="font-semibold text-[40px] leading-[48px] mt-2 mb-14">
            Core Features
          </h2>
          <div
            v-for="(item, index) in items"
            :key="index"
            class="mb-4 text-darkBlue border-b border-light-gray py-7"
          >
            <!-- Toggle Button -->
            <button
              @click="toggleItem(index)"
              class="w-full text-left font-semibold text-xl leading-6 transition duration-200 ease-in-out flex justify-between"
            >
              {{ item.title }}
              <img
                v-if="activeItem === index"
                src="/assets/plus.svg"
                class="w-8 h-8"
              />
              <img v-else src="/assets/minus.svg" class="w-8 h-8" />
            </button>
  
            <!-- Collapsible Content with Simultaneous Transition -->
            <transition name="accordion" mode="out-in">
              <div
                v-show="activeItem === index"
                class="overflow-hidden transition-all duration-300 ease-in-out mt-7"
              >
                <p v-for="(para, index) in item.content" :key="index" class="font-normal mb-2 text-base">
                  {{ para }}
                </p>
              </div>
            </transition>
          </div>
        </div>
  
        <!-- Right Column: Centered Image -->
        <div class="w-1/2 flex items-center justify-center min-h-[500px]">
          <transition name="fade" mode="out-in">
            <img
              v-if="activeItem !== null"
              :src="items[activeItem].image"
              :key="activeItem"
              class="w-full transition-opacity duration-500 ease-in-out"
              alt="Image"
            />
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  
  const items = ref([
    {
      title: "Semantic Search",
      content: [
        "Our platform leverages cutting-edge semantic models that enable users to search in plain English, bypassing the limitations of traditional keyword matching. ",
        "Whether you're searching for a graduate program, a professional course, or any learning opportunity, you can simply describe what you're looking for in your own words",
      ],
      image: "/assets/semantic.png",
    },
    {
      title: "Derivative Insights",
      content: [
        "Once user choses an opportunity of interest — such as a graduate course or professional program — our platform offers far more than just the official program specifications. ",
        "We provide a range of derivative insights, pulling from third-party sources such as reviews, job market stats, and employment outcomes, in a clear and actionable way.",
      ],
      image: "/assets/derivative.png",
    },
    {
      title: "Deep Profile",
      content: [
        "Users can create in-depth profiles that capture their complete academic and professional journey, from past achievements to current skills and future aspirations.",
        "By including details such as education history, work experience, and areas of interest, users allow the platform to gain a nuanced understanding of their unique position.",
      ],
      image: "/assets/deep.png",
    },
    {
      title: "User Centered",
      content: [
        "As users interact with the platform, our recommendation engine learns from their preferences, offering ever more relevant and curated suggestions.",
        'The personalized "For You" section evolves continuously, surfacing opportunities that align more closely with users’ academic and professional goals over time.',
      ],
      image: "/assets/centered.png",
    },
    {
      title: "High-Resolution Guidance",
      content: [
        "When key decisions arise, our high-resolution guidance feature lets users request targeted, personalized advice on specific opportunities without committing to full-service packages.",
        "Whether users need guidance on a program, application, or career step, we connect them with flexible, price-competitive consultants to get exactly the support they need.",
      ],
      image: "/assets/resolution.png",
    },
  ]);
  
  const activeItem = ref<number | null>(2);
  
  const toggleItem = (index: number) => {
    activeItem.value = activeItem.value === index ? null : index;
  };
  </script>
  
  <style scoped>
  /* Fade transition for the image */
  .fade-enter-active,
  .fade-leave-active {
    @apply transition-opacity duration-200 ease-in-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    @apply opacity-0;
  }
  
  /* Accordion transition for the dropdown */
  .accordion-enter-active,
  .accordion-leave-active {
    @apply transition-all duration-300 ease-in-out;
  }
  .accordion-enter-from,
  .accordion-leave-to {
    max-height: 0;
    opacity: 0;
  }
  .accordion-enter-to,
  .accordion-leave-from {
    max-height: 300px;
    opacity: 1;
  }
  </style>
  