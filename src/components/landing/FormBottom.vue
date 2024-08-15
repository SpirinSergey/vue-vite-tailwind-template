<script setup>
import BigButton from "../buttons/Big.vue";
import Paragraph1 from "../text/Paragraph1.vue";
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
    class="group xl:basis-2/12 lg:basis-5/12 md:basis-6/12 basis-full xl:hover:basis-4/12 px-2 xl:mt-0 mt-6 "
  >
    <button
      class="w-full h-[72px] flex items-center bg-green-600 text-white rounded-[5px] group-hover:rounded-[100px] duration-300 group-hover:bg-gray-600 group-hover:text-black"
    >
      <Paragraph1
        class="group-hover:float-left w-full text-center "
      >
        {{ $t("landing.buttons.submit") }}
      </Paragraph1>
      <p
        class="text-xs font-Unbounded-Blond hidden xl:group-hover:block 2xl:pe-16 pe-10"
      >
        {{ $t("landing.block_7.p") }}
      </p>
    </button>
  </div>
</template>
