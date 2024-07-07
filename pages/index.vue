<template>
  <div class="">
    <div class="noise-bg">
      <nav-bar />
      <!-- Hero -->
      <div class="my-11 lg:flex justify-between w-5/6 mx-auto pt-8 lg:pt-0">
        <div class="w-full lg:w-[55%] text-beige-1 my-auto">
          <h1 class="large-font">
            Discover Your Path to Success with Learnstone
          </h1>
          <h5 class="text-beige tracking-wider text-2xl md:text-3xl my-12">
            Find the Perfect Postgraduate Course for Your Future
          </h5>
          <button class="btn-primary">Start Exploring</button>
        </div>
        <img src="/hero.png" class="w-full lg:w-[580px] object-contain" />
      </div>
    </div>

    <div class="bg-beige-1 pt-28">
      <div class="w-5/6 lg:w-11/12 mx-auto lg:flex gap-4 xl:gap-16 relative">
        <div
          class="relative flex justify-end w-[200px] ml-auto md:ml-0 md:w-1/2 lg:w-[480px] xl:w-[580px] lg:ml-16"
        >
          <img
            src="/dots.svg"
            alt="dots"
            class="w-full md:w-1/2 xl:w-4/5 absolute lg:relative"
          />
          <img
            src="/ellipse3.svg"
            alt="ellipse"
            class="w-full hidden lg:block md:w-1/2 xl:w-4/5 absolute lg:relative"
          />
          <img
            src="/greenStatue.png"
            alt="statue"
            class="w-full hidden lg:block md:w-1/2 xl:w-2/5 right-8 -top-8 absolute"
          />
        </div>

        <div
          class="my-auto text-darkGreen md:w-[512px] lg:w-1/3 xl:w-2/5 py-24 lg:py-1"
        >
          <h3 class="large-font mb-12">What is Learnstone?</h3>
          <p class="text-size">
            Learnstone is an upcoming online platform designed to empower
            students and young professionals in achieving their career
            aspirations. Our mission is to streamline the process of identifying
            learning opportunities by harnessing the power of data and
            artificial intelligence.
          </p>
        </div>
      </div>

      <div
        class="w-[98%] md:w-4/5 lg:mt-28 mx-auto blueNoise-bg p-6 md:p-24 rounded-2xl justify-end xl:flex relative"
      >
        <div class="text-beige-1 w-full xl:w-[45%] 2xl:w-[50%] my-auto">
          <h1 class="large-font mb-11">How Does Learnstone Work?</h1>
          <p class="text-size">
            We meticulously gather and organize a vast amount of data on various
            learning opportunities worldwide. Through advanced algorithms, we
            structure and analyze this data to provide meaningful insights and
            guidance to our users.
          </p>
        </div>
        <img
          src="/business.png"
          alt=""
          class="w-full xl:w-[50%] pt-8 xl:pt-1 object-contain"
        />
      </div>

      <div
        class="w-5/6 lg:w-11/12 mx-auto lg:flex gap-4 lg:gap-16 relative md:mt-24"
      >
        <div
          class="hidden relative lg:flex justify-end w-[200px] ml-auto md:ml-0 md:w-1/2 lg:w-[480px] xl:w-[580px] lg:ml-16"
        >
          <img
            src="/dots.svg"
            alt="dots"
            class="w-full md:w-1/2 xl:w-4/5 relative"
          />
          <img
            src="/ellipse3.svg"
            alt="ellipse"
            class="w-full hidden lg:block md:w-1/2 xl:w-4/5 absolute lg:relative"
          />
          <img
            src="/bars.png"
            alt="statue"
            class="w-full lg:w-3/5 lg:top-24 xl:w-4/5 -right-8 xl:top-10 absolute"
          />
        </div>

        <div
          class="my-auto text-darkGreen md:w-[512px] lg:w-1/3 xl:w-2/5 py-24 lg:py-1"
        >
          <h3 class="large-font mb-12">Our Comprehensive Platform</h3>
          <p class="text-size">
            Learnstone serves as a comprehensive guide, enabling users to make
            informed decisions about their educational paths and career
            progression. We believe that by providing clarity and direction, we
            can significantly contribute to the success of students and young
            professionals worldwide.
          </p>
        </div>

        <div class="flex lg:hidden w-full mx-auto">
          <img src="/dots.svg" alt="dots" class="w-1/3 relative" />
          <img
            src="/bars.png"
            alt="statue"
            class="w-2/3 left-32 xl:top-10 absolute"
          />
        </div>
      </div>

      <div class="w-5/6 md:w-2/3 mx-auto mt-20">
        <h2 class="large-font text-orange mb-8">
          Choose the Right Plan For You
        </h2>
        <p class="text-size">
          Learnstone offers flexible pricing plans to suit your needs. Whether
          you're looking for a single-course exploration or full access to our
          personalized assessment tool, we have the perfect plan for you.
        </p>
      </div>

      <Tabs />

      <div class="brownNoise-bg md:flex justtify-between p-16 lg:p-24 mt-24">
        <div class="w-full md:w-1/2">
          <img src="/trumpet.png" style="transform: scaleX(-1); rotate: -5deg;"alt="" class=" mx-auto w-2/3 md:w-1/3 object-contain" />
        </div>
        <div class="w-11/12 mx-auto lg:w-1/2 my-auto">
          <div class="md:w-2/3 flex flex-col gap-8">
            <h3 class="large-font text-darkGreen">Start your <br/> journey Today</h3>
            <p class="text-2xl text-green">Join Learnstone and Unlock Your Potential</p>
            <button class="btn-primary w-fit">Start Exploring</button>
          </div>
        </div>
      </div>

      <div class="statue-bg pt-48 pb-56">
        <h3 class="large-font w-2/3 mx-auto text-darkGreen text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>

      <div class="w-11/12 mx-auto bg-beige-0 rounded-2xl">
        <div class="md:text-center pl-4 pt-7 md:p-14">
          <h4 class="text-6xl text-orange font-medium">Meet Our Dedicated Team</h4>
          <p class="text-size mt-6 text-darkGreen w-11/12 md:w-2/3 mx-auto">At Learnstone, we're more than just a service; we're a community of ambitious individuals dedicated to helping you navigate your path to educational and professional success.</p>

          <div class="mt-14 flex flex-wrap justify-center gap-y-16 pb-20">
              <div v-for="i in 7" key="i"  class="flex gap-5 w-1/2 md:w-1/3 xl:w-1/4">
                <img src="/girl.png" class="rounded-full object-contain"/>
                <div class="my-auto text-left">
                  <p class="text-orange">Full Name</p>
                  <p class="">Lorem Ipsum Dolor</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <!-- get in touch -->
      <div class="w-11/12 md:w-1/2 mx-auto mt-32">
        <h3 class="large-font text-darkGreen">Get in Touch</h3>
        <p class="text-size text-darkGreen mt-7"><span class="font-bold">Have questions or need assistance?</span> Our friendly support team is here to help. Reach out to us via email, phone, or through our online contact form.</p>
        <div class="lg:flex text-darkGreen gap-4 mt-12 relative ">
          <img src="/quadArch.svg" class="absolute -left-20 lg:-left-28 top-64 lg:top-4" />
        <div class="w-full lg:w-1/2">
            <label class="">Name*</label>
            <input type="text" placeholder="your name" class="border rounded-xl border-darkGreen bg-transparent placeholder:text-seaGreen px-3 py-2 block mt-2 w-full" />
            <label class="mt-7 block">BUSINESS EMAIL*</label>
            <input type="text" placeholder="your email" class="border rounded-xl border-darkGreen bg-transparent placeholder:text-seaGreen px-3 py-2 block mt-2 w-full" />
          </div>
          <div class="w-full mt-8 md:mt-0 lg:w-1/2">
            <label class=" block">TELL US MORE ABOUT YOUR USE CASE</label>
            <textarea rows="" class="border h-36 rounded-xl border-darkGreen bg-transparent placeholder:text-seaGreen px-3 py-2 block mt-2 w-full" />
          </div>

        </div>
        <div class="w-full flex justify-center">
          <button class="w-full lg:w-fit border-2 border-lemonGreen py-2 px-4 mt-8 rounded-full text-darkGreen font-bold">Start Exploring</button>
        </div>
      </div>

      <Footer/>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
