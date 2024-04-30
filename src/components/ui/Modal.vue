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
        background-color: rgba(0, 0, 0, 0.7);

        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 9999;
        padding: 2em;
        width: 100%;
        height: 100%;
        top: 0;
    }

    .modal__content {
        max-width: 400px;
        background-color: #fff;
        padding: 1.5em;
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
        width: 100%;
    }
</style>
