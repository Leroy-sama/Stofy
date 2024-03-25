<template>
    <section class="signup">
        <Modal
            v-if="modalActive"
            :modalMessage="modalMessage"
            @close-modal="closeModal"
        />
        <div class="signup__wrapper">
            <h2 class="signup__head">Sign Up</h2>
            <form @submit.prevent="submitForm">
                <div
                    class="form-field"
                    :class="{ invalid: !firstname.isValid }"
                >
                    <label for="firstname">Firstname</label>
                    <input
                        class="firstname"
                        type="text"
                        placeholder="Firstname"
                        v-model.trim="firstname.val"
                        @blur="clearValidity(firstname)"
                    />
                    <p v-if="!firstname.isValid" class="err-msg">
                        Firstname cannot be empty!
                    </p>
                </div>
                <div class="form-field" :class="{ invalid: !lastname.isValid }">
                    <label for="lastname">Lastname</label>
                    <input
                        class="lastname"
                        type="text"
                        placeholder="Lastname"
                        v-model.trim="lastname.val"
                        @blur="clearValidity(lastname)"
                    />
                    <p v-if="!lastname.isValid" class="err-msg">
                        Lastname cannot be empty!
                    </p>
                </div>
                <div
                    class="form-field"
                    :class="{ invalid: !emailAddress.isValid }"
                >
                    <label for="email">Email Address</label>
                    <input
                        class="email"
                        type="email"
                        placeholder="Email address"
                        v-model.trim="emailAddress.val"
                        @blur="clearValidity(emailAddress)"
                    />
                    <p v-if="!emailAddress.isValid" class="err-msg">
                        Email address cannot be empty!
                    </p>
                </div>
                <div class="form-field" :class="{ invalid: !password.isValid }">
                    <label for="password">Password</label>
                    <input
                        class="password"
                        type="password"
                        placeholder="Password"
                        v-model.trim="password.val"
                        @blur="clearValidity(password)"
                    />
                    <p v-if="!password.isValid" class="err-msg">
                        Password cannot be empty!
                    </p>
                </div>
                <div
                    class="form-field"
                    :class="{ invalid: !confirmPassword.isValid }"
                >
                    <label for="conPassword">Confirm Password</label>
                    <input
                        class="conPassword"
                        type="password"
                        placeholder="Confirm Password"
                        v-model.trim="confirmPassword.val"
                        @blur="clearValidity(confirmPassword)"
                    />
                    <p v-if="!confirmPassword.isValid" class="err-msg">
                        This field cannot be empty!
                    </p>
                </div>
                <p v-if="!formIsValid" class="err-msg">
                    Please fix the above errors
                </p>
                <button class="btn">Sign Up</button>
            </form>
            <div class="or__section">
                <div class="title">
                    <span class="line"></span>
                    <span class="text">Or</span>
                    <span class="line"></span>
                </div>
                <p class="cont-text">Sign Up with</p>
                <div class="continue">
                    <GoogleIcon />
                    <FacebookIcon />
                </div>
            </div>
            <div class="yes__account">
                <p class="yesacc__text">Already have an account?</p>
                <RouterLink to="/signin">Sign In</RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
    import GoogleIcon from "@/assets/icons/GoogleIcon.vue";
    import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
    import Modal from "../ui/Modal.vue";

    import { ref, reactive } from "vue";

    const modalMessage = ref("All fields are clear!!");
    const modalActive = ref(null);

    const closeModal = () => {
        modalActive.value = !modalActive.value;
    };

    const firstname = reactive({
        val: "",
        isValid: true,
    });
    const lastname = reactive({
        val: "",
        isValid: true,
    });
    const emailAddress = reactive({
        val: "",
        isValid: true,
    });
    const password = reactive({
        val: "",
        isValid: true,
    });
    const confirmPassword = reactive({
        val: "",
        isValid: true,
    });

    const formIsValid = ref(true);

    const clearValidity = (input) => {
        input.isValid = true;
    };

    const validateForm = () => {
        formIsValid.value = true;
        if (firstname.val === "") {
            firstname.isValid = false;
            formIsValid.value = false;
        }
        if (lastname.val === "") {
            lastname.isValid = false;
            formIsValid.value = false;
        }
        if (emailAddress.val === "" || !emailAddress.val.includes("@")) {
            emailAddress.isValid = false;
            formIsValid.value = false;
        }
        if (password.val === "" || password.val.length < 8) {
            password.isValid = false;
            formIsValid.value = false;
        }
        if (confirmPassword.val !== password.val) {
            confirmPassword.isValid = false;
            formIsValid.value = false;
        }
    };

    const submitForm = () => {
        validateForm();

        if (!formIsValid.value) {
            modalActive.value = false;
            return;
        } else {
            modalActive.value = true;
            console.log("form is valid!!");

            const formData = {
                first: firstname.val,
                last: lastname.val,
                email: emailAddress.val,
                pswd: password.val,
            };

            console.log(formData);
        }
    };
</script>

<style scoped>
    .err-msg {
        color: red;
        padding: 1em 0;
        font-size: 0.8rem;
    }

    .signup__wrapper {
        background-color: white;
        margin: 0 1em;
        padding: 4em;
    }

    .signup__head {
        padding: 1em 0;
        font-size: 2em;
    }

    .signup__head {
        color: #163020;
    }

    .form-field input {
        width: 100%;
        padding: 0.7em 1em;
        border: 1px solid #3a3a3a;
        outline: none;
        margin: 1em 0;
        color: black;
        font-size: 1rem;
    }

    .btn {
        background-color: black;
        color: white;
        border: 2px solid black;
        cursor: pointer;
        padding: 0.5em 2.5em;
        font-size: 1rem;
        margin-top: 1em;
        font-weight: 700;
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

    .yes__account {
        padding: 1em 0;
        display: flex;
        justify-content: center;
        gap: 2em;
    }

    .yesacc__text {
        font-size: 1rem;
    }

    .invalid input {
        border: 1px solid red;
    }

    @media (min-width: 35em) {
        .signup__wrapper {
            max-width: 600px;
            margin-inline: auto;
        }
    }
</style>
