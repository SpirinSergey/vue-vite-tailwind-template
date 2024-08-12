<script setup>
import Container from "../../components/shared/Container.vue";
import Small from "../../components/buttons/Small.vue";
import Paragraph2 from "../../components/text/Paragraph2.vue";
import Paragraph3 from "../../components/text/Paragraph3.vue";
</script>

<template>
  <div
    v-if="showCookieConsent"
    class="fixed inset-x-0 bottom-0 z-[9999999] bg-black text-white bg-opacity-75"
  >
    <Container>
      <div class="mx-2 flex flex-row flex-wrap items-center py-3">
        <div class="mb-3 basis-full px-2 lg:mb-0 lg:basis-10/12">
          <div class="flex">
            <Paragraph2>
              {{ $t("landing.cookie.title") }}
            </Paragraph2>
            <Paragraph3>
              {{ $t("landing.cookie.description") }}
            </Paragraph3>
            <router-link
              to="/legal/privacy-policy"
              exact
              class="ps-2 text-green-600 hover:underline"
            >
              <Paragraph3>
                {{ $t("footer.privacy_policy") }}
              </Paragraph3>
            </router-link>
          </div>
        </div>
        <div class="basis-full px-2 text-end lg:basis-2/12">
          <Small class="mb-4 me-4 sm:mb-0 sm:me-0" @click="acceptCookies">
            {{ $t("landing.buttons.submit") }}
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
