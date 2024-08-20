<script setup>
import Headline3 from "../text/Headline3.vue";
import Paragraph2 from "../text/Paragraph2.vue";
</script>

<template>
  <div class="border-b-[1px] border-green-600 xl:mb-8 sm:mb-6 mb-5">
    <h3 class="mb-4">
      <Headline3 class="text-green-600">
        {{ Headline }}
      </Headline3>
    </h3>
    <p class="pb-4">
      <Paragraph2>
        {{ Text }}
      </Paragraph2>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    Headline: String,
    Text: String,
  },
};
</script>
