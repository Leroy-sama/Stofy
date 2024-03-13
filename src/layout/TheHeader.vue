<template>
    <header>
        <nav>
            <div
                class="burger"
                @click="toggleNavMenu"
                :class="{ active: state.isActive }"
            >
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <RouterLink to="/"><h1 class="logo">BlackM</h1></RouterLink>

            <ul class="nav-links" :class="{ active: state.isActive }">
                <li>
                    <RouterLink to="/products">Products</RouterLink>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
            <div class="registerCart">
                <a href="#" class="regis"><UserIcon /></a>
                <a href="#" class="cart"><CartIcon /></a>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import UserIcon from "@/assets/icons/UserIcon.vue";
    import CartIcon from "@/assets/icons/CartIcon.vue";

    import { reactive } from "vue";

    const state = reactive({
        isActive: false,
    });

    const toggleNavMenu = () => {
        state.isActive = !state.isActive;
    };
</script>

<style scoped>
    * {
        list-style: none;
        text-decoration: none;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }

    .logo {
        font-size: 2rem;
        cursor: pointer;
        transition: 300ms;
    }

    .logo:hover {
        color: #163020;
        scale: 0.9;
    }

    .burger {
        cursor: pointer;
        z-index: 9999;
    }

    .bar {
        display: block;
        width: 25px;
        height: 2px;
        margin: 5px 0;
        background-color: green;
    }

    .nav-links {
        position: fixed;
        z-index: 1000;
        inset: 0 30% 30% 0;
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: min(30vh, 10rem) 2em;
        background: hsl(0 0% 100% / 0.7);
        backdrop-filter: blur(1rem);
        transform: translateX(-100%);
        transition: transform 350ms ease-out;
    }

    .nav-links li a {
        color: black;
        font-size: 1.2rem;
    }

    .nav-links li a:hover {
        color: #163020;
    }

    .burger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .burger.active .bar:nth-child(1) {
        transform: rotate(45deg) translateY(10px);
    }

    .burger.active .bar:nth-child(3) {
        transform: rotate(-45deg) translateY(-10px);
    }

    .nav-links.active {
        transform: translateX(0%);
    }

    .registerCart {
        display: flex;
        gap: 1em;
    }

    @media (min-width: 35em) {
        nav {
            padding: 1em 2em;
        }

        nav ul {
            display: flex;
            gap: 2em;
        }

        .burger {
            display: none;
        }

        .nav-links {
            transform: translateX(0%);
            position: static;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0;
            background: #e1f0da;
        }
    }
</style>
