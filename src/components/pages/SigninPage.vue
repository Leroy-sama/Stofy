<template>
    <section class="registration">
        <div class="formField-wrapper">
            <div class="formField">
                <div class="login">
                    <h2 class="signin__head">Sign In</h2>
                    <p class="sign__text">
                        Enter your email and password to login to your account
                    </p>
                    <form class="form2" @submit.prevent="signIn">
                        <div
                            class="form-control"
                            :class="{ invalid: !email.isValid }"
                        >
                            <label for="email">Email Address</label>
                            <input
                                type="email"
                                id="user_email_signin"
                                placeholder="Email address"
                                v-model.trim="email.val"
                                @blur="clearValidity(email)"
                            />
                            <p v-if="!email.isValid" class="err-msg">
                                Please enter a valid email address
                            </p>
                        </div>
                        <div
                            class="form-control"
                            :class="{ invalid: !pswd.isValid }"
                        >
                            <label for="pswd">Password</label>
                            <input
                                type="password"
                                id="user_password_signin"
                                placeholder="Password"
                                v-model.trim="pswd.val"
                                @blur="clearValidity(pswd)"
                            />
                            <p v-if="!pswd.isValid" class="err-msg">
                                Please enter a correct password
                            </p>
                        </div>
                        <button type="submit" class="btn">Sign In</button>
                    </form>
                    <RouterLink to="/forgot">Forgot your password</RouterLink>
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
    import { RouterLink, useRouter } from "vue-router";
    import { reactive, ref } from "vue";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { app } from "@/firebase/firebase";

    const router = useRouter();

    const error = ref(null);
    const errMsg = ref("");

    const email = reactive({
        val: "",
        isValid: true,
    });

    const pswd = reactive({
        val: "",
        isValid: true,
    });

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const formIsValid = ref(true);

    const clearValidity = (input) => {
        input.isValid = true;
    };

    const validateForm = () => {
        formIsValid.value = true;
        if (email.val === "" || !validateEmail(email.val)) {
            email.isValid = false;
            formIsValid.value = false;
        }

        if (pswd.val === "" || pswd.val.length < 8) {
            pswd.isValid = false;
            formIsValid.value = false;
        }
    };

    // const signInToAccount = () => {
    //     validateForm();

    //     if (!formIsValid.value) {
    //         console.log("form not valid");
    //         return;
    //     } else {
    //         console.log("form Is Valid");

    //         const formData = {
    //             email: email.val,
    //             pswd: pswd.val,
    //         };

    //         console.log(formData);
    //     }
    // };

    const signIn = async () => {
        validateForm();
        if (!formIsValid.value) {
            return;
        }

        if (formIsValid.value) {
            const firebaseAuth = getAuth(app);
            try {
                const loginUser = signInWithEmailAndPassword(
                    firebaseAuth,
                    email.val,
                    pswd.val
                );
                router.push("/home");
            } catch (err) {
                error.value = true;
                errMsg.value = err.message;
            }
        }
    };
</script>

<style scoped>
    .hidden {
        display: none;
    }

    .err-msg {
        color: red;
        padding: 0.5em 0;
        font-size: 0.8rem;
    }

    .invalid input {
        border: 1px solid red;
    }

    .registration {
        padding: 2em 0;
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

    .sign__text {
        padding: 1em 0;
        text-align: center;
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

    .invalid input {
        border: 1px solid red;
    }

    @media (min-width: 35em) {
        .formField {
            max-width: 600px;
            margin-inline: auto;
        }
    }
</style>
