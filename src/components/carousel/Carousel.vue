<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide"></slot>

        <!-- Navigation tings -->
        <div class="navigate">
            <div class="toggle__left">
                <i @click="prevSlide" class="fa-solid fa-angle-left"></i>
            </div>
            <div class="toggle__right">
                <i @click="nextSlide" class="fa-solid fa-angle-right"></i>
            </div>
        </div>
        <div class="pagination">
            <span
                @click="gotToSlide(index)"
                v-for="(slide, index) in getCountSlide"
                :key="index"
                :class="{ active: index + 1 === currentSlide }"
            ></span>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    const currentSlide = ref(1);
    const getCountSlide = ref(null);
    const autoPlayEnabled = ref(true);
    const timeoutDuration = ref(5000);

    //next slide
    const nextSlide = () => {
        if (currentSlide.value === getCountSlide.value) {
            currentSlide.value = 1;
            return;
        }
        currentSlide.value += 1;
    };

    //prev slide
    const prevSlide = () => {
        if (currentSlide.value === 1) {
            currentSlide.value = 1;
            return;
        }
        currentSlide.value -= 1;
    };

    const gotToSlide = (index) => {
        currentSlide.value = index + 1;
    };

    // autoplay
    // const autoplay = () => {
    //     setInterval(() => {
    //         nextSlide();
    //     }, timeoutDuration.value);
    // };

    // if (autoPlayEnabled.value) {
    //     autoplay();
    // }

    onMounted(() => {
        getCountSlide.value = document.querySelectorAll(".slide").length;
    });
</script>

<style scoped>
    .carousel {
        overflow-x: hidden;
    }

    /* FIXME */
    .navigate {
        padding: 0 1em;
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toggle__left,
    .toggle__right {
        display: flex;
        flex: 1;
    }

    .toggle__right {
        justify-content: flex-end;
    }

    i {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #6347c7;
        color: white;
    }

    .pagination {
        position: absolute;
        bottom: 1.5em;
        width: 100%;
        display: flex;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }

    .pagination span {
        cursor: pointer;
        width: 1.3em;
        height: 1.3em;
        border-radius: 50%;
        background-color: #fff;
    }

    .pagination span.active {
        background-color: #6347c7;
    }

    @media (max-width: 35em) {
        .pagination {
            display: none;
        }
    }
</style>
