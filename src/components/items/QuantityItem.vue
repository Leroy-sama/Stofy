<template>
    <div class="quantity">
        <MinusIcon @click="subtraction" class="minus" />
        <div class="quantity__box">
            <p class="box__value">{{ quantity }}</p>
        </div>
        <PlusIcon @click="addition" class="plus" />
    </div>
</template>

<script setup>
    import { ref } from "vue";

    import MinusIcon from "@/assets/icons/MinusIcon.vue";
    import PlusIcon from "@/assets/icons/PlusIcon.vue";

    const quantity = ref(0);

    const addition = () => {
        quantity.value++;
    };

    const subtraction = () => {
        if (quantity.value > 0) {
            quantity.value--;
        }
    };
</script>

<style scoped>
    .quantity {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #a9a9a9;
        gap: 1em;
        padding: 0 1em;
    }

    .quantity__box {
        padding: 0.5em;
    }

    .box__value {
        font-size: 1.2rem;
    }

    .minus,
    .plus {
        cursor: pointer;
    }
</style>
