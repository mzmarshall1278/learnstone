<template>
  <div class="">
    <h4 class="text-xl font-semibold mb-4">Send Us a Message</h4>
    <div class="">
      <label class="block text-lg font-medium mb-4">Your Business Mail</label>
      <input
        placeholder="Enter Your Business Mail"
        type="text"
        v-model="email"
        class="mb-4 w-[343px] [671px] px-4 py-3 border border-light-gray rounded-xl"
      />
    </div>

    <div class="">
      <label class="block text-lg font-medium mb-4">Subject</label>
      <input
        placeholder="Add the subject of your message"
        v-model="subject"
        type="text"
        maxLength="100"
        class="mb-4 w-[343px] [671px] px-4 py-3 border border-light-gray rounded-xl"
      />
      <p class="ml-auto text-xs text-right mr-4">{{ subject.length }}/100</p>
    </div>

    <div class="">
      <label class="block text-lg font-medium mb-4">Message</label>
      <textarea
        placeholder="Message"
        v-model="message"
        maxLength="500"
        class="mb-4 w-[343px] [671px] px-4 py-3 border border-light-gray rounded-xl"
      />
      <p class="ml-auto text-xs text-right mr-4 mb-6">
        {{ message.length }}/500
      </p>
    </div>

    <button class="btn-primary flex gap-3 ml-auto justify-center w-full lg:w-fit">
      Send Message
      <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
    </button>
  </div>
</template>

<script setup lang="ts">
const email = ref("")
const subject = ref("")
const message = ref("")
</script>

<style scoped></style>
