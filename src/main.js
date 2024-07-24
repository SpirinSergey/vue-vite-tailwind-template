import { createApp } from "vue";
import "./style.css";
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

const app = createApp(App);
app.use(router);
app.mount("#app");
