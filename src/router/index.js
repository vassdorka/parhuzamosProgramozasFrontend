import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarBrand from "../views/CarBrand.vue";
import AddCarBrand from "../views/AddCarBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import AddListSlippers from "../views/AddListSlippers.vue";
import EditListSlippers from "../views/EditListSlippers.vue";
import ListSlippers from "../views/ListSlippers.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/carBrands",
    name: "CarBrands",
    component: CarBrand
  },
  {
    path: "/addCarBrand",
    name: "AddCarBrand",
    component: AddCarBrand
  },
  {
    path: "/editBrand/:id",
    name: "EditBrand",
    component: EditBrand
  },
  {
    path: "/editListSlippers/:id",
    name: "EditListSlippers",
    component: EditListSlippers
  },
  {
    path: "/addListSlippers",
    name: "AddListSlippers",
    component: AddListSlippers
  },
  {
    path: "/listSlippers",
    name: "ListSlippers",
    component: ListSlippers
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
