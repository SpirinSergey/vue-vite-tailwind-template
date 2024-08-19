<script setup>
import Container from "../../components/shared/Container.vue";
import Small from "../../components/buttons/Small.vue";
import Paragraph2 from "../../components/text/Paragraph2.vue";
import Paragraph3 from "../../components/text/Paragraph3.vue";
</script>

<template>
  <div
    v-if="showCookieConsent"
    class="fixed w-full inset-x-0 bottom-0 z-50 "
  >
    <Container>
      <div
        class="flex flex-row sm:flex-wrap flex-wrap items-center md:justify-between justify-center py-6 opacity-90 bg-gray-700 text-white rounded-t-[20px] mx-2"
      >
        <div
          class="basis-full md:text-start text-center px-6 2xl:basis-9/12 xl:basis-10/12 md:basis-9/12"
        >
          <p class="md:mb-0 mb-6">
            <Paragraph2>
              {{ $t("landing.cookie.title") }}
            </Paragraph2>
            <Paragraph3>
              {{ $t("landing.cookie.description") }}
            </Paragraph3>
            <router-link
              to="/legal/privacy-policy"
              exact
              class="ps-2 hover:underline"
            >
              <Paragraph3>
                {{ $t("PrivacyPolicy[0].h1") }}
              </Paragraph3>
            </router-link>
          </p>
        </div>
        <div class="basis-full px-6 md:text-end text-center 2xl:basis-3/12 xl:basis-2/12 md:basis-3/12">
          <Small
            class="mb-4 me-4 sm:mb-0 sm:me-0 text-black bg-gray-600"
            @click="acceptCookies"
          >
            <button>
              <Paragraph2>
                {{ $t("landing.buttons.accept") }}
              </Paragraph2>
            </button>
          </Small>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookieConsent: false,
    };
  },
  created() {
    this.checkCookieConsent();
  },
  methods: {
    checkCookieConsent() {
      const consent = this.$cookies.get("cookie-consent");
      if (!consent) {
        this.showCookieConsent = true;
      }
    },
    acceptCookies() {
      this.$cookies.set("cookie-consent", "accepted", "30d");
      this.showCookieConsent = false;
    },
  },
};
</script>
