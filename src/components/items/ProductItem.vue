<template>
    <div class="product">
        <div class="product__data">
            <div class="product__image">
                <img :src="image" :alt="title" />
            </div>
            <div class="product__text">
                <h3 class="product__title">{{ title }}</h3>
                <span class="product__price">${{ price }}</span>
                <p class="product__description">{{ description }}</p>
            </div>
        </div>
        <div class="product__action">
            <button>Add to cart</button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["id", "image", "title", "price", "description"]);
</script>

<style scoped></style>
