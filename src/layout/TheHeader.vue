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
                    <RouterLink to="/products" @click.native="closeNavMenu"
                        >Products</RouterLink
                    >
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>
            <div class="registerCart">
                <RouterLink :to="user ? '' : '/signin'" class="regis">
                    <div v-if="user" class="user" @click="togglePopUp">
                        {{ userStore.profileInitials }}
                    </div>
                    <UserIcon v-else />
                    <div v-if="showPopUp" class="popout">
                        <p class="name">
                            {{ userStore.profileFirstname }}
                            {{ userStore.profileLastname }}
                        </p>
                        <p class="email">{{ userStore.profileEmail }}</p>
                        <div class="popup__actions">
                            <RouterLink
                                class="profile-btn"
                                to="/profile"
                                @click="closePopUp"
                                >Profile</RouterLink
                            >
                            <button class="logout-btn" @click="signOutUser">
                                Logout
                            </button>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink to="/cart" class="cart-link">
                    <CartIcon />
                    <span v-if="user" class="cart-count">{{
                        cartStore.qty
                    }}</span>
                </RouterLink>
                <!-- <div @click="toggleCart" class="cart" ref="carte">
                    <CartIcon class="icon-cart" />
                    <div v-show="showCart" class="cart__wrapper">
                        <div class="cart__header">
                            <h3 class="cart__head">Cart</h3>
                            <button class="clear">Remove All</button>
                        </div>
                        <div class="cart__content">
                            <img src="@/assets/images/hdmVans.jpg" alt="" />
                            <div class="item__details">
                                <p class="item__name">Vans shoes</p>
                                <span class="item__cost">$110</span>
                            </div>
                            <DeleteIcon class="del-btn" />
                        </div>
                        <div class="cart__btns">
                            <RouterLink to="/cart" class="fullcart"
                                >Full Cart</RouterLink
                            >
                            <RouterLink to="/" class="checkot"
                                >Checkout</RouterLink
                            >
                        </div>
                    </div>
                </div> -->
            </div>
        </nav>
    </header>
</template>

<script setup>
    import UserIcon from "@/assets/icons/UserIcon.vue";
    import CartIcon from "@/assets/icons/CartIcon.vue";
    import DeleteIcon from "@/assets/icons/DeleteIcon.vue";

    import { computed, onMounted, reactive, ref } from "vue";
    import { RouterLink, useRouter } from "vue-router";
    import { useCartStore } from "@/pinia/cartStore";
    import { useUserStore } from "@/pinia/userStore";
    import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

    const cartStore = useCartStore();
    const userStore = useUserStore();
    const router = useRouter();
    const showCart = ref(null);
    const carte = ref(null);

    const user = ref(null);

    const showPopUp = ref(false);

    const togglePopUp = () => {
        showPopUp.value = !showPopUp.value;
    };

    const closePopUp = () => {
        showPopUp.value = false;
    };

    const auth = getAuth();
    onMounted(() => {
        onAuthStateChanged(auth, (authUser) => {
            user.value = authUser;
        });
    });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            console.log("user is logged out");
        }
    });

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log("Signed out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
        router.push("/home");
    };

    const state = reactive({
        isActive: false,
    });

    const toggleNavMenu = () => {
        state.isActive = !state.isActive;
    };

    const toggleCart = (e) => {
        if (e.target === carte.value) {
            showCart.value = !showCart.value;
        }
    };

    const closeNavMenu = () => {
        state.isActive = false;
    };

    const cartQuantity = computed(() => {
        return cartStore.qty;
    });
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
        background-color: white;
    }

    .logo {
        font-size: 2rem;
        cursor: pointer;
        transition: 300ms;
        color: #163020;
    }

    .logo:hover {
        color: #163020;
        transform: scale(0.9) translateX(-5px);
    }

    .cart-link {
        position: relative;
    }

    .cart-count {
        position: absolute;
        top: -0.3em;
        left: 1em;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #163020;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
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

    .cart {
        position: relative;
        background-color: #e1e1e1;
        width: 2em;
        height: 2em;
    }
    .cart__wrapper {
        position: absolute;
        top: 4em;
        right: 2em;
        z-index: 100;
        max-width: 500px;
        width: 500px;
        padding: 1.5em;
        background-color: #fff;
        box-shadow: 0 4px 6px -1px rgba(0 0 0 / 0.1),
            0 2px 4px -1px rgba(0 0 0 / 0.06);
    }

    .cart__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cart__head {
        font-size: 1.5rem;
        color: #163020;
    }

    .cart__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5em 0;
    }

    .cart__content img {
        max-width: 100px;
    }

    .cart__btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .clear {
        background-color: #fff;
        color: blue;
        border: none;
        cursor: pointer;
        font-size: 1rem;
    }

    .del-btn {
        cursor: pointer;
    }

    .icon-cart {
        pointer-events: none;
        cursor: pointer;
    }

    .fullcart {
        background-color: white;
        border: 1px solid #163020;
        color: #163020;
        padding: 0.5em 1em;
    }

    .checkot {
        background-color: #163020;
        color: #fff;
        padding: 0.5em 1em;
    }

    .user {
        width: 2em;
        height: 2em;
        color: white;
        background-color: #163020;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .regis {
        position: relative;
    }

    .popout {
        color: white;
        background-color: black;
        max-width: 200px;
        padding: 1em;
        position: absolute;
        top: 2.5em;
        right: 1em;
        z-index: 1;
    }

    .popup__actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        margin-top: 1em;
    }

    .profile-btn,
    .logout-btn {
        background-color: white;
        text-align: center;
        padding: 0.4em;
    }

    .logout-btn {
        border: none;
        font-size: 1rem;
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
            background: #fff;
        }
    }
</style>
