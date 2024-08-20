<script setup>
import Headline3 from "../text/Headline3.vue";
</script>

<template>
  <div>
    <div class="bg-gray-200 py-24 rounded-b-[30px] relative">
      <ul class="text-center">
        <li
          v-for="(item, key, index) in HeaderList"
          :key="index"
          class="pb-6"
          @click="OpenMobileMenu"
        >
          <a :href="'/#' + key">
            <Headline3>
              {{ item }}
            </Headline3>
          </a>
        </li>
      </ul>
      <img
        src="/img/icons/vertical_lines.svg"
        alt=""
        class="md:w-[220px] w-[120px] h-auto absolute right-0 top-0"
      />
      <img
        src="/img/icons/lines.svg"
        alt=""
        class="md:w-[350px] w-[280px] h-auto absolute left-0 bottom-0"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    HeaderList() {
      return this.$tm("landing.header");
    },
  },
};
</script>
