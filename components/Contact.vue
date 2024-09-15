<template>
  <div class="pb-10 lg:py-24  bg-beige-1 rounded-t-[36px] text-darkBlue">
    <div class="w-[343px] lg:w-[1166px] mx-auto">
      <div class="mb-14">
        <h5 class="text-xl font-semibold text-orange mb-2">Contact Us</h5>
        <h3 class="font-semibold text-[40px]">Placeholder Text</h3>
      </div>

      <div class="lg:flex lg:gap-[100px] xl:gap-[124px]">

        <div class="block lg:hidden mb-14">
          <ContactForm/>
        </div>

        <div class="lg:w-[373px]">
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

        <div class="hidden lg:block">
          <ContactForm/>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped></style>
