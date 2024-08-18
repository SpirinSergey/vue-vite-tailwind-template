<script setup>
import Headline2 from "../../text/Headline2.vue";
import Headline3 from "../../text/Headline3.vue";
import Headline4 from "../../text/Headline4.vue";
import Paragraph2 from "../../text/Paragraph2.vue";
import ImgDoubleRedArrow from "../../landing/important/ImgDoubleRedArrow.vue";
import ImgRedLines from "../../landing/important/ImgRedLines.vue";
</script>

<template>
  <div class="2lx:my-12 sm:my-8 my-6 w-full px-2">
    <div
      class="border-[1px] border-red-600 rounded-ss-[50px] rounded-ee-[50px]"
    >
      <div class="bg-red-200 pb-6 pt-12 px-6 rounded-ss-[50px]">
        <div class="flex justify-between items-start">
          <h4>
            <Paragraph2>
              {{ Headline }}
            </Paragraph2>
          </h4>

          <ImgDoubleRedArrow class="h-[23px] w-[18px] rotate-[-90deg]" />
        </div>
      </div>
      <div class="flex justify-between items-center p-6">
        <Paragraph2>
          {{ Pinalty }}
        </Paragraph2>
        <p v-if="Tumbler === true">
          <Headline3>
            {{ From }}
          </Headline3>
        </p>
      </div>
      <div class="flex flex-row justify-between items-center pe-8 sm:mb-0 mb-6">
        <ImgRedLines class="md:w-[351px] sm:w-[341px] w-[137px]" />
       <p v-if="Tumbler === true">
          <Headline3>
            {{ From }}
          </Headline3>
        </p>
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
    Tumbler2: Boolean,
  },
};
</script>
