<template>
    <div class="home">
        <Carousel class="carousel" v-slot="{ currentSlide }">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <img :src="slide.image" alt="" />
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
            image: "https://i.pinimg.com/564x/76/aa/1e/76aa1e1731395b4caabd0a398f8dde4b.jpg",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga totam harum aliquid adipisci magnam,",
            image: "https://i.pinimg.com/564x/c7/36/f8/c736f83436d84ddc039fe42de40c8ec7.jpg",
        },
        {
            text: "totam harum aliquid adipisci magnam, deleniti repellat autem facilis illum eos illo obcaecati iste yes syjey",
            image: "https://i.pinimg.com/736x/02/e9/df/02e9dff23c99d93257f47bb5bf56fb48.jpg",
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
        padding: 5em;
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
