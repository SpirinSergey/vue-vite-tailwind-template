<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Cookies from "./components/shared/Cookies.vue";
import Bitrix24 from "./components/shared/Bitrix24.vue";
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
    <Footer />
  </footer>
  <Cookies />
  <Bitrix24 />
</template>
