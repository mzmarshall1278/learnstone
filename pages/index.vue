<template>
  <div class="bg-beige-1">
    <nav-bar />
    <div class="bg-darkGreen">
      <!-- Hero -->
      <div class="bg-beige-1 rounded-b-[36px]">
        <div class="flex gap-6 mx-auto w-fit">
          <div class="my-auto w-[671px]">
            <h1 class="font-semibold text-5xl leading-[56px] text-darkBlue">
              Empowering Students and Young Professionals to Find the Right
              Stepping Stone
            </h1>
            <h3 class="text-xl mt-6 font-medium">
              By combining vast data with recent advancements in Natural
              Language Processing, Learnstone matches your goals with the best
              opportunities.
            </h3>
            <div class="flex gap-6 mt-9">
              <button
                class="border border-darkBlue rounded-lg px-6 py-3 text-darkBlue font-normal text-base my-auto flex gap-3"
              >
                Visit Platform
                <img src="/assets/black-arrow.svg" class="my-auto" alt="logo" />
              </button>
              <button class="btn-primary flex gap-3">
                Contact Us
                <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
              </button>
            </div>
          </div>
          <img src="/assets/Visual.png" alt="image" class="my-24" />
        </div>
      </div>

      <div class="mt-24">
        <div class="w-[1166px] mx-auto mt-9">
          <div class="">
            <h5 class="text-xl font-semibold text-orange mb-2">Our Work</h5>
            <h3 class="font-semibold text-[40px] text-white">
              Disrupting Current Solutions
            </h3>
          </div>
          <div class="my-auto flex">
            <div class="my-auto">
              <h6 class="text-2xl font-semibold text-lemonGreen mb-4">
                The problem we’re addressing isn’t new.
              </h6>
              <p class="text-base tracking-[0.75%] font-light text-white">
                Students and young professionals have always faced overwhelming
                choices that will multiple over time, and a lack of clear
                guidance when planning their next steps <br />
                Existing solutions often provide superficial information,
                falling short of what’s needed.
              </p>
            </div>
            <img src="/assets/quinton.png" alt="image" class="" />
          </div>
        </div>
      </div>

      <div class="p-11 w-fit mx-auto  relative mt-11">
        <img src="/assets/pleft.svg" alt="image" class="absolute -left-10 -top-8" />
        <p class="font-semibold text-white text-4xl w-[572px]">We aim to change that by offering deeper, more meaningful insights.</p>
        <img src="/assets/pright.svg" alt="image" class="absolute -right-10 -bottom-8" />
      </div>

      <div class="mt-20 w-[1166px] mx-auto">
        <div class="my-auto flex gap-6">
          <img src="/assets/board.png" alt="image" class="" />
            <div class="my-auto">
              <h6 class="text-2xl font-semibold text-lemonGreen mb-4">
                With Exhaustive Contextual Data
              </h6>
              <p class="text-xl font-medium pb-6  text-white">
                Most platforms rely solely on surface-level information like official program descriptions — but we see that as just the starting point.
              </p>
              <img src="/assets/Separator.svg" />
              <p class=" font-bold  text-white mb-3 mt-6">The real value comes from contextualizing this data:</p>
              <ul class="text-white text-base list-disc font-light ml-6 ">
                <li class="">What are people saying about these programs?</li>
                <li class="">How do employment trends align with program outcomes?</li>
                <li class="">What do government statistics reveal about job market demand and typical professional trajectories?</li>
              </ul>
              <p class="mt-2 text-white mb-6">By leveraging diverse data sources beyond basic listings, we deliver deeper, more meaningful insights that other platforms overlook.</p>
              <button class="btn-primary flex gap-3 ">
                Contact Us
                <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
              </button>
            </div>
          </div>
      </div>

      <div class="mt-20 w-[1166px] mx-auto">
        <div class="my-auto flex gap-6">
          <div class="my-auto">
            <h6 class="text-2xl font-semibold text-lemonGreen mb-4">
              Involving Human Expertise
              </h6>
              <p class="text-xl font-medium pb-6  text-white">
                While AI is powerful and holds great promise, it’s not a complete replacement for human insight.
              </p>
              <img src="/assets/Separator.svg" />
              <p class="mt-6 text-white mb-6 text-base font-light">We leverage cutting-edge technology to provide highly personalized recommendations, but we understand that reliable high-quality decisions often require a human touch. </p>
              <p class="mt-2 text-white mb-6 text-base font-light">That's why we partner with third-party agencies and independent consultants through our marketplace, offering users price-competitive, expert advice for the final, critical, steps.  </p>
              <p class="mt-2 text-white mb-6 text-base font-light">By combining AI-driven insights with human expertise, we set the grounds for the best possible outcomes for each user.</p>
              <button class="btn-primary flex gap-3 ">
                Contact Us
                <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
              </button>
            </div>
            <img src="/assets/lydia.png" alt="image" class="rounded-3xl" />
          </div>
      </div>


      <div class="mt-20 w-[1166px] mx-auto pb-24">
        <div class="my-auto flex gap-6">
          <img src="/assets/chip.png" alt="image" class="" />
            <div class="my-auto">
              <h6 class="text-2xl font-semibold text-lemonGreen mb-4">
                Leveraging Machine Learning
              </h6>
              <p class="text-xl font-medium pb-6  text-white">
                Thanks to recent advances in Natural Language Processing (NLP) and Large Language Models (LLMs), we can now process and model vast amounts of unstructured data at scale. 
              </p>
              <img src="/assets/Separator.svg" />
              <p class="mt-6 text-white mb-6 text-base font-light">This enables us to semantically understand and assess learning opportunities in ways that were previously unimaginable.</p>
              <p class="mt-2 text-white mb-6 text-base font-light">We don’t just recommend opportunities - we connect you to the ones that genuinely fit your goals and context. </p>
              <button class="btn-primary flex gap-3 ">
                Contact Us
                <img src="/assets/arrow.svg" class="my-auto" alt="logo" />
              </button>
            </div>
          </div>
      </div>

      <Toggles/>

      <div class="mt-24">
        <div class="w-[1166px] mx-auto mt-9">
          <div class="">
            <h5 class="text-xl font-semibold text-orange mb-2">About Us</h5>
            <h3 class="font-semibold text-[40px] text-white">
              Understand the Team
            </h3>
          </div>
          <div class="my-auto flex gap-6">
            <div class="my-auto">
              <h6 class="text-2xl font-semibold text-lemonGreen mb-4">
                Why Now?
              </h6>
              <p class="text-base tracking-[0.75%] font-light text-white">
                Recent breakthroughs in Natural Language Processing, Machine Learning, and Large Language Models have made it possible to process vast amounts of unstructured data at scale—something that was previously accessible to only a few.  <br />
                Now, this technology is commercially viable, just as the demand for personalized education and career guidance is rising. <br/>
                This convergence makes it the perfect time for a platform that delivers smarter, more contextual recommendations, moving beyond traditional search methods
              </p>
            </div>
            <img src="/assets/chineese.png" alt="image" class="" />
          </div>

          <div class="flex gap-6 mt-10 pb-24">
            <img src="/assets/training.png" alt="image" class="" />
            <div class="my-auto">
              <h6 class="text-2xl font-semibold text-lemonGreen mb-4">
                Why Now?
              </h6>
              <p class="text-base tracking-[0.75%] font-light text-white">
                Our team is composed of researchers and engineers with exceptional academic and professional track records.  <br />
                Many of us hold top-tier credentials in Natural Language Processing and related fields. We also bring expertise in data collection, processing, and warehousing. <br/>
                This unique combination of skills positions us strongly to deliver on the challenge.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact/>
      <Footer/>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


