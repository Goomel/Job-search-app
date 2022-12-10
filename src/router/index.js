import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/page=1",
      name: "home",
      component: HomeView,
    },
    {
      path: "/page=:id",
      name: "offers",
      component: HomeView,
    },
    {
      path: "/job/:id",
      name: "details",
      props: true,
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/DetailsView.vue"),
    },
  ],
});

export default router;
