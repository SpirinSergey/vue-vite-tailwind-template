<script setup>
import Container from "../shared/Container.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Paragraph1 from "../text/Paragraph1.vue";
</script>

<template>
  <Container class="">
    <nav class="py-8 border-b-[1px] border-green-600">
      <div class="flex flex-row items-center mx-2">
        <div class="basis-3/12 px-2">
          <RouterLink to="/">
            <img src="/public/img/logo.webp" alt="" class="w-[150px] h-auto" />
          </RouterLink>
        </div>
        <div class="basis-7/12 px-2">
          <ul class="flex justify-between">
            <li>
              <Paragraph2>Important</Paragraph2>
            </li>
            <li>
              <Paragraph2>Advantages</Paragraph2>
            </li>
            <li>
              <Paragraph2>Process</Paragraph2>
            </li>
            <li>
              <Paragraph2>Reviews</Paragraph2>
            </li>
            <li>
              <Paragraph2>About us</Paragraph2>
            </li>
            <li>
              <Paragraph2>Contact us</Paragraph2>
            </li>
          </ul>
        </div>
        <div class="basis-2/12 px-2 text-end">
          <Paragraph1> en </Paragraph1>
        </div>
      </div>
    </nav>
  </Container>
</template>
