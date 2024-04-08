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

    //autoplay
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
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #163020;
        color: white;
    }

    .pagination {
        position: absolute;
        bottom: 1.5em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .pagination span {
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .pagination span.active {
        background-color: #163020;
    }
</style>
