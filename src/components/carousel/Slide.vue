<template>
    <div class="slide">
        <Transition name="slide">
            <slot></slot>
        </Transition>
    </div>
</template>

<script setup></script>

<style scoped>
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.7s ease;
    }

    .slide-enter-from {
        opacity: 0;
        transform: translateX(-100%);
    }
    .slide-leave-to {
        opacity: 1;
        transform: translateX(100%);
    }
</style>
