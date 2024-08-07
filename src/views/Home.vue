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
</script>

<template>
  <!-- Block - 1 - TOP -->
  <BlockSection>
    <Container class="border-b-[1px] border-green-600 py-14">
      <div class="flex flex-row items-center justify-between mx-2">
        <div class="basis-5/12 px-2">
          <h1 class="mb-8">
            <Headline1>
              {{ $t("landing.block_1.h1") }}
            </Headline1>
          </h1>
          <p class="mb-12">
            <Headline4>
              {{ $t("landing.block_1.p") }}
            </Headline4>
          </p>
          <BigButton>
            {{ $t("landing.buttons.apply_now") }}
          </BigButton>
        </div>
        <div class="basis-6/12 px-2">
          <img
            src="/public/img/preparation_tax_report.webp"
            alt="Preparation of the annual tax reporting"
            class="h-auto w-full"
          />
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 2 - IMPORTANT -->
  <BlockSection>
    <Container>
      <div class="flex flex-row justify-between">
        <div class="basis-5/12">
          <h2>
            <Headline2>
              {{ $t("landing.block_2.h2") }}
            </Headline2>
          </h2>
          <Paragraph1>
            {{ $t("landing.block_2.p") }}
          </Paragraph1>
          <img
            src="/public/img/important_img.svg"
            alt=""
            class="w-[547px] h-auto"
          />
        </div>
        <div class="basis-6/12">
          <div class="border-b-[1px] border-green-600 pb-12 mb-12">
            <h3>
              <Headline3>
                {{ $t("landing.block_2.h3") }}
              </Headline3>
            </h3>
          </div>
          <!-- Плитка - Большая -->
          <div
            class="border-[1px] border-green-600 rounded-ss-[50px] rounded-ee-[50px] mb-12"
          >
            <div class="bg-gray-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
              <Headline4 class="text-green-600"
                >Partnerships LLC (Two or more participants)</Headline4
              >
            </div>
            <div class="flex justify-between p-6">
              <Paragraph2>Form 1065</Paragraph2>
              <img src="/public/img/icons/calendar.svg" alt="" />
            </div>
            <div class="flex justify-between pe-6">
              <img src="/public/img/icons/lines.svg" alt="" />
              <div class="flex flex-row items-center">
                <Headline3> March </Headline3>
                <Headline2> 15 </Headline2>
              </div>
            </div>
          </div>
          <!-- Плитка - Малая - 1 -->
          <div class="flex flex-row">
            <div
              class="basis-1/2 border-[1px] border-green-600 rounded-ss-[50px] rounded-ee-[50px]"
            >
              <div class="bg-gray-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
                <Headline4 class="text-green-600">С Corporation</Headline4>
              </div>
              <div class="flex justify-between p-6">
                <Paragraph2>Form 1120</Paragraph2>
                <img src="/public/img/icons/calendar.svg" alt="" />
              </div>
              <div class="flex justify-between pe-6">
                <img src="/public/img/icons/vertical_lines.svg" alt="" />
                <div class="flex flex-row items-center">
                  <Headline3>April</Headline3>
                  <Headline2> 15 </Headline2>
                </div>
              </div>
            </div>

            <!-- Плитка - Малая - 2 -->
            <div
              class="basis-1/2 border-[1px] border-green-600 rounded-ss-[50px] rounded-ee-[50px]"
            >
              <div class="bg-gray-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
                <Headline4 class="text-green-600">
                  Single-Member LLC <br />(LLC - one member)
                </Headline4>
              </div>
              <div class="flex justify-between p-6">
                <Paragraph2>Form 1040</Paragraph2>
                <img src="/public/img/icons/calendar.svg" alt="" />
              </div>
              <div class="flex justify-between pe-6">
                <img src="/public/img/icons/vertical_lines.svg" alt="" />
                <div class="flex flex-row items-center">
                  <Headline3>April</Headline3>
                  <Headline2> 15 </Headline2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Headline2>
        <div class="flex flex-row flex-wrap">
          <div class="basis-full flex flex-row">
            <div class="basis-6/12">
              <div class="border-b-[1px] border-red-600 pb-12">
                <Headline3>Penalties</Headline3>
              </div>
            </div>
          </div>
          <div class="basis-6/12">
            <!-- Плитка - Большая -->
            <div
              class="border-[1px] border-red-600 rounded-ss-[50px] rounded-ee-[50px] my-12"
            >
              <div class="bg-red-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
                <Headline4 class="text-green-600"
                  >Partnerships LLC (Two or more participants)</Headline4
                >
              </div>
              <div class="flex justify-between p-6">
                <Paragraph2>Form 1065</Paragraph2>
                <img src="/public/img/icons/calendar.svg" alt="" />
              </div>
              <div class="flex justify-between pe-6">
                <img src="/public/img/icons/lines.svg" alt="" />
                <div class="flex flex-row items-center">
                  <Headline3> March </Headline3>
                  <Headline2> 15 </Headline2>
                </div>
              </div>
            </div>
            <!-- Плитка - Малая - 1 -->
            <div class="flex flex-row">
              <div
                class="basis-1/2 border-[1px] border-red-600 rounded-ss-[50px] rounded-ee-[50px]"
              >
                <div class="bg-red-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
                  <Headline4 class="text-green-600">С Corporation</Headline4>
                </div>
                <div class="flex justify-between p-6">
                  <Paragraph2>Form 1120</Paragraph2>
                  <img src="/public/img/icons/calendar.svg" alt="" />
                </div>
                <div class="flex justify-between pe-6">
                  <img src="/public/img/icons/vertical_lines.svg" alt="" />
                  <div class="flex flex-row items-center">
                    <Headline3>April</Headline3>
                    <Headline2> 15 </Headline2>
                  </div>
                </div>
              </div>

              <!-- Плитка - Малая - 2 -->
              <div
                class="basis-1/2 border-[1px] border-red-600 rounded-ss-[50px] rounded-ee-[50px]"
              >
                <div class="bg-red-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
                  <Headline4 class="text-green-600">
                    Single-Member LLC <br />(LLC - one member)
                  </Headline4>
                </div>
                <div class="flex justify-between p-6">
                  <Paragraph2>Form 1040</Paragraph2>
                  <img src="/public/img/icons/calendar.svg" alt="" />
                </div>
                <div class="flex justify-between pe-6">
                  <img src="/public/img/icons/vertical_lines.svg" alt="" />
                  <div class="flex flex-row items-center">
                    <Headline3>April</Headline3>
                    <Headline2> 15 </Headline2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-6/12">
            <div class="flex">
              <img src="/public/img/icons/!.svg" alt="" class="pe-8" />
              <Paragraph2>
                If you have not filed/verified your annual returns in time, the
                IRS grants a 6-month grace period with no penalties or fees. To
                receive the extension, you must file the correct information
                with the IRS.
              </Paragraph2>
            </div>
            <img
              src="/public/img/penalties_img.svg"
              alt=""
              class="w-[602] h-auto"
            />
          </div>
        </div>
      </Headline2>
    </Container>
  </BlockSection>

  <!-- Block - 3 - POLYUS CONSULTING ADVANTAGES -->
  <BlockSection>
    <Container>
      <div
        class="flex flex-row justify-around border-[1px] border-green-600 py-20 rounded-[50px]"
      >
        <div class="basis-4/12">
          <h2>
            <Headline2>
              {{ $t("landing.block_3.h2") }}
            </Headline2>
          </h2>
          <img src="/public/img/advantages.webp" alt="" />
        </div>
        <div class="basis-5/12">
          <ListAdvantage
            v-for="(list, index) in ListAdvantages"
            :key="index"
            :Headline="list.Headline"
            :Text="list.Text"
          />
          <BigButton>
            {{ $t("landing.buttons.apply_now") }}
          </BigButton>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 4 - PROCESS -->
  <BlockSection>
    <Container>
      <div class="flex flex-row">
        <div class="basis-4/12">
          <h2>
            <Headline2>
              {{ $t("landing.block_4.h2") }}
            </Headline2>
          </h2>
          <Paragraph2>
            {{ $t("landing.block_4.p") }}
          </Paragraph2>
          <BigButton>
            {{ $t("landing.buttons.apply_now") }}
          </BigButton>
        </div>
        <div class="basis-8/12">
          <img src="/public/img/process_img.svg" alt="" />
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 5 - REVIEWS -->
  <BlockSection>
    <Container>
      <div class="flex flex-row flex-wrap mx-2">
        <div class="basis-full px-2 mb-[60px]">
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

  <!-- Block - 6 -->
  <BlockSection>
    <Container>
      <div class="flex flex-row flex-wrap items-center justify-between">
        <div class="basis-5/12">
          <img
            src="/public/img/price_img.svg"
            alt=""
            class="w-[608px] h-auto"
          />
        </div>
        <div class="basis-6/12">
          <!-- Плитка - Большая -->
          <div
            class="border-[1px] border-green-600 rounded-ss-[50px] rounded-ee-[50px] mb-12"
          >
            <div class="bg-green-200 pb-6 pt-12 ps-6 rounded-ss-[50px]">
              <h2>
                <Headline1>
                  {{ $t("landing.block_6.h2") }}
                </Headline1>
              </h2>
            </div>
            <div class="m-8 border-t-[1px] border-green-600 pt-8">
              <Paragraph2>
                {{ $t("landing.block_6.p") }}
              </Paragraph2>
              <br />
              <img
                src="/public/img/icons/lines.svg"
                alt=""
                class="transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 7 -->
  <BlockSection>
    <Container>
      <div class="flex flex-row flex-wrap mx-2 items-end">
        <div class="basis-full mb-14 px-2">
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
      Reviews: [
        {
          ImageReview: "/public/img/rewie_aidar.svg",
          NameReview: this.$t("landing.block_5.rewiew_1.name"),
          TextReview: this.$t("landing.block_5.rewiew_1.text"),
          TimeReview: "08.14.2023",
        },
        {
          ImageReview: "/public/img/rewie_svetlana.svg",
          NameReview: this.$t("landing.block_5.rewiew_2.name"),
          TextReview: this.$t("landing.block_5.rewiew_2.text"),
          TimeReview: "03.27.2024",
        },
        {
          ImageReview: "/public/img/rewie_aidar.svg",
          NameReview: this.$t("landing.block_5.rewiew_3.name"),
          TextReview: this.$t("landing.block_5.rewiew_3.text"),
          TimeReview: "07.27.2024",
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
          Headline: this.$t("landing.block_3.h3_2"),
          Text: this.$t("landing.block_3.p_2"),
        },
      ],
    };
  },
};
</script>
