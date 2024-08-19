<script setup>
import Paragraph1 from "../text/Paragraph1.vue";
</script>

<template>
  <button
    class="bg-green-600 text-white rounded-[5px] hover:rounded-[100px] px-[20px] py-[6px] duration-300 hover:bg-gray-600 hover:text-black"
  >
    <slot />
  </button>
</template>
