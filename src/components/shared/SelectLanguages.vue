<script setup>
import Paragraph1 from "../text/Paragraph1.vue";
</script>

<template>
  <div
    class="locale-changer flex border-green-600 border-[2px] rounded-[5px] hover:rounded-[10px] hover:bg-green-600 hover:text-white duration-300"
  >
    <!-- Перебираем массив языков и создаем кнопки для каждого языка -->
    <button
      v-for="(lang, i) in langs"
      :key="`Lang${i}`"
      :class="{ active: $i18n.locale === lang }"
      :style="{ order: $i18n.locale === lang ? 1 : 0 }"
      @click="changeLocale(lang)"
    >
      <div class="flex">
        <img src="/public/img/icons/arrow.svg" alt="" class="me-1" />
        <Paragraph1>
          {{ lang }}
        </Paragraph1>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: ["ru", "en"], // Массив доступных языков
    };
  },
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.locale-changer button {
  padding: 4px 8px 3px 8px;
  border: none;
  cursor: pointer;
  display: none;
}

.locale-changer:hover button {
  display: block !important;
}

.locale-changer:hover img {
  display: none !important;
}

.locale-changer button.active {
  display: block;
  order: 1; /* Активная кнопка всегда будет справа */
}

.locale-changer:hover button.active {
  color: grey;
}
</style>
