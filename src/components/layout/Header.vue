<script setup>
import Container from "../shared/Container.vue";
import SelectLanguages from "../shared/SelectLanguages.vue";
import Link from "../text/Link.vue";
import Burger from "../shared/Burger.vue";
import NavbarMob from "../shared/NavbarMob.vue";
</script>

<template>
  <Container class="relative lg:block flex lg:pt-0 pt-[118px]">
    <nav
      class="absolute top-0 py-8 border-b-[1px] border-green-600 mx-2  lg:relative lg:w-auto w-[calc(100%-16px)] md:w-[752px] sm:w-[624px]  h-auto z-50 bg-white"
    >
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
          <div class="flex justify-end">
            <SelectLanguages />
            <Burger class="lg:hidden ms-4" @click="OpenMobileMenu" />
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <NavbarMob
    @click="OpenMobileMenu"
      class="lg:hidden  lg:relative absolute duration-500 lg:w-auto md:w-[752px]  sm:w-[624px] w-[calc(100%-16px)]  top-[-400px] z-10 left-2 "
      :class="{ 'sm:top-[118px] top-[100px]': menu }"
    />
  </Container>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    OpenMobileMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>
