<script setup>
import Container from "../shared/Container.vue";
import BlockSection from "../shared/BlockSection.vue";
</script>

<template>
  <BlockSection>
    <Container>
      <div class="flex flex-row flex-wrap border-t-[1px] border-green-600 pt-16 mx-2">
        <div class="basis-3/12 px-2">
          <img src="/public/img/logo.webp" alt="" class="w-[293px] h-[104px]" />
        </div>
        <div class="basis-3/12"></div>
        <div class="basis-5/12"></div>
      </div>
    </Container>
  </BlockSection>
</template>
