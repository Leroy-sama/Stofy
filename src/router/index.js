import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NotFound from "@/components/pages/NotFound.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";
import ProductDetail from "@/components/pages/ProductDetail.vue";
import SigninPage from "@/components/pages/SigninPage.vue";
import SignupPage from "@/components/pages/SignupPage.vue";
import ForgotPassword from "@/components/pages/ForgotPassword.vue";

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
        path: "/products/:id",
        component: ProductDetail,
        props: true,
    },
    {
        path: "/signin",
        component: SigninPage,
    },
    {
        path: "/signup",
        component: SignupPage,
    },
    {
        path: "/forgot",
        component: ForgotPassword,
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
