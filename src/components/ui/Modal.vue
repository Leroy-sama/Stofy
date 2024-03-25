<template>
    <div class="modal">
        <div class="modal__content">
            <p class="modal__text">{{ modalMessage }}</p>
            <button @click="closeModal">Close</button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["modalMessage"]);

    const emit = defineEmits(["close-modal"]);

    const closeModal = () => {
        emit("close-modal");
    };
</script>

<style scoped>
    .modal {
        background-color: white;
        max-width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 9999;
        padding: 2em;
    }

    .modal__text {
        padding-bottom: 1em;
    }

    .modal__content button {
        padding: 0.5em 1em;
        background-color: black;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
