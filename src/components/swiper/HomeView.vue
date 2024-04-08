<template>
    <div class="container">
        <h1 class="container__head">Slider Thingy</h1>
        <Swiper>
            <SwiperSlide v-for="photo in photos">
                <img :src="`src/assets/images/${photo}`" alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";

    const photos = [
        "AF1_image2.png",
        "AF1_image3.png",
        "AF1_image4.png",
        "AF1_image5.png",
    ];
</script>

<style scoped>
    .container {
        /* max-height: 600px; */
    }

    .swiper {
        max-width: 400px;
        max-height: 400px;
        overflow: visible;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
    }
</style>
