<script setup>
import Container from "../shared/Container.vue";
import SelectLanguages from "../shared/SelectLanguages.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Link from "../text/Link.vue";
</script>

<template>
  <Container>
    <nav class="py-8 border-b-[1px] border-green-600 mx-2">
      <div class="flex flex-row items-center justify-between">
        <div class="2xl:basis-3/12 lg:basis-2/12 sm:basis-3/12 basis-4/12 pe-2">
          <RouterLink to="/">
            <img src="/img/logo.webp" alt="" class="w-[150px] h-auto" />
          </RouterLink>
        </div>
        <div class="xl:basis-7/12 basis-8/12 px-2 lg:block hidden">
          <ul class="flex justify-between">
            <li>
              <a href="/#important">
                <Link>
                  {{ $t("landing.header.important") }}
                </Link>
              </a>
            </li>
            <li>
              <a href="/#advantages">
                <Link>
                  {{ $t("landing.header.advantages") }}
                </Link>
              </a>
            </li>
            <li>
              <a href="/#process">
                <Link>
                  {{ $t("landing.header.process") }}
                </Link>
              </a>
            </li>
            <li>
              <a href="/#reviews">
                <Link>
                  {{ $t("landing.header.reviews") }}
                </Link>
              </a>
            </li>
            <li>
              <a href="/#footer">
                <Link>
                  {{ $t("landing.header.about_us") }}
                </Link>
              </a>
            </li>
            <li>
              <a href="/#contact">
                <Link>
                  {{ $t("landing.header.contact_us") }}
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <div class="xl:basis-2/12 basis-1/12 ps-2 text-end">
          <SelectLanguages />
        </div>
      </div>
    </nav>
  </Container>
</template>
