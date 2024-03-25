<template>
    <section class="details">
        <div class="firstSection">
            <div class="image__details">
                <img :src="image" :alt="title" />
                <div class="small-imgs">
                    <div class="box">
                        <img src="@/assets/images/sportsWear.jpg" />
                    </div>
                    <div class="box">
                        <img src="@/assets/images/AF1_image2.png" />
                    </div>
                    <div class="box">
                        <img src="@/assets/images/AF1_image3.png" />
                    </div>
                    <div class="box">
                        <img src="@/assets/images/AF1_image4.png" />
                    </div>
                    <div class="box">
                        <img src="@/assets/images/AF1_image5.png" />
                    </div>
                </div>
            </div>
            <div class="description__details">
                <h2 class="desc__head">{{ title }}</h2>
                <p class="desc__text">
                    {{ description }}
                </p>
                <span class="price">${{ price }}</span>
                <div class="cartQuantity">
                    <div class="qty"></div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div class="description">
            <h1 class="desc__head">Description</h1>
            <p class="desc__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repellat, sequi adipisci labore, debitis consequatur expedita
                eius sed dolores explicabo et, cum excepturi facere provident
                architecto dolore quibusdam! Veritatis, quasi?
            </p>
            <span class="properties">Properties</span>
            <ul class="properties__list">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
            </ul>
        </div>
        <div class="mayLike">
            <h2 class="maylike__head">You may also like</h2>
            <div class="mayLike__products">
                <div class="product">
                    <img src="@/assets/images/hdmVans.jpg" />
                    <span class="product__head">Product 1</span>
                </div>
                <div class="product">
                    <img src="@/assets/images/yeezy.jpeg" />
                    <span class="product__head">Product 2</span>
                </div>
                <div class="product">
                    <img src="@/assets/images/nikeTravisScott.jpg" />
                    <span class="product__head">Product 3</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, computed } from "vue";
    import { useStore } from "vuex";
    import { useRoute } from "vue-router";

    const route = useRoute();

    const store = useStore();

    const id = route.params.id;

    const selectedProduct = computed(() => {
        return store.getters["prods/products"].find((product) => {
            product.id === id;
        });
    });

    const title = computed(() => {
        return selectedProduct.value.title;
    });

    const description = computed(() => {
        return selectedProduct.value.description;
    });

    const price = computed(() => {
        return selectedProduct.value.price;
    });

    const image = computed(() => {
        return selectedProduct.value.image;
    });

    onMounted(() => {
        const product = store.getters["prods/products"].find(
            (product) => product.id === props.id
        );

        if (product) {
            selectedProduct.value = product;
            console.log("product found");
        } else {
            console.error(`Product with id ${props.id} not found `);
        }

        // selectedProduct = store.getters["prods/products"].find(
        //     (product) => product.id === id
        // );
    });
</script>

<style scoped>
    li {
        list-style: none;
    }

    .details {
        max-width: 1200px;
        margin-inline: auto;
        padding: 2em 0;
    }

    .firstSection {
        display: grid;
        gap: 2em;

        padding: 2em 0;
    }

    .box img {
        max-width: 300px;
        inline-size: 100%;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    .small-imgs {
        display: flex;
        gap: 1em;
    }

    .qty {
        width: 200px;
        height: 40px;
        background-color: red;
    }

    .description {
        padding: 2em 0;
    }

    .properties {
        font-weight: 700;
    }

    .mayLike {
        padding: 2em 0;
    }

    .mayLike__products {
        display: grid;
        gap: 1em;
    }

    .product img {
        inline-size: 100%;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    @media (min-width: 35em) {
        .firstSection {
            grid-template-columns: 1fr 1fr;
        }

        .cartQuantity {
            display: flex;
            justify-content: space-between;
        }

        .mayLike__products {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
