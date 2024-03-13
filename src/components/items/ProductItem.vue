<template>
    <div class="product">
        <div class="product__data">
            <div class="product__image">
                <img :src="image" :alt="title" />
            </div>
            <div class="padding">
                <div class="product__text">
                    <h3 class="product__title">{{ title }}</h3>
                    <span class="product__price">${{ price }}</span>
                    <p class="product__description">{{ description }}</p>
                </div>
                <div class="product__action">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["id", "image", "title", "price", "description"]);
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap");

    .product {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        background-color: white;
    }

    .padding {
        padding: 1em;
    }

    .product__image img {
        inline-size: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
    }

    .product__title {
        color: #163020;
    }

    .product__price {
        font-family: "Fraunces", serif;
        font-size: 1.2rem;
    }
</style>
