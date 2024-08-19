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
          <p v-if="From">
            <Headline3>
              {{ From }}
            </Headline3>
          </p>
        </div>
      </div>
      <div v-if="From" class="text-end pe-6 pb-6">
        <p>
          <Headline2>
            {{ Price }}
          </Headline2>
        </p>
      </div>
      <div v-if="t_2" class="pe-6 pb-6 text-end xl:pt-[18px] pt-[13px]">
        <div class="flex flex-row items-end text-end justify-end">
          <div class="basis-8/12">
            <p>
              <Headline2>
                {{ t_2 }}
              </Headline2>
            </p>
          </div>
          <div class="basis-3/12">
            <Headline3 class="w-4/5">
              {{ t_3 }}
            </Headline3>
          </div>
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
    t_2: String,
    t_3: String,
  },
};
</script>
