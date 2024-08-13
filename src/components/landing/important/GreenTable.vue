<script setup>
import Headline2 from "../../text/Headline2.vue";
import Headline3 from "../../text/Headline3.vue";
import Headline4 from "../../text/Headline4.vue";
import Paragraph2 from "../../text/Paragraph2.vue";
</script>

<template>
  <div class="2xl:basis-1/2 lg:basis-1/3 md:basis-1/2 basis-full px-2">
    <div
      class="border-[1px] border-green-600 rounded-ss-[50px] rounded-ee-[50px]"
    >
      <div class="h-[130px] bg-gray-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
        <Headline4 class="text-green-600">
          {{ Headline }}
        </Headline4>
      </div>
      <div class="flex justify-between p-6">
        <Paragraph2>
          {{ From }}
        </Paragraph2>
        <img
          src="/img/icons/calendar.svg"
          alt=""
          class="md:w-[26px] w-6 h-auto"
        />
      </div>
      <div class="flex justify-between pe-6">
        <img
          src="/img/icons/vertical_lines.svg"
          alt=""
          class="xl:w-[138px] h-auto w-[101px]"
        />
        <div class="flex flex-row items-center">
          <Headline3>
            {{ Month }}
          </Headline3>
          <Headline2 class="pb-3">
            {{ NumberTime }}
          </Headline2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Headline: String,
    From: String,
    Month: String,
    NumberTime: String,
  },
};
</script>
