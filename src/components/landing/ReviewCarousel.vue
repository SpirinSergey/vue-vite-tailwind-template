<script setup>
import Headline3 from "../text/Headline3.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Paragraph3 from "../text/Paragraph3.vue";
</script>


<template>
  <carousel :items-to-show="1">
    <slide v-for="(review, index) in reviews" :key="index">
      <div class="p-8 border-[1px] rounded-[30px]">
        <div
          class="flex flex-col text-start items-end md:h-[180px] sm:h-[180px] h-[220px]"
        >
          <div class="basis-full text-start">
            <div class="flex mb-6">
              <img :src="review.img" :alt="review.name" class="w-16 h-16" />
              <div class="ms-8">
                <h3 class="mb-4 pr-2">
                  <Headline3 class="text-green-600">
                    {{ review.name }}
                  </Headline3>
                </h3>
                <img
                  src="/img/icons/stars.svg"
                  alt=""
                  class="w-[132px] h-auto"
                />
              </div>
            </div>
            <div class="basis-full text-start mt-auto">
              <p>
                <Paragraph2 class="mb-8">
                  {{ review.text }}
                </Paragraph2>
              </p>
            </div>
          </div>
        </div>
        <Paragraph3>
          {{ review.time }}
        </Paragraph3>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "ReviewCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  computed: {
    reviews() {
      return this.$tm("landing.block_5.rewiew");
    },
  },
};
</script>
