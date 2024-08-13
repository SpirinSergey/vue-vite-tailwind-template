<script setup>
import Container from "../shared/Container.vue";
import SelectLanguages from "../shared/SelectLanguages.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Link from "../text/Link.vue";
</script>

<template>
  <Container>
    <nav class="py-8 border-b-[1px] border-green-600">
      <div class="flex flex-row items-center mx-2">
        <div class="basis-3/12 px-2">
          <RouterLink to="/">
            <img src="/img/logo.webp" alt="" class="w-[150px] h-auto" />
          </RouterLink>
        </div>
        <div class="basis-7/12 px-2">
          <ul class="flex justify-between">
            <li>
              <Link>
                {{ $t("landing.header.important") }}
              </Link>
            </li>
            <li>
              <Paragraph2>
                {{ $t("landing.header.advantages") }}
              </Paragraph2>
            </li>
            <li>
              <Paragraph2>
                {{ $t("landing.header.process") }}
              </Paragraph2>
            </li>
            <li>
              <Paragraph2>
                {{ $t("landing.header.reviews") }}
              </Paragraph2>
            </li>
            <li>
              <Paragraph2>
                {{ $t("landing.header.about_us") }}
              </Paragraph2>
            </li>
            <li>
              <Paragraph2>
                {{ $t("landing.header.contact_us") }}
              </Paragraph2>
            </li>
          </ul>
        </div>
        <div class="basis-2/12 px-2 text-end">
          <SelectLanguages />
        </div>
      </div>
    </nav>
  </Container>
</template>
