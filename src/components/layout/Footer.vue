<script setup>
import Container from "../shared/Container.vue";
import BlockSection from "../shared/BlockSection.vue";
import Headline3 from "../text/Headline3.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Small from "../buttons/Small.vue";
</script>

<template>
  <BlockSection>
    <Container>
      <div
        class="flex flex-row flex-wrap border-t-[1px] border-green-600 pt-16 mx-2"
      >
        <div class="basis-3/12 px-2">
          <img src="/public/img/logo.webp" alt="" class="w-[293px] h-[104px]" />
        </div>
        <div class="basis-3/12">
          <Headline3 class="text-green-600 mb-12"> Working ours </Headline3>
          <div class="flex justify-between mb-2">
            <Paragraph2>Monday</Paragraph2>
            <Paragraph2>9AM–5PM</Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>Tuesday</Paragraph2>
            <Paragraph2>9AM–5PM</Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>Wednesday</Paragraph2>
            <Paragraph2>9AM–5PM</Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>Thursday</Paragraph2>
            <Paragraph2>9AM–5PM</Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>Friday</Paragraph2>
            <Paragraph2>9AM–5PM</Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>Saturday</Paragraph2>
            <Paragraph2>Closed</Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>Sunday</Paragraph2>
            <Paragraph2>Closed</Paragraph2>
          </div>
        </div>
        <div class="basis-5/12">
          <div class="border-b-[1px] border-green-600 pb-4 mb-8">
            <Paragraph2>Terms of Us</Paragraph2>
            <Paragraph2>Privacy policy</Paragraph2>
          </div>
          <a href="tel:+1 305-804-6752">
            <Paragraph2>+1 305-804-6752</Paragraph2>
          </a>
          <a href="mailto:info@polyusconsulting.com">
            <Paragraph2>info@polyusconsulting.com</Paragraph2>
          </a>
          <a href="">
            <Paragraph2>1895 Tyler St, STE 404, Hollywood, FL 33020, US</Paragraph2>
          </a>
          <Small>Contact us</Small>
        </div>
      </div>
    </Container>
  </BlockSection>
</template>
