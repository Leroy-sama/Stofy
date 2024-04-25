<template>
    <div class="home">
        <Carousel class="carousel" v-slot="{ currentSlide }">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <img :src="`src/assets/images/${slide.image}`" alt="" />
                    <div class="text-info">
                        <h1 class="head">BlackM</h1>
                        <p class="text">{{ slide.text }}</p>
                        <RouterLink to="/products" class="btn">Shop</RouterLink>
                    </div>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script setup>
    import Slide from "./Slide.vue";
    import Carousel from "./Carousel.vue";

    const carouselSlides = [
        {
            text: "The most trusted platform to sell and buy locally available productstotam atis vero quisquam? Nihil, dolorem.",
            image: "Developer.jpg",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga totam harum aliquid adipisci magnam,",
            image: "PhotoGrapher.jpg",
        },
        {
            text: "totam harum aliquid adipisci magnam, deleniti repellat autem facilis illum eos illo obcaecati iste yes syjey",
            image: "Trader.jpg",
        },
    ];
</script>

<style scoped>
    .carousel {
        position: relative;
        max-height: 100vh;
        height: 100vh;
    }

    .slide-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
        height: 100%;
    }

    .slide-info img {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide-info .text-info {
        position: absolute;
        top: 20%;
        width: 50%;
        padding: 4em;
        color: #fff;
        z-index: 1;
    }

    .text-info .text {
        padding: 2em 0;
        line-height: 1.5;
    }

    .text-info .btn {
        color: #fff;
        text-decoration: none;
        padding: 0.5em 2em;
        background-color: rgb(3, 43, 3);
    }

    @media (max-width: 35em) {
        .slide-info .text-info {
            width: 100%;
        }
    }
</style>
