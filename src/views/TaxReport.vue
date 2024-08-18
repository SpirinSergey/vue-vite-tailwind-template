<script setup>
import Container from "../components/shared/Container.vue";
import BlockSection from "../components/shared/BlockSection.vue";
import BigButton from "../components/buttons/Big.vue";
import Headline1 from "../components/text/Headline1.vue";
import Headline2 from "../components/text/Headline2.vue";
import Headline3 from "../components/text/Headline3.vue";
import Headline4 from "../components/text/Headline4.vue";
import Paragraph1 from "../components/text/Paragraph1.vue";
import Paragraph2 from "../components/text/Paragraph2.vue";
import Paragraph3 from "../components/text/Paragraph3.vue";

import Review from "../components/landing/Review.vue";
import ListAdvantage from "../components/landing/ListAdvantage.vue";
import FormBottom from "../components/landing/FormBottom.vue";

// important
import GreenTableFull from "../components/landing/important/GreenTableFull.vue";
import GreenTable from "../components/landing/important/GreenTable.vue";
import RedTable from "../components/landing/important/RedTable.vue";
import RedTableFull from "../components/landing/important/RedTableFull.vue";
</script>

<template>
  <!-- Block - 1 - TOP -->
  <BlockSection>
    <Container
      class=""
    >
      <div
        class="flex flex-row flex-wrap items-center xl:justify-between justify-center border-b-[1px] border-green-600 2xl:mt-14 xl:mt-12 md:mt-32 sm:mt-24 mt-20 2xl:pb-14 xl:pb-32 md:pb-24 sm:pb-20 pb-16 mx-2"
      >
        <div
          class="basis-full sm:basis-10/12 xl:basis-5/12 xl:pe-2 xl:text-left text-center"
        >
          <h1 class="mb-5 sm:mb-6 xl:mb-8">
            <Headline1>
              {{ $t("landing.block_1.h1") }}
            </Headline1>
          </h1>
          <p class="mb-6 sm:mb-8 xl:mb-12">
            <Headline4>
              {{ $t("landing.block_1.p") }}
            </Headline4>
          </p>
          <BigButton class="mb-8 xl:mb-0">
            {{ $t("landing.buttons.apply_now") }}
          </BigButton>
        </div>
        <div class="basis-full sm:basis-10/12 xl:basis-6/12 xl:ps-2">
          <img
            src="/img/preparation_tax_report.webp"
            alt="Preparation of the annual tax reporting"
            class="h-auto w-full"
          />
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 2 - IMPORTANT -->
  <BlockSection id="important"> 
    <Container>
      <div
        class="flex flex-row flex-wrap justify-between 2xl:mb-[180px] xl:mb-[140px] md:mb-[100px] sm:md-[80px] mb-[60px]"
      >
        <div
          class="2xl:basis-5/12 basis-full 2xl:mb-0 xl:mb-[72px] md:mb-12 sm:mb-10 mb-8"
        >
          <div
            class="flex flex-row flex-wrap md:justify-between lg:items-start md:items-center justify-center"
          >
            <div
              class="2xl:basis-full xl:basis-7/12 lg:basis-6/12 md:basis-7/12 basis-full px-2"
            >
              <div
                class="flex items-start justify-between xl:mb-[60px] md:mb-12 sm:mb-10 mb-8"
              >
                <h2>
                  <Headline2>
                    {{ $t("landing.block_2.h2") }}
                  </Headline2>
                </h2>
                <img
                  src="/public/img/icons/double_arrow.svg"
                  class="sm:h-9 sm:w-7 h-[21px] w-[16px]"
                  alt=""
                />
              </div>
              <Paragraph1 class="2xl:mb-[96px] md:mb-0 sm:mb-10 mb-8">
                {{ $t("landing.block_2.p") }}
              </Paragraph1>
            </div>
            <div
              class="2xl:basis-full xl:basis-4/12 md:basis-5/12 sm:basis-10/12 basis-full px-2"
            >
              <img src="/img/important_img.svg" alt="" class="w-full h-auto" />
            </div>
          </div>
        </div>
        <div class="2xl:basis-6/12 basis-full">
          <div
            class="border-b-[1px] border-green-600 xl:pb-12 xl:mb-12 sm:pb-8 sm:mb-8 pb-6 mb-6 mx-2"
          >
            <h3>
              <Headline3>
                {{ $t("landing.block_2.h3_1") }}
              </Headline3>
            </h3>
          </div>
          <GreenTableFull
            class="2xl:block hidden"
            :key="ImportantGreen[0].id"
            :Headline="ImportantGreen[0].Headline"
            :From="ImportantGreen[0].From"
            :Month="ImportantGreen[0].Month"
            :NumberTime="ImportantGreen[0].NumberTime"
          />
          <div class="md:block hidden">
            <div class="flex flex-row flex-wrap">
              <GreenTable
                v-for="(important, index) in ImportantGreen"
                :key="index"
                :Headline="important.Headline"
                :From="important.From"
                :Month="important.Month"
                :NumberTime="important.NumberTime"
                :class="{
                  '2xl:hidden': index === 0,
                  'hidden lg:block': index === 1,
                }"
              />
            </div>
          </div>
          <GreenTableFull
            class="lg:hidden md:block hidden"
            :key="ImportantGreen[2].id"
            :Headline="ImportantGreen[2].Headline"
            :From="ImportantGreen[2].From"
            :Month="ImportantGreen[2].Month"
            :NumberTime="ImportantGreen[2].NumberTime"
          />
          <GreenTableFull
            class="md:hidden"
            v-for="(important, index) in ImportantGreen"
            :key="index"
            :Headline="important.Headline"
            :From="important.From"
            :Month="important.Month"
            :NumberTime="important.NumberTime"
          />
        </div>
      </div>

      <div class="flex flex-row flex-wrap justify-between">
        <div class="2xl:basis-6/12 basis-full">
          <div
            class="border-b-[1px] border-red-600 xl:pb-12 xl:mb-12 sm:pb-8 sm:mb-8 pb-6 mb-6 mx-2"
          >
            <h3>
              <Headline3>
                {{ $t("landing.block_2.h3_2") }}
              </Headline3>
            </h3>
          </div>
          <RedTableFull
            class="2xl:block hidden"
            :key="ImportantRed[0].id"
            :Headline="ImportantRed[0].Headline"
            :Pinalty="ImportantRed[0].Pinalty"
            :From="ImportantRed[0].From"
            :Price="ImportantRed[0].Price"
          />
          <div class="md:block hidden">
            <div class="flex flex-row flex-wrap">
              <RedTable
                v-for="(important, index) in ImportantRed"
                :key="index"
                :Headline="important.Headline"
                :Pinalty="important.Pinalty"
                :From="important.From"
                :Price="important.Price"
                :Tumbler="important.Tumbler"
                :class="{
                  '2xl:hidden': index === 0,
                  'hidden lg:block': index === 1,
                }"
              />
            </div>
          </div>
          <RedTableFull
            class="lg:hidden md:block hidden"
            :key="ImportantRed[2].id"
            :Headline="ImportantRed[2].Headline"
            :Pinalty="ImportantRed[2].Pinalty"
            :From="ImportantRed[2].From"
            :Price="ImportantRed[2].Price"
            :Tumbler="ImportantRed[2].Tumbler"
            :Tumbler2="ImportantRed[2].Tumbler2"
          />
          <RedTableFull
            class="md:hidden"
            v-for="(important, index) in ImportantRed"
            :key="index"
            :Headline="important.Headline"
            :Pinalty="important.Pinalty"
            :From="important.From"
            :Price="important.Price"
            :Tumbler="important.Tumbler"
            :Tumbler2="important.Tumbler2"
          />
        </div>
        <div
          class="2xl:basis-6/12 basis-full 2xl:mt-0 xl:mt-[80px] sm:mt-[28px] mt-6 px-2 2xl:pt-[76px]"
        >
          <div
            class="flex flex-row flex-wrap 2xl:justify-end justify-center 2xl:items-start items-center"
          >
            <div
              class="2xl:basis-1/6 lg:basis-1/12 px-2 lg:block hidden 2xl:order-1 order-2"
            >
              <img
                src="/img/icons/!.svg"
                alt=""
                class="ml-auto 2xl:w-8 h-auto xl:w-6 lg:w-7"
              />
            </div>
            <div
              class="2xl:basis-5/6 lg:basis-7/12 md:basis-6/12 basis-full sm:px-2 2xl:order-2 md:order-3 md:mb-0 sm:mb-6 mb-5"
            >
              <Paragraph2>
                {{ $t("landing.block_2.p_b") }}
              </Paragraph2>
            </div>
            <div
              class="2xl:basis-5/6 lg:basis-4/12 md:basis-6/12 basis-full sm:px-2 2xl:order-3 md:order-1"
            >
              <img src="/img/penalties_img.svg" alt="" class="w-full h-auto" />
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 3 - POLYUS CONSULTING ADVANTAGES -->
  <BlockSection id="advantages">
    <Container>
      <div
        class="flex flex-row flex-wrap 2xl:justify-evenly justify-between 2xl:border-[1px] 2xl:border-green-600 2xl:rounded-[50px] 2xl:py-20"
      >
        <div
          class="2xl:basis-4/12 xl:basis-5/12 lg:basis-6/12 basis-full px-2 lg:order-1 order-2"
        >
          <h2 class="xl:mb-[78px] lg:mb-[58px] lg:block hidden">
            <Headline2>
              {{ $t("landing.block_3.h2") }}
            </Headline2>
          </h2>
          <img src="/img/advantages.webp" alt="" class="w-full h-auto" />
        </div>
        <div
          class="2xl:basis-5/12 lg:basis-6/12 basis-full px-2 lg:order-2 order-1"
        >
          <h2 class="sm:mb-[60px] mb-12 lg:hidden">
            <Headline2>
              {{ $t("landing.block_3.h2") }}
            </Headline2>
          </h2>
          <ListAdvantage
            v-for="(list, index) in ListAdvantages"
            :key="index"
            :Headline="list.Headline"
            :Text="list.Text"
          />
          <BigButton class="xl:mt-8 sm:mt-4 mt-2 lg:mt-0 2xl:mb-0 sm:mb-14 mb-12">
            {{ $t("landing.buttons.apply_now") }}
          </BigButton>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 4 - PROCESS -->
  <BlockSection id="process">
    <Container>
      <div class="flex flex-row flex-wrap">
        <div class="2xl:basis-4/12 xl:basis-5/12 basis-full px-2">
          <div
            class="flex flex-row flex-wrap justify-between xl:border-none border-b-[1px] border-green-600 xl:pb-0 sm:pb-8 pb-6 xl:mb-0 sm:mb-8 mb-6"
          >
            <div class="xl:basis-full lg:basis-4/12 md:basis-5/12 basis-full">
              <h2 class="xl:mb-[60px] md:mb-0 sm:mb-8 mb-6">
                <Headline2>
                  {{ $t("landing.block_4.h2") }}
                </Headline2>
              </h2>
            </div>
            <div class="xl:basis-full lg:basis-8/12 md:basis-7/12 basis-full">
              <Paragraph2 class="xl:mb-[60px]">
                {{ $t("landing.block_4.p") }}
              </Paragraph2>
            </div>
          </div>
          <BigButton class="xl:block hidden">
            {{ $t("landing.buttons.apply_now") }}
          </BigButton>
        </div>
        <div class="2xl:basis-8/12 xl:basis-7/12 basis-full px-2">
          <img src="/img/process_img.svg" alt="" class="w-full h-auto" />
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 5 - REVIEWS -->
  <BlockSection id="reviews">
    <Container>
      <div class="flex flex-row flex-wrap">
        <div class="basis-full px-2 xl:mb-[60px] md:mb-12 sm:mb-10 mb-8">
          <h2>
            <Headline2>
              {{ $t("landing.block_5.h2") }}
            </Headline2>
          </h2>
        </div>
        <Review
          v-for="(review, index) in Reviews"
          :key="index"
          :ImageReview="review.ImageReview"
          :NameReview="review.NameReview"
          :TextReview="review.TextReview"
          :TimeReview="review.TimeReview"
        />
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 6 - PRICE -->
  <BlockSection id="about_us">
    <Container>
      <div
        class="flex flex-row flex-wrap items-center md:justify-between justify-center"
      >
        <div
          class="2xl:basis-5/12 lg:basis-4/12 md:basis-5/12 sm:basis-10/12 basis-full px-2 md:order-first order-last"
        >
          <img src="/img/price_img.svg" alt="" class="w-full h-auto" />
        </div>
        <div
          class="2xl:basis-6/12 xl:7/12 lg:basis-8/12 md:basis-7/12 basis-full px-2 md:order-last order-first"
        >
          <div
            class="border-[1px] border-green-600 rounded-ss-[50px] rounded-ee-[50px] md:mb-12 mb-2"
          >
            <div
              class="xl:flex justify-between items-center bg-green-200 pb-8 pt-12 ps-8 rounded-ss-[50px]"
            >
              <h2>
                <Headline1>
                  {{ $t("landing.block_6.h2") }}
                </Headline1>
              </h2>
              <p class="pe-8 xl:block hidden">
                <Headline3 class="text-green-600">
                  {{ $t("landing.block_6.hp") }}
                </Headline3>
              </p>
            </div>
            <p class="p-8 xl:hidden block">
              <Headline3 class="text-green-600">
                {{ $t("landing.block_6.hp") }}
              </Headline3>
            </p>
            <div class="m-8 xl:mt-8 mt-0 border-t-[1px] border-green-600 pt-8">
              <Paragraph2 class="xl:pb-2 pb-3">
                {{ $t("landing.block_6.p") }}
              </Paragraph2>
              <img
                src="/img/icons/lines.svg"
                alt=""
                class="transform scale-x-[-1] ml-auto xl:block hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 7 - CONTACT US -->
  <BlockSection id="contact">
    <Container>
      <div class="flex flex-row flex-wrap xl:items-end items-center md:justify-start justify-center">
        <div
          class="basis-full xl:mb-[60px] md:mb-12 sm:mb-10 mb-8 px-2 md:text-start sm:text-center text-start flex sm:justify-center md:justify-start"
        >
          <h2>
            <Headline2>
              {{ $t("landing.block_7.h2") }}
            </Headline2>
          </h2>
        </div>
        <FormBottom />
      </div>
    </Container>
  </BlockSection>
