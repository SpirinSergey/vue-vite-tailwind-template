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

          <ImgDoubleRedArrow class="h-[23px] w-[18px] rotate-[-90deg] md:block hidden" />
        </div>
      </div>
      <div class="flex flex-row lg:flex-wrap justify-between items-end p-6 ps-0">
        <div class="basis-full mb-6 lg:block hidden">
          <p class="lg:ps-6">
            <Paragraph2>
              {{ Pinalty }}
            </Paragraph2>
          </p>
        </div>
        <div class="lg:basis-6/12 basis-5/12">
          <ImgRedLines class="w-full h-auto" />
        </div>
        <div v-if="From" class="lg:basis-6/12 basis-7/12">
          <div class="text-end">
            <p class="my-4">
              <Paragraph2>
                {{ Pinalty }}
              </Paragraph2>
            </p>
            <p>
              <Headline3>
                {{ From }}
              </Headline3>
            </p>
            <p>
              <Headline2>
                {{ Price }}
              </Headline2>
            </p>
          </div>
        </div>
        <div v-if="t_2" class="lg:basis-6/12 basis-7/12 lg:hidden">
          <div class="flex flex-row flex-wrap items-end text-end justify-end">
            <p class="my-4">
              <Paragraph2>
                {{ Pinalty }}
              </Paragraph2>
            </p>
            <div class="flex">
              <div class="basis-8/12">
                <p>
                  <Headline2>
                    {{ t_2 }}
                  </Headline2>
                </p>
              </div>
              <div class="basis-4/12">
                <Headline3 class="w-4/5">
                  {{ t_3 }}
                </Headline3>
              </div>
            </div>
          </div>
        </div>
        <div v-if="t_2" class="bisis-6/12 lg:block hidden">
          <div class="flex flex-row flex-wrap items-end text-end justify-end">
            <div class="flex">
              <div class="basis-8/12">
                <p>
                  <Headline2>
                    {{ t_2 }}
                  </Headline2>
                </p>
              </div>
              <div class="basis-4/12">
                <Headline3 class="w-4/5">
                  {{ t_3 }}
                </Headline3>
              </div>
            </div>
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
