import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/products",
			name: "products",
			component: () => import("../views/ProductsPage.vue"),
		},
		{
			path: "/products/:id",
			name: "product details",
			component: () => import("../views/ProductDetails.vue"),
		},
		{
			path: "/about",
			name: "About",
			component: () => import("../views/AboutPage.vue"),
		},
		{
			path: "/contact",
			name: "Contact",
			component: () => import("../views/ContactPage.vue"),
		},
	],
});

export default router;
