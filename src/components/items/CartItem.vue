<template>
    <div class="cart__content">
        <img src="@/assets/images/nikeTravisScott.jpg" alt="" />
        <div class="item__details">
            <p class="item__name">Nike Cactus Jack</p>
            <span class="item__cost"></span>
        </div>
        <div class="quantity">
            <span class="qty">X1</span>
        </div>
        <DeleteIcon class="del-icon" @click="remove"></DeleteIcon>
    </div>
</template>

<script setup>
    import DeleteIcon from "@/assets/icons/DeleteIcon.vue";

    const props = defineProps(["prodId", "title", "mainImage", "price"]);

    const remove = () => {
        store.dispatch("cart/removeFromCart", { productId: prodId });
    };
</script>

<style scoped></style>
