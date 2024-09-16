import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingView from "@/views/ApartmentView.vue";
import ApartmentView from "@/views/ApartmentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/apartment",
      name: "apartment",
      component: ApartmentView,
    },
  ],
});

export default router;
