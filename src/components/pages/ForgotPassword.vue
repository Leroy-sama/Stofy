<template>
    <section class="forgot">
        <Modal v-if="modalActive" @close-modal="closeModal" />
        <div class="forgot__wrapper">
            <h2 class="forgot__head">Reset Password</h2>
            <p class="forgot__text">
                Forgot your password? Enter your email to reset it.
            </p>
            <div class="form-control">
                <input
                    type="email"
                    placeholder="example@me.com"
                    v-model.trim="email"
                />
            </div>
            <div class="form-control">
                <button @click="resetPswd" class="rst">Reset</button>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { getAuth, sendPasswordResetEmail } from "firebase/auth";
    import { ref } from "vue";

    import Modal from "../ui/Modal.vue";

    const email = ref("");

    const modalActive = ref(true);
    const modalMessage = ref();

    const closeModal = () => {
        modalActive.value = !modalActive.value;
        email.value = "";
    };

    const resetPswd = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email.value)
            .then(() => {
                console.log(email.value);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
</script>

<style scoped>
    .forgot {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        position: relative;
    }

    .forgot__head {
        font-size: 2rem;
        text-align: center;
    }

    .forgot__text {
        text-align: center;
    }

    .form-control {
        display: flex;
        justify-content: center;
        padding: 1em 0;
    }

    .form-control input {
        width: 100%;
        padding: 0.7em 1em;
    }

    .form-control button {
        padding: 0.5em 2em;
        background-color: #000;
        border: 1px solid #000;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
