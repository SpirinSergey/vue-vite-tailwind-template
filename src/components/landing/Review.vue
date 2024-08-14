<script setup>
import Headline3 from "../text/Headline3.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Paragraph3 from "../text/Paragraph3.vue";
</script>

<template>
  <div class="basis-4/12 px-2 lg:block hidden">
    <div
      class="p-8 border-[1px] rounded-[30px]"
    >
      <div class="flex flex-col justify-between items-end  2xl:h-[290px] xl:h-[375px] lg:h-[400px]">
        <div class="basis-full">
          <div class="flex mb-6">
            <img :src="ImageReview" :alt="NameReview" class="w16 h-16" />
            <div class="ms-8">
              <h3 class="mb-4 pr-2">
                <Headline3 class="text-green-600">
                  {{ NameReview }}
                </Headline3>
              </h3>
              <img src="/img/icons/stars.svg" alt="" class="w-[132px] h-auto" />
            </div>
          </div>
          <div class="basis-full mt-auto">
            <Paragraph2 class="mb-8">
              {{ TextReview }}
            </Paragraph2>
          </div>
        </div>
      </div>
      <Paragraph3>
        {{ TimeReview }}
      </Paragraph3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ImageReview: String,
    NameReview: String,
    TextReview: String,
    TimeReview: String,
  },
};
</script>
