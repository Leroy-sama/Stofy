<template>
    <div class="product">
        <div class="product__data">
            <div class="product__image">
                <RouterLink :to="productDetailsLink">
                    <img :src="mainImage" :alt="title" />
                </RouterLink>
            </div>
            <div class="padding">
                <div class="product__text">
                    <RouterLink :to="productDetailsLink">
                        <h3 class="product__title">{{ title }}</h3>
                    </RouterLink>
                    <span class="product__price">${{ price }}</span>
                </div>
                <div class="product__action">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { useRoute, RouterLink } from "vue-router";

    const props = defineProps([
        "id",
        "mainImage",
        "title",
        "price",
        "description",
    ]);

    const productDetailsLink = computed(() => {
        const route = useRoute();
        return route.path + "/" + props.id;
    });
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap");

    .product {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        background-color: white;
        border-radius: 10px;
    }

    .padding {
        padding: 1em;
    }

    .product__image img {
        inline-size: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

    .product__title {
        color: #163020;
        padding: 1em 0;
    }

    .product__price {
        font-family: "Fraunces", serif;
        font-size: 1.2rem;
    }

    .product__action button {
        background-color: black;
        color: white;

        border: none;
        padding: 0.5em 1em;
        cursor: pointer;
        margin-top: 1em;
        transition: all 0.3s ease-in-out;
    }

    .product__action button:hover {
        background-color: rgba(0 0 0 / 0.8);
    }
</style>
