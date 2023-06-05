import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AgentView from "../views/AgentView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import LayoutWithSearchBar from "@/layouts/LayoutWithSearchBar.vue";
import LayoutWithoutSearchBar from "@/layouts/LayoutWithoutSearchBar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutWithSearchBar,
      children: [
        {
          path: "",
          component: HomeView,
        },
      ],
    },
    {
      path: "/",
      component: LayoutWithoutSearchBar,
      children: [
        {
          path: "/agent/:id",
          component: AgentView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  ],
});

export default router;
