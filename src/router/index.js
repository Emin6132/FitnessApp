import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Contact";
import Training from "../components/Training";
import Shopping from "../components/Shopping";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Training",
    name: "Training",
    component: Training,
  },
  {
    path: "/Shopping",
    name: "Shopping",
    component: Shopping,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
