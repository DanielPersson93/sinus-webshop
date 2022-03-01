import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductsView from "../views/ProductsView.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Checkout from "../views/Checkout.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import Profile from "../views/Profile.vue";
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
		path: "/singleproduct/:id",
		name: "SingleProduct",
		component: SingleProduct,
	},
	{
		path: "/checkout",
		name: "Checkout",
		component: Checkout,
	},
	{
		path: "/shoppingcart",
		name: "ShoppingCart",
		component: ShoppingCart,
	},
	{
		path: "/profile",
		name: "Profile",
		component: Profile,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
