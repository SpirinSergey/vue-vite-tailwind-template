<script setup>
import BigButton from "../buttons/Big.vue";
import Paragraph2 from "../text/Paragraph2.vue";
</script>

<template>
  <div class="basis-4/12 px-2">
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
        class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
        :placeholder="$t('landing.forms.email')"
      />
    </Paragraph2>
  </div>
  <div class="basis-4/12 px-2">
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
  <div class="basis-2/12">
    <BigButton>
        {{ $t("landing.buttons.submit") }}
    </BigButton>
  </div>
</template>
