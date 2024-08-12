<script setup>
import Headline2 from "../../text/Headline2.vue";
import Headline3 from "../../text/Headline3.vue";
import Headline4 from "../../text/Headline4.vue";
import Paragraph2 from "../../text/Paragraph2.vue";
</script>

<template>
  <div class="basis-1/2 px-2">
    <div
      class="border-[1px] border-red-600 rounded-ss-[50px] rounded-ee-[50px]"
    >
      <div class="h-[156px] bg-red-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
        <Paragraph2>
          {{ Headline }}
        </Paragraph2>
      </div>
      <div class="flex justify-between p-6">
        <img src="/public/img/icons/vertical_lines.svg" alt="" />
        <div>
          <p>
            <Paragraph2>
              {{ Pinalty }}
            </Paragraph2>
          </p>
          <p>
            <Headline3>
              {{ From }}
            </Headline3>
          </p>
        </div>
      </div>
      <div class="text-end pe-6">
        <div class="">
          <p>
            <Headline2>
              {{ Price }}
            </Headline2>
          </p>
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
  },
};
</script>
