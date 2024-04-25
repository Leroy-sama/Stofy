<template>
    <section class="details" v-if="selectedProduct">
        <div class="firstSection">
            <div class="image__details">
                <img class="main-img" :src="mainImage" :alt="title" />
                <div class="small-imgs">
                    <div
                        class="box"
                        v-for="(
                            images, index
                        ) in selectedProduct.secondaryImages"
                        :key="index"
                        @click="updateMainImage(images)"
                    >
                        <img class="box-imgs" :src="images" />
                    </div>
                </div>
            </div>
            <div class="description__details">
                <span class="brand">{{ brand }}</span>
                <h2 class="desc__head">{{ title }}</h2>
                <p class="desc__text">
                    {{ description }}
                </p>
                <span class="price">${{ price }}</span>
                <div class="cartQuantity">
                    <QuantityItem />
                    <button class="cart-btn">Add to Cart</button>
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
    <section v-else>
        <h1>Loading loading loading....</h1>
    </section>
</template>

<script setup>
    import QuantityItem from "@/components/items/QuantityItem.vue";
    import CartIcon from "@/assets/icons/CartIcon.vue";
    import { onMounted, computed, ref } from "vue";
    import { useStore } from "vuex";
    import { useRoute } from "vue-router";

    const route = useRoute();

    const store = useStore();

    const id = route.params.id;

    const selectedProduct = ref(null);

    const title = computed(() => {
        return selectedProduct.value.title;
    });

    const description = computed(() => {
        return selectedProduct.value.description;
    });

    const price = computed(() => {
        return selectedProduct.value.price;
    });

    const mainImage = computed(() => {
        return mainImageSrc.value || selectedProduct.value.mainImage;
    });

    const brand = computed(() => {
        return selectedProduct.value.brand;
    });

    onMounted(() => {
        const products = store.getters["prods/products"];
        selectedProduct.value = products.find((product) => {
            return product.id === id;
        });
    });

    const mainImageSrc = ref(null);

    const updateMainImage = (images) => {
        mainImageSrc.value = images;
    };
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
        gap: 3em;

        padding: 2em 0;
    }

    .main-img {
        inline-size: 100%;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    .box {
        padding: 1em 0;
    }

    .box-imgs {
        /* max-width: 300px; */
        inline-size: 100%;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    .small-imgs {
        display: flex;
        gap: 1em;
    }

    .brand {
        text-transform: uppercase;
        font-weight: 700;
    }

    .desc__head {
        font-size: 2rem;
    }

    .desc__text {
        padding: 1em 0;
    }

    .price {
        font-family: "Fraunces", serif;
        font-size: 1.5rem;
    }

    .description {
        padding: 2em 0;
    }

    .cartQuantity {
        display: flex;
        gap: 1.5em;
        flex-direction: column;

        margin: 1.5em 0;
    }

    .cartQuantity .cart-btn {
        padding: 1em 3em;
        background-color: black;
        color: white;
        border: 1px solid black;
        cursor: pointer;
        width: 100%;
    }

    .cartQuantity .cart-btn:hover {
        color: black;
        background-color: white;
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

    .details {
        padding: 0 1em;
    }

    @media (min-width: 35em) {
        .firstSection {
            grid-template-columns: 1fr 1fr;
        }

        .cartQuantity {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .cartQuantity .cart-btn {
            width: auto;
        }

        .mayLike__products {
            grid-template-columns: repeat(3, 1fr);
        }

        .desc__head {
            font-size: 3rem;
        }
    }
</style>