</template>

<script>
export default {
  data() {
    return {
      ImportantGreen: [
        {
          Headline: this.$t("landing.block_2.green_table_1.h4"),
          From: this.$t("landing.block_2.green_table_1.p_1"),
          Month: this.$t("landing.block_2.green_table_1.p_2"),
          NumberTime: this.$t("landing.block_2.green_table_1.p_3"),
        },
        {
          Headline: this.$t("landing.block_2.green_table_2.h4"),
          From: this.$t("landing.block_2.green_table_2.p_1"),
          Month: this.$t("landing.block_2.green_table_2.p_2"),
          NumberTime: this.$t("landing.block_2.green_table_2.p_3"),
        },
        {
          Headline: this.$t("landing.block_2.green_table_3.h4"),
          From: this.$t("landing.block_2.green_table_3.p_1"),
          Month: this.$t("landing.block_2.green_table_3.p_2"),
          NumberTime: this.$t("landing.block_2.green_table_3.p_3"),
        },
      ],
      ImportantRed: [
        { 
          Headline: this.$t("landing.block_2.red_table_1.h4"),
          Pinalty: this.$t("landing.block_2.red_table_1.p_1"),
          From: this.$t("landing.block_2.red_table_1.p_2"),
          Price: this.$t("landing.block_2.red_table_1.p_3"),
          Tumbler: true,
        },
        {
          Headline: this.$t("landing.block_2.red_table_2.h4"),
          Pinalty: this.$t("landing.block_2.red_table_2.p_1"),
          From: this.$t("landing.block_2.red_table_2.p_2"),
          Price: this.$t("landing.block_2.red_table_2.p_3"),
        },
        {
          Headline: this.$t("landing.block_2.red_table_3.h4"),
          Pinalty: this.$t("landing.block_2.red_table_3.p_1"),
          From: this.$t("landing.block_2.red_table_3.p_2"),
          Price: this.$t("landing.block_2.red_table_3.p_3"),
          Tumbler2: true,
        },
      ],
      ListAdvantages: [
        {
          Headline: this.$t("landing.block_3.h3_1"),
          Text: this.$t("landing.block_3.p_1"),
        },
        {
          Headline: this.$t("landing.block_3.h3_2"),
          Text: this.$t("landing.block_3.p_2"),
        },
        {
          Headline: this.$t("landing.block_3.h3_3"),
          Text: this.$t("landing.block_3.p_3"),
        },
      ],
      Reviews: [
        {
          ImageReview: "/img/rewie_aidar.svg",
          NameReview: this.$t("landing.block_5.rewiew_1.name"),
          TextReview: this.$t("landing.block_5.rewiew_1.text"),
          TimeReview: "08.14.2023",
        },
        {
          ImageReview: "/img/rewie_svetlana.svg",
          NameReview: this.$t("landing.block_5.rewiew_2.name"),
          TextReview: this.$t("landing.block_5.rewiew_2.text"),
          TimeReview: "03.27.2024",
        },
        {
          ImageReview: "/img/rewie_aidar.svg",
          NameReview: this.$t("landing.block_5.rewiew_3.name"),
          TextReview: this.$t("landing.block_5.rewiew_3.text"),
          TimeReview: "07.27.2024",
        },
      ],
    };
  },
};
</script>
