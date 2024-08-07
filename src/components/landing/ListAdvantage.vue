<script setup>
import Headline3 from "../text/Headline3.vue";
import Paragraph2 from "../text/Paragraph2.vue";
</script>

<template>
  <div class="border-b-[1px] border-green-600 mb-8">
    <h3 class="mb-4">
      <Headline3 class="text-green-600">
        {{ Headline }}
      </Headline3>
    </h3>
    <Paragraph2 class="pb-4">
      {{ Text }}
    </Paragraph2>
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
