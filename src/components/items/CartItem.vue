<template>
    <div class="cart__content">
        <img :src="mainImage" :alt="title" />
        <div class="item__details">
            <p class="item__name">{{ title }}</p>
            <span class="item__cost">{{ price }}</span>
        </div>
        <div class="quantity">
            <span class="qty">X{{ qty }}</span>
        </div>
        <DeleteIcon class="del-icon" @click="removeFromCart"></DeleteIcon>
    </div>
</template>

<script setup>
    import DeleteIcon from "@/assets/icons/DeleteIcon.vue";
    import { useCartStore } from "@/pinia/cartStore";

    const props = defineProps(["prodId", "title", "qty", "mainImage", "price"]);

    const cartStore = useCartStore();

    const removeFromCart = () => {
        cartStore.removeProductFromCart(props.prodId);
    };
</script>

<style scoped>
    .del-icon {
        cursor: pointer;
    }

    .cart__content img {
        max-width: 300px;
    }
</style>
