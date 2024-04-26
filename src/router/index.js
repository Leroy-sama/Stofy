import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NotFound from "@/components/pages/NotFound.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";
import ProductDetail from "@/components/pages/ProductDetail.vue";
import SigninPage from "@/components/pages/SigninPage.vue";
import SignupPage from "@/components/pages/SignupPage.vue";
import ForgotPassword from "@/components/pages/ForgotPassword.vue";
import CheckoutPage from "@/components/pages/CheckoutPage.vue";
import FullCart from "@/components/pages/FullCart.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: HomePage,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/products",
        component: ProductsPage,
        meta: {
            title: "All Products",
        },
    },
    {
        path: "/products/:id",
        component: ProductDetail,
        props: true,
        meta: {
            title: "Product",
        },
    },
    {
        path: "/signin",
        component: SigninPage,
        meta: {
            title: "Sign In",
        },
    },
    {
        path: "/signup",
        component: SignupPage,
        meta: {
            title: "Sign Up",
        },
    },
    {
        path: "/forgot",
        component: ForgotPassword,
        meta: {
            title: "Forgot Pswd",
        },
    },
    {
        path: "/:notFound(.*)",
        component: NotFound,
    },
    {
        path: "/cart",
        component: FullCart,
        meta: {
            title: "User Cart",
        },
    },
    {
        path: "/checkout",
        component: CheckoutPage,
        meta: {
            title: "Checkout",
        },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | BlackM`;
    next();
});

export default router;
