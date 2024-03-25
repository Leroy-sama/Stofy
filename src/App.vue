<script setup>
    import TheHeader from "./layout/TheHeader.vue";
    import TheFooter from "./layout/TheFooter.vue";
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
        text-decoration: none;
    }

    body {
        background-color: #e1f0da;
    }

    img {
        display: block;
        width: 100%;
    }
</style>
