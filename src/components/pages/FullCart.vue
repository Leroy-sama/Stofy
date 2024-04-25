<template>
    <section class="cart">
        <div class="cart__wrapper">
            <h3 class="cart__head">Cart</h3>
            <div class="cart__side">
                <div class="cart__content">
                    <img src="@/assets/images/nikeTravisScott.jpg" alt="" />
                    <div class="item__details">
                        <p class="item__name">Nike Cactus Jack</p>
                        <span class="item__cost">$110</span>
                    </div>
                    <div class="quantity">
                        <span class="qty">X1</span>
                    </div>
                    <DeleteIcon class="del-icon" />
                </div>
                <div class="cart__content">
                    <img src="@/assets/images/nikeTravisScott.jpg" alt="" />
                    <div class="item__details">
                        <p class="item__name">Nike Cactus Jack</p>
                        <span class="item__cost">$110</span>
                    </div>
                    <div class="quantity">
                        <span class="qty">X1</span>
                    </div>
                    <DeleteIcon class="del-icon" />
                </div>
                <div class="cart__ctas">
                    <span class="proce">Proceed to checkout?</span>
                    <RouterLink to="/checkout">Checkout</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import DeleteIcon from "@/assets/icons/DeleteIcon.vue";
</script>

<style scoped>
    img {
        max-width: 100px;
    }

    .cart__wrapper {
        padding: 1em;
    }

    .cart__side {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .cart__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        background-color: #cacaca;
    }

    .item__name {
        font-size: 1.1rem;
        font-weight: 700;
    }

    .item__cost {
        font-family: "Fraunces", serif;
    }

    .del-icon {
        width: 1.5rem;
        cursor: pointer;
    }

    .cart__head {
        color: green;
        font-size: 1.5rem;
        padding: 1em 0;
    }

    @media (min-width: 35em) {
        .cart__wrapper {
            max-width: 1200px;
            margin-inline: auto;
        }

        .item__name {
            font-size: 1.3rem;
        }

        /* .cart__content {
            display: flex;
            gap: 1em;
            padding: 2em;
        } */
    }
</style>
