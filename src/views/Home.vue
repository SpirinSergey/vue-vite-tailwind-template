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
</script>

<template>
  <!-- Block - 1 - TOP -->
  <BlockSection>
    <Container class="border-b-[1px] border-green-600 py-14">
      <div class="flex flex-row items-center justify-between mx-2">
        <div class="basis-5/12 px-2">
          <Headline1 class="mb-8">
            Preparation of the annual tax reporting
          </Headline1>
          <Headline4 class="mb-12">
            Tax reporting is easy with Polyus Consulting!</Headline4
          >
          <BigButton>Apply now</BigButton>
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
          <Headline2>IMPORTANT!</Headline2>
          <Paragraph1>
            There are requirements for all US companies to file annual tax
            returns with the federal IRS and the state, whether the business was
            operating or not.
          </Paragraph1>
          <img
            src="/public/img/important_img.svg"
            alt=""
            class="w-[547px] h-auto"
          />
        </div>
        <div class="basis-6/12">
          <div class="border-b-[1px] border-green-600 pb-12 mb-12">
            <Headline3>US corporate reporting calendar</Headline3>
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
                <Headline4 class="text-green-600"
                  >Single-Member LLC <br />(LLC - one member)</Headline4
                >
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
    </Container>
  </BlockSection>

  <!-- Block - 3 - Penalties -->
  <BlockSection>
    <Container>
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
                  <Headline4 class="text-green-600"
                    >Single-Member LLC <br />(LLC - one member)</Headline4
                  >
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

  <!-- Block - 4 - POLYUS CONSULTING ADVANTAGES -->
  <BlockSection>
    <Container>
      <div
        class="flex flex-row justify-around border-[1px] border-green-600 py-20 rounded-[50px]"
      >
        <div class="basis-4/12">
          <Headline2>POLYUS CONSULTING ADVANTAGES</Headline2>
          <img src="/public/img/advantages.webp" alt="" />
        </div>
        <div class="basis-5/12">
          <div class="border-b-[1px] border-green-600">
            <Headline3 class="text-green-600">
              Impeccable track record
            </Headline3>
            <Paragraph2>
              Polyus Consulting is a team of qualified specialists with
              extensive experience in taxation, ensuring that your reports
              comply with the current legal requirements.
            </Paragraph2>
          </div>
          <div class="border-b-[1px] border-green-600">
            <Headline3 class="text-green-600">
              Reduction of tax audit risks
            </Headline3>
            <Paragraph2>
              Correct preparation of reports and minimization of errors reduce
              the probability of receiving tax notifications and audits. Our
              specialists thoroughly check all documents before they are
              submitted.
            </Paragraph2>
          </div>
          <div class="border-b-[1px] border-green-600">
            <Headline3 class="text-green-600">
              Reduction of tax audit risks
            </Headline3>
            <Paragraph2>
              Preparing tax reports requires considerable time and effort. By
              turning to professionals, you free up your resources for more
              important business tasks, allowing you to focus on the development
              and growth of your company.
            </Paragraph2>
          </div>
          <BigButton>Apply now</BigButton>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 5 - PROCESS -->
  <BlockSection>
    <Container>
      <div class="flex flex-row">
        <div class="basis-4/12">
          <Headline2>PROCESS</Headline2>
          <Paragraph2>
            Polyus Consulting provides you with support at all stages of the tax
            process - from gathering and analysis of documents to filing annual
            reports and possible audit by the IRS.
          </Paragraph2>
          <BigButton>Apply now</BigButton>
        </div>
        <div class="basis-8/12">
          <img src="/public/img/process_img.svg" alt="" />
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 6 - REVIEWS -->
  <BlockSection>
    <Container>
      <div class="flex flex-row flex-wrap mx-2">
        <div class="basis-full px-2 mb-[60px]">
          <Headline2>REVIEWS</Headline2>
        </div>
        <!-- Article - 1 -->
        <div class="basis-4/12 px-2">
          <div class="p-8 border-[1px] rounded-[30px]">
            <div class="flex mb-6">
              <img src="/public/img/rewie_aidar.svg" alt="" class="w16 h-16" />
              <div class="ms-8">
                <Headline3 class="mb-4">Aidar Madaminov</Headline3>
                <img
                  src="/public/img/icons/stars.svg"
                  alt=""
                  class="w-[132px] h-auto"
                />
              </div>
            </div>
            <Paragraph2 class="mb-8">
              As a business owner in Florida, I used the services of Polyus
              Consulting to prepare my tax report and saved a lot of time and
              nerves. Everything was prepared without errors and turned in on
              time. I recommend!
            </Paragraph2>
            <Paragraph3> 08.14.2023 </Paragraph3>
          </div>
        </div>
        <!-- Article - 2 -->
        <div class="basis-4/12 px-2">
          <div class="p-8 border-[1px] rounded-[30px]">
            <div class="flex mb-6">
              <img
                src="/public/img/rewie_svetlana.svg"
                alt=""
                class="w16 h-16"
              />
              <div class="ms-8">
                <Headline3 class="mb-4">Svetlana Romanova</Headline3>
                <img
                  src="/public/img/icons/stars.svg"
                  alt=""
                  class="w-[132px] h-auto"
                />
              </div>
            </div>
            <Paragraph2 class="mb-8">
              I was looking for help with my annual US tax report and turned to
              Polyus Consulting. Lolita and her team are high level
              professionals. Now I am their regular client.
            </Paragraph2>
            <Paragraph3>03.27.2024</Paragraph3>
          </div>
        </div>
        <!-- Article - 3 -->
        <div class="basis-4/12 px-2">
          <div class="p-8 border-[1px] rounded-[30px]">
            <div class="flex mb-6">
              <img src="/public/img/rewie_aidar.svg" alt="" class="w16 h-16" />
              <div class="ms-8">
                <Headline3 class="mb-4">Edgar Lawrence</Headline3>
                <img
                  src="/public/img/icons/stars.svg"
                  alt=""
                  class="w-[132px] h-auto"
                />
              </div>
            </div>
            <Paragraph2 class="mb-8">
              This is not the first time I have contacted Polyus Consulting and
              I appreciate their responsible attitude to work. They provide
              excellent service and optimal solutions for tax reporting. I feel
              confident with them!
            </Paragraph2>
            <Paragraph3>07.27.2024</Paragraph3>
          </div>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 7 -->
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
              <Headline1>PRICE</Headline1>
            </div>
            <div class="m-8 border-t-[1px] border-green-600 pt-8">
              <Paragraph2>
                Preparation of annual tax reports with Polyus Consulting - for
                those who value their time!
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

  <!-- Block - 8 -->
  <BlockSection>
    <Container>
      <div class="flex flex-row flex-wrap mx-2 items-end">
        <div class="basis-full mb-14 px-2">
          <Headline2>CONTACT US</Headline2>
        </div>
        <div class="basis-4/12 px-2">
          <Paragraph2>
            <input
              type="text"
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9 mb-6"
              placeholder="Name*"
            />
          </Paragraph2>
          <Paragraph2>
            <input
              type="text"
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
              placeholder="Name*"
            />
          </Paragraph2>
        </div>
        <div class="basis-4/12 px-2">
          <Paragraph2>
            <input
              type="text"
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9 mb-6"
              placeholder="Name*"
            />
          </Paragraph2>

          <Paragraph2>
            <input
              type="text"
              class="bg-gray-200 w-full h-8 rounded-[10px] p-9"
              placeholder="Name*"
            />
          </Paragraph2>
        </div>
        <div class="basis-2/12">
          <BigButton>Submit</BigButton>
        </div>
      </div>
    </Container>
  </BlockSection>
</template>
