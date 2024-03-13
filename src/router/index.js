import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NotFound from "@/components/pages/NotFound.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/products",
        component: ProductsPage,
    },
    {
        path: "/:notFound(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
