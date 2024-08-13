<script setup>
import Container from "../shared/Container.vue";
import BlockSection from "../shared/BlockSection.vue";
import Headline3 from "../text/Headline3.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Link from "../text/Link.vue";
import Small from "../buttons/Small.vue";
</script>

<template>
  <BlockSection>
    <Container>
      <div
        class="flex flex-row flex-wrap border-t-[1px] border-green-600 pt-16 mx-2 justify-between"
      >
        <div class="basis-3/12 px-2">
          <img src="/img/logo.webp" alt="" class="w-[293px] h-[104px]" />
        </div>
        <div class="basis-3/12">
          <h3 class="mb-12">
            <Headline3 class="text-green-600">
              {{ $t("landing.footer.working_ours") }}
            </Headline3>
          </h3>
          <div class="flex justify-between mb-2">
            <Paragraph2>
              {{ $t("landing.footer.monday") }}
            </Paragraph2>
            <Paragraph2>
              {{ $t("landing.footer.time_1") }}
            </Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>
              {{ $t("landing.footer.tuesday") }}
            </Paragraph2>
            <Paragraph2>
              {{ $t("landing.footer.time_1") }}
            </Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>
              {{ $t("landing.footer.wednesday") }}
            </Paragraph2>
            <Paragraph2>
              {{ $t("landing.footer.time_1") }}
            </Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>
              {{ $t("landing.footer.thursday") }}
            </Paragraph2>
            <Paragraph2>
              {{ $t("landing.footer.time_1") }}
            </Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>
              {{ $t("landing.footer.friday") }}
            </Paragraph2>
            <Paragraph2>
              {{ $t("landing.footer.time_1") }}
            </Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>
              {{ $t("landing.footer.saturday") }}
            </Paragraph2>
            <Paragraph2>
              {{ $t("landing.footer.time_2") }}
            </Paragraph2>
          </div>
          <div class="flex justify-between mb-2">
            <Paragraph2>
              {{ $t("landing.footer.sunday") }}
            </Paragraph2>
            <Paragraph2>
              {{ $t("landing.footer.time_2") }}
            </Paragraph2>
          </div>
        </div>
        <div class="basis-5/12 px-2">
          <div class="border-b-[1px] border-green-600 pb-4 mb-8">
            <div class="flex">
              <router-link to="/legal/terms-of-us" exact>
                <Link class="me-[176px]">
                  {{ $t("landing.footer.terms") }}
                </Link>
              </router-link>
              <router-link to="/legal/privacy-policy" exact>
                <Link>
                  {{ $t("landing.footer.privacy") }}
                </Link>
              </router-link>
            </div>
          </div>
          <div class="mb-6">
            <a href="tel:+1 305-804-6752">
              <Paragraph2>
                {{ $t("landing.footer.tel") }}
              </Paragraph2>
            </a>
          </div>
          <div class="mb-6">
            <a href="mailto:info@polyusconsulting.com">
              <Paragraph2>
                info@polyusconsulting.com
              </Paragraph2>
            </a>
          </div>

          <div class="mb-12">
            <a href="">
              <Paragraph2>
                {{ $t("landing.footer.adress") }}
              </Paragraph2>
            </a>
          </div>
          <Small>
            {{ $t("landing.header.contact_us") }}
          </Small>
        </div>
      </div>
    </Container>
  </BlockSection>
</template>
