import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";

import { createI18n } from "vue-i18n";
import localesEn from "./locales/EN.js";
import localesRu from "./locales/RU.js";

import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/Home.vue";
import ContactView from "./views/Contact.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/contact", component: ContactView },
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
app.mount("#app");
