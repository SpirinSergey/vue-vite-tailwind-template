<script setup>
import Container from "@shared/Container.vue";
import BlockSection from "@shared/BlockSection.vue";
import Headline1 from "@text/Headline1.vue";
import Headline3 from "@text/Headline3.vue";
import Paragraph2 from "@text/Paragraph2.vue";
</script>

<template>
  <!-- Privacy policy -  -->
  <BlockSection>
    <Container
      class="2xl:mt-[200px] xl:mt-[160px] md:mt-[120px] sm:mt-100 mt-80"
    >
      <div class="flex flex-row flex-wrap">
        <div
          v-for="(value, key, index) in messages"
          :key="index"
          class="basis-full px-2 xl:mb-[60px] lg:mb-12 mb-5"
        >
          <h1 v-if="value.h1" class="2xl:mb-[60px] md:mb-12 sm:mb-10 mb-8">
            <Headline1>
              {{ value.h1 }}
            </Headline1>
          </h1>
          <h2 v-if="value.h2" class="xl:mb-6 mb-5">
            <Headline3>
              {{ value.h2 }}
            </Headline3>
          </h2>
          <Paragraph2 v-if="value.p">
            {{ value.p }}
          </Paragraph2>
          <Paragraph2 v-if="value.p_1">
            {{ value.p_1 }}
          </Paragraph2>
          <ul v-if="value.ul">
            <li v-for="li in value.ul">
              <Paragraph2>
                {{ li }}
              </Paragraph2>
            </li>
          </ul>
          <Paragraph2 v-if="value.p_2">
            {{ value.p_2 }}
          </Paragraph2>
        </div>
      </div>
    </Container>
  </BlockSection>
</template>

<script>
export default {
  computed: {
    messages() {
      return this.$tm("PrivacyPolicy");
    },
  },
};
</script>
