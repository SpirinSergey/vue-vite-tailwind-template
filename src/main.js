import { createApp } from "vue";
import "./style.css";

import { createI18n } from "vue-i18n";
import localesEn from "./locales/EN.js";
import localesRu from "./locales/RU.js";

import App from "./App.vue";

import VueCookies from "vue-cookies";

import { createWebHistory, createRouter } from "vue-router";

import TaxReport from "./views/TaxReport.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import TermsOfUs from "./views/TermsOfUs.vue";

const routes = [
  { path: "/", component: TaxReport },
  { path: "/legal/privacy-policy", component: PrivacyPolicy },
  { path: "/legal/terms-of-us", component: TermsOfUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

const messages = {
  en: localesEn,
  ru: localesRu,
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;


const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(VueCookies);
app.mount("#app");
