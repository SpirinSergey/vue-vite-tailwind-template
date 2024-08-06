<script setup>
import Container from "../components/shared/Container.vue";
import BlockSection from "../components/shared/BlockSection.vue";
import Headline1 from "../components/text/Headline1.vue";
import Headline2 from "../components/text/Headline2.vue";
import Headline3 from "../components/text/Headline3.vue";
import Headline4 from "../components/text/Headline4.vue";
import Paragraph1 from "../components/text/Paragraph1.vue";
import Paragraph2 from "../components/text/Paragraph2.vue";
import Paragraph3 from "../components/text/Paragraph3.vue";
</script>

<template>
  <!-- Block - 1 -->
  <BlockSection>
    <Container>
      <div class="flex flex-row">
        <div class="basis-7/12">
          <Headline1> Preparation of the annual tax reporting </Headline1>
          <Headline4> Tax reporting is easy with Polyus Consulting!</Headline4>
        </div>
        <div class="basis-5/12">
          <img
            src="/public/img/preparation_tax_report.webp"
            alt="Preparation of the annual tax reporting"
            class="h-auto w-full"
          />
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 2 -->
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
        </div>
        <div class="basis-6/12">
          <Headline3>US corporate reporting calendar</Headline3>
        </div>
      </div>
    </Container>
  </BlockSection>

  <!-- Block - 3 -->
  <BlockSection>
    <Container>
      <Headline2>
        <div class="flex flex-row">
          <div class="basis-full">
            <Headline3>Penalties</Headline3>
          </div>
        </div>
      </Headline2>
    </Container>
  </BlockSection>

  <!-- Block - 4 -->
  <BlockSection>
    <Container>
      <Headline2>4</Headline2>
    </Container>
  </BlockSection>

  <!-- Block - 5 -->
  <BlockSection>
    <Container>
      <Headline2>5</Headline2>
    </Container>
  </BlockSection>

  <!-- Block - 6 -->
  <BlockSection>
    <Container>
      <Headline2>6</Headline2>
    </Container>
  </BlockSection>

  <!-- Block - 7 -->
  <BlockSection>
    <Container>
      <Headline2>7</Headline2>
    </Container>
  </BlockSection>
</template>
