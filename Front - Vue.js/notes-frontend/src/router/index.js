import { createRouter, createWebHistory } from "vue-router"; // Para Vue 3
import LoginPage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";

const routes = [
  { path: "/", component: LoginPage },
  { path: "/home", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Usando a história do Vue Router 4
  routes,
});

export default router;
