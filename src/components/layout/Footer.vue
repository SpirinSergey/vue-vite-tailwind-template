<script setup>
import Container from "../shared/Container.vue";
import BlockSection from "../shared/BlockSection.vue";
import Headline3 from "../text/Headline3.vue";
import Paragraph2 from "../text/Paragraph2.vue";
import Paragraph3 from "../text/Paragraph3.vue";
import Link from "../text/Link.vue";
import Small from "../buttons/Small.vue";
</script>

<template>
  <BlockSection id="footer">
    <Container>
      <div
        class="flex flex-row flex-wrap border-t-[1px] border-green-600 pt-16 md:justify-between mx-2 "
      >
        <div
          class="2xl:basis-3/12 xl:basis-2/12 lg:basis-3/12 md:basis-6/12 basis-full pe-2 lg:block hidden"
        >
          <div
            class="flex flex-col items-start md:justify-between 2xl:h-[319px] xl:h-[320px] lg:h-[286px] h-[310px]"
          >
            <img
              src="/img/logo.webp"
              :alt="$t('landing.footer.company')"
              class="2xl:w-[293px] h-auto"
            />
            <Paragraph3 class="mt-auto">
              {{ $t("landing.footer.company") }}
            </Paragraph3>
          </div>
        </div>
        <div
          class="xl:basis-3/12 lg:basis-3/12 md:basis-5/12 sm:basis-6/12 basis-9/12 md:order-2 order-last px-2 "
        >
          <img
            src="/img/logo.webp"
            :alt="$t('landing.footer.company')"
            class="md:w-[181px] sm:w-[341px] w-[287px] h-auto md:mt-0 md:my-8 sm:my-[60px] my-8 lg:hidden"
          />
          <h3 class="xl:mb-12 mb-8">
            <Headline3 class="text-green-600">{{
              $t("landing.footer.working_ours")
            }}</Headline3>
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
          <div class="md:hidden md:mt-16 sm:mt-14 mt-12">
            <Paragraph3>
              {{ $t("landing.footer.company") }}
            </Paragraph3>
          </div>
        </div>
        <div class="md:basis-5/12 basis-full ps-2 md:order-3">
          <div class="border-b-[1px] border-green-600 pb-4 mb-8">
            <div class="flex">
              <router-link to="/legal/terms-of-us" exact>
                <Link class="xl:me-[116px] md:me-12 me-9">
                  {{ $t("TermsOfUs[0].h1") }}
                </Link>
              </router-link>
              <router-link to="/legal/privacy-policy" exact>
                <Link>
                  {{ $t("PrivacyPolicy[0].h1") }}
                </Link>
              </router-link>
            </div>
          </div>
          <div class="flex items-start mb-6">
            <img
              src="/img/icons/icon_phone.svg"
              alt=""
              class="mt-1 me-2"
            />
            <img
              src="/img/icons/icon_whatsapp.svg"
              alt=""
              class="mt-1 me-4"
            />
            <a href="tel:+1 305-804-6752">
              <Paragraph2>
                {{ $t("landing.footer.tel") }}
              </Paragraph2>
            </a>
          </div>
          <div class="flex items-start mb-6">
            <img
              src="/img/icons/icon_email.svg"
              alt=""
              class="mt-1 me-4"
            />
            <a href="mailto:info@polyusconsulting.com">
              <Paragraph2>info@polyusconsulting.com</Paragraph2>
            </a>
          </div>

          <div class="flex items-start xl:mb-12 sm:mb-8 mb-5">
            <img src="/img/icons/icon_location.svg" alt="" class="mt-1 me-4" />
            <a href="">
              <Paragraph2 class="2xl:w-full lg:w-4/5">
                {{ $t("landing.footer.adress") }}
              </Paragraph2>
            </a>
          </div>
          <Small class="">
            {{ $t("landing.header.contact_us") }}
          </Small>
          <div class="lg:hidden md:block hidden md:mt-16 sm:mt-14 mt-12">
            <Paragraph3>
              {{ $t("landing.footer.company") }}
            </Paragraph3>
          </div>
        </div>
      </div>
    </Container>
  </BlockSection>
</template>

