<template>
  <div
    class="locale-changer md:flex border-green-600 border-[2px] rounded-[5px] hover:rounded-[10px] hover:bg-green-600 hover:text-white duration-300 hidden"
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

        <span class="font-Unbounded-Medium text-p1 md:text-p1-md xl:text-p1-xl">
          {{ lang }}
        </span>
      </div>
    </button>
  </div>

  <div class="bg-green-600 rounded-[5px] text-white md:hidden">
    <select v-model="$i18n.locale" class="bg-green-600 rounded-[5px] p-2">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        <div class="bg-green-600">
          <p class="font-Unbounded-Medium text-p1 md:text-p1-md xl:text-p1-xl">
            {{ lang }}
          </p>
        </div>
      </option>
    </select>
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
  padding: 0 23px 0 5px;
  border: none;
  cursor: pointer;
  display: none;
}
@media screen and (min-width: 1024px) {
  .locale-changer button {
    padding: 10px 8px !important;
  }

  .locale-changer:hover button {
    padding: 10px 8px !important;
  }
}

.locale-changer:hover button {
  display: block !important;
  padding: 0 20px 0 15px;
}

.locale-changer:hover img {
  display: none !important;
}

.locale-changer button.active {
  display: block;
  order: 1; /* Активная кнопка всегда будет справа */
}

.locale-changer:hover button.active {
  color: #c3c3c3;
}

.locale-changer span {
  line-height: 1 !important;
}
</style>
