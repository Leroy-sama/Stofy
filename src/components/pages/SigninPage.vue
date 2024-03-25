<template>
    <section class="registration">
        <div class="formField-wrapper">
            <div class="formField">
                <div class="login">
                    <h2 class="signin__head">Sign In</h2>
                    <form class="form2" @submit.prevent="signInToAccount">
                        <div class="form-control">
                            <input
                                type="email"
                                id="user_email_signin"
                                placeholder="Email address"
                                v-model="email"
                            />
                        </div>
                        <div class="form-control">
                            <input
                                type="password"
                                id="user_password_signin"
                                placeholder="Password"
                                v-model="pswd"
                            />
                        </div>
                        <button type="submit" class="btn">Sign In</button>
                    </form>
                    <a href="#">Forgot your password</a>
                    <div class="title">
                        <span class="line"></span>
                        <span class="text">Or</span>
                        <span class="line"></span>
                    </div>
                    <p class="cont-text">Continue with</p>
                    <div class="continue">
                        <GoogleIcon />
                        <FacebookIcon />
                    </div>
                    <div class="aside-text">
                        <p>New User?</p>
                        <RouterLink to="/signup" class="btnwew">
                            Sign Up
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import GoogleIcon from "@/assets/icons/GoogleIcon.vue";
    import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
    import { RouterLink } from "vue-router";
    import { reactive, ref } from "vue";

    const email = reactive({
        val: "",
        isValid: true,
    });

    const pswd = reactive({
        val: "",
        isValid: true,
    });

    const formIsValid = ref(true);

    const validateForm = () => {
        formIsValid.value = true;
        if (email.val === "") {
            email.isValid = false;
            formIsValid.value = false;
        }

        if (pswd.val === "" || pswd.val.length < 8) {
            pswd.isValid = false;
            formIsValid.value = false;
        }
    };

    const signInToAccount = () => {
        console.log("signed in");
    };
</script>

<style scoped>
    .hidden {
        display: none;
    }

    .registration {
        padding: 2em 1em;
    }

    .formField-wrapper {
        background-color: white;
        /* max-width: 1200px; */
        margin-inline: auto;
    }

    .signin__head {
        text-align: center;
        color: #163020;
    }

    .login {
        padding: 2em;
    }

    .form2 {
        padding: 1em 0;
    }

    .form-control input {
        width: 100%;
        padding: 1em;
        border: 1px solid #3a3a3a;
        outline: none;
        margin: 1em 0;
    }

    .btn {
        background-color: black;
        color: white;
        border: 2px solid black;
        cursor: pointer;
        padding: 0.5em 2.5em;
        font-size: 1rem;
    }

    .btn:hover {
        color: black;
        background-color: white;
    }

    .title,
    .continue {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .continue {
        gap: 3em;
    }

    .cont-text {
        text-align: center;
        padding: 1em 0;
    }

    .line {
        display: block;
        width: 50px;
        height: 2px;
        background-color: #163020;
    }

    .register-block {
        display: flex;
    }

    .aside-text {
        display: flex;
        gap: 1em;
        padding: 2em 0;
    }
</style>
