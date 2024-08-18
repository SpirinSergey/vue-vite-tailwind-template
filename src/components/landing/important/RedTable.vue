<script setup>
import Headline2 from "../../text/Headline2.vue";
import Headline3 from "../../text/Headline3.vue";
import Headline4 from "../../text/Headline4.vue";
import Paragraph2 from "../../text/Paragraph2.vue";
import ImgRedVerticalLines from "../../landing/important/ImgRedVerticalLines.vue";
</script>

<template>
  <div class="2xl:basis-1/2 lg:basis-1/3 md:basis-1/2 basis-full px-2">
    <div
      class="border-[1px] border-red-600 rounded-ss-[50px] rounded-ee-[50px]"
    >
      <div class="h-[156px] bg-red-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
        <Paragraph2>
          {{ Headline }}
        </Paragraph2>
      </div>
      <div class="flex justify-between items-start pe-6">
        <ImgRedVerticalLines class="transform scale-x-[-1] w-24 h-auto" />
        <div class="text-end">
          <p class="my-4">
            <Paragraph2>
              {{ Pinalty }}
            </Paragraph2>
          </p>
          <p v-if="Tumbler !== true">
            <Headline3>
              {{ From }}
            </Headline3>
          </p>
        </div>
      </div>
      <div v-if="Tumbler !== true" class="text-end pe-6 pb-6">
        <div class="">
          <p>
            <Headline2>
              {{ Price }}
            </Headline2>
          </p>
        </div>
      </div>
      <div v-if="Tumbler === true" class="flex flex-row justify-end items-end text-end pe-6 pb-6 pt-5">
          <div>
            <Headline2 class="lg:pb-2 pb-1.5">
              {{ From }}
            </Headline2>
          </div>
          <div class=" w-[28%]">
            <Headline3 >
              {{ Price }}
            </Headline3>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Headline: String,
    Pinalty: String,
    From: String,
    Price: String,
    Tumbler: Boolean,
  },
};
</script>
