<script setup>
import Paragraph1 from "../text/Paragraph1.vue";
</script>

<template>
  <button
    class="bg-green-600 text-white rounded-[5px] hover:rounded-[100px] px-[60px] py-[16px] duration-300  hover:bg-gray-600 hover:text-black"
  >
    <Paragraph1>
      <slot />
    </Paragraph1>
  </button>
</template>