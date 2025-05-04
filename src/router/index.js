import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import NotesDash from "@/components/NotesDash.vue";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/notes", component: NotesDash },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
