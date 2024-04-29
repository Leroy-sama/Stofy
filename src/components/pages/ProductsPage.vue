<template>
    <section class="products">
        <div class="head">
            <span class="line"></span>
            <h1 class="products__head">All Products</h1>
        </div>

        <div class="products__wrapper">
            <ProductItem
                v-for="prod in productStore.products"
                :key="prod.id"
                :id="prod.id"
                :title="prod.title"
                :mainImage="prod.mainImage"
                :description="prod.description"
                :price="prod.price"
            >
            </ProductItem>
        </div>
    </section>
</template>

<script setup>
    import { useProductStore } from "@/pinia/productStore";
    import ProductItem from "../items/ProductItem.vue";

    const productStore = useProductStore();

    // const products = computed(() => {
    //     return store.getters["prods/products"];
    // });
</script>

<style scoped>
    .products {
        margin: 0 1em 3em;
    }

    .head {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .line {
        background-color: rgb(5, 31, 5);
        display: block;
        width: 50px;
        height: 2px;
    }

    .products__head {
        color: rgb(5, 31, 5);
        padding: 1em 0;
    }

    .products__wrapper {
        display: grid;
        gap: 2em;
    }

    @media (min-width: 35em) {
        .products__wrapper {
            max-width: 1200px;
            margin-inline: auto;

            grid-template-columns: repeat(3, 1fr);
            gap: 2em;
        }
    }
</style>
