import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ApartmentView from "@/views/ApartmentView.vue";
import AddListingView from "@/views/AddListingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/real-estates/:id",
      name: "real-estates",
      component: ApartmentView,
    },
    {
      path: "/addlisting",
      name: "add-listing",
      component: AddListingView,
    },
  ],
});

export default router;
