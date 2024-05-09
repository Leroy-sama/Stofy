<script setup>
    import TheHeader from "./layout/TheHeader.vue";
    import TheFooter from "./layout/TheFooter.vue";
    import { getAuth, onAuthStateChanged } from "firebase/auth";

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            console.log("user is logged out");
        }
    });
</script>

<template>
    <TheHeader />
    <RouterView />
    <TheFooter />
</template>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");

    * {
        font-family: "Jost", sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: 1.5;
        text-decoration: none;
    }

    img {
        display: block;
        width: 100%;
    }
</style>
