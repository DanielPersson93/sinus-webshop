import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductsView from "../views/ProductsView.vue";
import SingleProduct from "../views/SingleProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/productview",
    name: "ProductView",
    component: ProductsView,
    props: true,
  },
  {
    path: "/singleproduct",
    name: "SingleProduct",
    component: SingleProduct,
  },
  // {
  //   path: "/product/:id",
  //   name: "SingleProduct",
  //   component: SingleProduct,
  //   props: true,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
