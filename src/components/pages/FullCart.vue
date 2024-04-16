<template>
    <section class="cart">
        <div class="cart__wrapper">
            <div class="cart__header">
                <h3 class="cart__head">Cart</h3>
                <button class="clear">Remove All</button>
            </div>

            <div class="cart__content">
                <img src="@/assets/images/nikeTravisScott.jpg" alt="" />
                <div class="item__details">
                    <p class="item__name">AirForce 1</p>
                    <span class="item__cost">$110</span>
                </div>
                <DeleteIcon />
            </div>
            <div class="cart__btns">
                <button>Cancel</button>
                <RouterLink to="/checkout">Checkout</RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
    import DeleteIcon from "@/assets/icons/DeleteIcon.vue";
</script>

<style scoped>
    .cart__wrapper {
        max-width: 1200px;
        margin-inline: auto;
    }

    .cart__header {
        display: flex;
        justify-content: space-between;
    }

    .cart__content {
        display: flex;
        justify-content: space-between;
        gap: 1em;
        padding: 2em;
    }

    .cart__content img {
        max-width: 300px;
    }
</style>
