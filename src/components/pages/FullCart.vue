<template>
    <section class="cart">
        <div class="cart__wrapper">
            <h3 class="cart__head">Your Cart</h3>
            <div class="cont-sum">
                <div class="cart__side">
                    <CartItem
                        v-for="item in cartStore.items"
                        :key="item.productId"
                        :prodId="item.productId"
                        :title="item.title"
                        :mainImage="item.mainImage"
                        :price="item.price"
                        :qty="item.qty"
                    ></CartItem>
                </div>
                <div class="summary__side">
                    <h4 class="summary__head">Total Amount</h4>
                    <div class="totals">
                        <div class="total">
                            <span class="total__span">Total</span>
                            <p class="total__tot">sh {{ cartStore.total }}</p>
                        </div>
                        <div class="shipping">
                            <span class="ship__span">Shipping</span>
                            <p class="ship__tot">Sh.500</p>
                        </div>
                        <div class="taxt">
                            <span class="tax__span">Vat(included)</span>
                            <p class="tax__tot">sh 300</p>
                        </div>
                        <div class="grand">
                            <span class="grand__span">Grand Total</span>
                            <p class="grand__tot">sh{{ cartStore.total }}</p>
                        </div>
                    </div>
                    <RouterLink to="/checkout" class="sbt">Checkout</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import CartItem from "@/components/items/CartItem.vue";
    import { useCartStore } from "@/pinia/cartStore";

    const cartStore = useCartStore();
</script>

<style scoped>
    .cart {
        margin: 0 1em 3em;
    }

    img {
        max-width: 100px;
    }

    .cart__wrapper {
        padding: 1em;
    }

    .cont-sum {
        display: flex;
        flex-direction: column;
        gap: 2em;
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

    .summary__head {
        font-size: 1.2rem;
    }

    .total,
    .shipping,
    .taxt,
    .grand {
        display: flex;
        justify-content: space-between;
        padding: 0.5em 0;
    }

    .total__span,
    .ship__span,
    .tax__span,
    .grand__span {
        text-transform: uppercase;
        color: rgb(139, 139, 139);
    }

    .total__tot,
    .ship__tot,
    .tax__tot,
    .grand__tot {
        font-weight: 600;
    }

    .grand__tot {
        color: rgb(3, 37, 3);
    }

    .totals {
        margin-bottom: 2em;
    }

    .sbt {
        width: 100%;
        max-width: 700px;
        padding: 0.5em 3em;
        margin: 1.5em 0;
        background-color: rgb(5, 39, 5);
        border: 1px solid rgb(5, 39, 5);
        color: white;
        cursor: pointer;
    }

    .sbt:hover {
        background-color: rgb(3, 63, 3);
    }

    @media (min-width: 35em) {
        .cart__wrapper {
            max-width: 1200px;
            margin-inline: auto;
        }

        .item__name {
            font-size: 1.3rem;
        }

        .cont-sum {
            display: grid;
            grid-template-areas: "co co co co su su";
            gap: 2em;
        }

        .cart__side {
            grid-area: co;
        }

        .summary__side {
            grid-area: su;
            padding: 2em;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        }

        /* .cart__content {
            display: flex;
            gap: 1em;
            padding: 2em;
        } */
    }
</style>
