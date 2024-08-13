<script setup>
import Headline2 from "../../text/Headline2.vue";
import Headline3 from "../../text/Headline3.vue";
import Headline4 from "../../text/Headline4.vue";
import Paragraph2 from "../../text/Paragraph2.vue";
</script>

<template>
  <div class="2lx:my-12 sm:my-8 my-6 w-full px-2 ">
    <div
      class="border-[1px] border-green-600 rounded-ss-[50px] rounded-ee-[50px]"
    >
      <div class="bg-gray-200 pb-6 pt-12 px-6 rounded-ss-[50px]">
        <div class="flex justify-between items-start">
          <h4>
            <Headline4 class="text-green-600">
              {{ Headline }}
            </Headline4>
          </h4>
          <img
            src="/public/img/icons/double_arrow.svg"
            class="h-[23px] w-[18px]"
            alt=""
          />
        </div>
      </div>
      <div class="flex justify-between items-center p-6">
        <Paragraph2>
          {{ From }}
        </Paragraph2>
        <img
          src="/img/icons/calendar.svg"
          alt=""
          class="md:w-[26px] w-6 h-auto"
        />
      </div>
      <div class="flex justify-between items-center pe-6 sm:mb-0 mb-6">
        <img
          src="/img/icons/lines.svg"
          alt=""
          class="md:w-[351px] sm:w-[341px] w-[137px]"
        />
        <div>
          <div class="flex flex-row items-end">
            <Headline3 class="lg:pb-2 pb-1.5">
              {{ Month }}
            </Headline3>
            <Headline2>
              {{ NumberTime }}
            </Headline2>
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
    From: String,
    Month: String,
    NumberTime: String,
  },
};
</script>
