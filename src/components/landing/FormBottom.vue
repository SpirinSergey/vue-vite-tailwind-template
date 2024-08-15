<script setup>
import BigButton from "../buttons/Big.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Paragraph3 from "../text/Paragraph3.vue";
</script>

<template>
  <div class="xl:basis-4/12 lg:basis-5/12 md:basis-6/12 basis-full px-2">
    <Paragraph2>
      <input
        type="text"
        class="bg-gray-200 w-full h-8 rounded-[10px] p-9 mb-6"
        :placeholder="$t('landing.forms.name')"
      />
    </Paragraph2>
    <Paragraph2>
      <input
        type="text"
        class="bg-gray-200 w-full h-8 rounded-[10px] p-9 lg:mb-0 mb-6"
        :placeholder="$t('landing.forms.email')"
      />
    </Paragraph2>
  </div>
  <div
    class="xl:basis-4/12 lg:basis-5/12 md:basis-6/12 basis-full px-2 lg:mb-0 mb-6"
  >
    <Paragraph2>
      <input
        type="text"
        class="bg-gray-200 w-full h-8 rounded-[10px] p-9 mb-6"
        :placeholder="$t('landing.forms.email')"
      />
    </Paragraph2>

    <Paragraph2>
      <input
        type="text"
        class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
        :placeholder="$t('landing.forms.message')"
      />
    </Paragraph2>
  </div>
  <div class="lg:basis-5/12 md:basis-6/12 basis-full px-2 xl:hidden">
    <Paragraph3>
      {{ $t("landing.block_7.p") }}
    </Paragraph3>
  </div>
  <div
    class="xl:basis-2/12 lg:basis-5/12 md:basis-6/12 basis-full px-2 xl:mt-0 mt-6"
  >
    <BigButton class="w-full">
      {{ $t("landing.buttons.submit") }}
    </BigButton>
  </div>
</template>
