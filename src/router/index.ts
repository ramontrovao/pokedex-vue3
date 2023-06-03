import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AgentView from "../views/AgentView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/agent/:id",
      name: "agent",
      component: AgentView,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  ],
});

export default router;
