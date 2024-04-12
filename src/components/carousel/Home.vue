<template>
    <div class="carouselHome">
        <Carousel class="carousel" v-slot="{ currentSlide }">
            <Slide
                v-for="(slide, index) in carouselSlides"
                :key="index"
                class="slide"
            >
                <div v-show="currentSlide === index + 1" class="slide-info">
                    <div class="text-side">
                        <p class="text__desc">{{ slide.text }}</p>
                        <div class="shop-btn">
                            <RouterLink to="/products" class="btn"
                                >Shop Now</RouterLink
                            >
                        </div>
                    </div>
                    <div class="img-side">
                        <img :src="slide.image" alt="" />
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
            image: "https://i.pinimg.com/564x/5d/b6/67/5db6672f6518947556486f3b69b29043.jpg",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga totam harum aliquid adipisci magnam,",
            image: "https://i.pinimg.com/564x/27/30/42/273042f46fff3d593344b8acfb34c24a.jpg",
        },
        {
            text: "totam harum aliquid adipisci magnam, deleniti repellat autem facilis illum eos illo obcaecati iste yes syjey",
            image: "https://i.pinimg.com/564x/af/a3/b4/afa3b4035839f7e5c1d7c40a8647487d.jpg",
        },
    ];
</script>

<style scoped>
    .img-side img {
        width: 100%;
        /* height: 100%; */
        /* object-fit: cover; */
    }

    .carousel {
        position: relative;
        height: 90vh;
        background-color: white;
    }

    .silde {
        position: absolute;
        top: 0;
        left: 0;
    }

    .slide-info {
        /* position: absolute; */
        /* top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;*/
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        flex: 1;
        gap: 2em;
    }

    /* .text-side {
         padding: 4em; 
    } */

    .text__desc {
        font-size: 1.5rem;
        /* padding: 1em; */
    }

    .btn {
        color: white;
        background-color: #163020;
        border: 1px solid #163020;
        cursor: pointer;
        padding: 1em 2em;
        font-size: 1rem;
        /* margin: 4em 0; */
    }

    .btn:hover {
        background-color: white;
        color: #163020;
    }

    .shop-btn {
        display: flex;
        justify-content: center;
        padding: 2em;
    }

    @media (min-width: 35em) {
        .carousel {
            max-height: 90vh;
            /* height: 100vh; */
        }

        .slide-info {
            flex-direction: row;
        }

        .text-side {
            padding: 4em;
            max-width: 50%;
        }

        .text__desc {
            font-size: 2rem;
        }
    }
</style>
