import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";

import { createI18n } from "vue-i18n";
import localesEn from "./locales/EN.js";
import localesRu from "./locales/RU.js";

import App from "./App.vue";

import VueCookies from "vue-cookies";

import { createWebHistory, createRouter } from "vue-router";

import TaxReport from "./views/TaxReport.vue";
import PrivacyPolicy from "./views/legal/PrivacyPolicy.vue";
import TermsOfUs from "./views/legal/TermsOfUs.vue";

const routes = [
  { path: "/", component: TaxReport },
  { path: "/legal/privacy-policy", component: PrivacyPolicy },
  { path: "/legal/terms-of-us", component: TermsOfUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();


const messages = {
  EN: localesEn,
  RU: localesRu,
};

const i18n = createI18n({
  locale: "EN",
  messages: messages,
});

export default i18n;


const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(router);
app.use(VueCookies);
app.mount("#app");
