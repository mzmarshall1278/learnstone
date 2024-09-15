<template>
  <div class="py-24 px-[136px] bg-beige-1 rounded-t-[36px] text-darkBlue">
    <div class="w-[1166px] mx-auto">
      <div class="mb-14">
        <h5 class="text-xl font-semibold text-orange mb-2">Contact Us</h5>
        <h3 class="font-semibold text-[40px]">Placeholder Text</h3>
      </div>

      <div class="flex gap-[124px]">
        <div class="w-[373px]">
          <div class="mb-6">
            <h6 class="text-xl font-semibold mb-4">WE ARE HERE CURRENTLY</h6>
            <p class="text-base font-normal mb-2">228 Park Avenue South </p>
            <p class="text-base font-normal mb-2">PMB 21976, New York </p>
            <p class="text-base font-normal mb-2">NY 10003</p>
          </div>
          <div class="">
            <h6 class="text-xl font-semibold mb-4">Our Social Media Links</h6>
            <p class="text-base font-normal mb-2 flex gap-2"><img src="/assets/youtube.svg"/><span class="underline ">Youtube</span></p>
            <p class="text-base font-normal mb-2 flex gap-2"><img src="/assets/insta.svg"/><span class="underline ">Instagram</span></p>
            <p class="text-base font-normal mb-2 flex gap-2"><img src="/assets/in.svg"/><span class="underline ">LinkedIn</span></p>
          </div>
        </div>

        <div class="">
            <h4 class="text-xl font-semibold mb-4">Send Us a Message</h4>
            <div class="">
                <label class="block text-lg font-medium mb-4">Your Business Mail</label>
                <input placeholder="Enter Your Business Mail"type="text" class="mb-4 w-[671px] px-4 py-3 border border-light-gray rounded-xl"/>
            </div>

            <div class="">
                <label class="block text-lg font-medium mb-4">Subject</label>
                <input placeholder="Add the subject of your message" v-model="subject" type="text" class="mb-4 w-[671px] px-4 py-3 border border-light-gray rounded-xl"/>
                <p class="ml-auto text-xs text-right mr-4">{{ subject.length }}/500</p>
            </div>

            <div class="">
                <label class="block text-lg font-medium mb-4">Message</label>
                <textarea placeholder="Message" v-model="message"  class="mb-4 w-[671px] px-4 py-3 border border-light-gray rounded-xl" />
                <p class="ml-auto text-xs text-right mr-4 mb-6">{{ message.length }}/500</p>

            </div>

            <button class="btn-primary flex gap-3 ml-auto">
                Send Message
                <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
              </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const subject = ref("")
const message = ref("")

</script>


<style scoped></style>
