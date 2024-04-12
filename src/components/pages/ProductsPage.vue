<template>
    <section>
        <div class="products__wrapper">
            <ProductItem
                v-for="prod in products"
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
    import { computed } from "vue";
    import { useStore } from "vuex";
    import ProductItem from "../items/ProductItem.vue";
    const store = useStore();

    const products = computed(() => {
        return store.getters["prods/products"];
    });
</script>

<style scoped>
    .products__wrapper {
        display: grid;
        gap: 2em;
        margin: 0 1em;
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
