<template>
    <section class="products">
        <div class="products__wrapper">
            <div class="head">
                <span class="line"></span>
                <h1 class="products__head">All Products</h1>
            </div>
            <div class="search">
                <div class="form__control">
                    <input type="text" placeholder="Search products..." />
                </div>
            </div>
            <div class="productitems__wrapper">
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

    .productitems__wrapper {
        display: grid;
        gap: 2em;
    }

    .search {
        display: flex;
        justify-content: center;
    }

    .form__control {
        padding: 2em;
    }

    .form__control input {
        max-width: 100%;
        width: 600px;
        padding: 0.5em 1em;
        outline: none;
    }

    @media (min-width: 35em) {
        .products__wrapper {
            max-width: 1200px;
            margin-inline: auto;
        }

        .productitems__wrapper {
            grid-template-columns: repeat(3, 1fr);
            gap: 2em;
        }
    }
</style>
