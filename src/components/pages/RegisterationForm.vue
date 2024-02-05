<template>
    <section>
        <div class="formField-wrapper">
            <div class="formField">
                <div class="register">
                    <h2 class="signup__head">Sign Up</h2>
                    <form @submit.prevent="">
                        <div class="formControl">
                            <input
                                type="text"
                                id="user_name"
                                placeholder="Your Name..."
                            />
                        </div>
                        <div class="formControl">
                            <input
                                type="email"
                                id="user_email_signup"
                                placeholder="Email Address..."
                            />
                        </div>
                        <div class="formControl">
                            <input
                                type="password"
                                id="user_password_signup"
                                placeholder="Password"
                            />
                        </div>
                        <div class="formControl">
                            <button type="submit" class="btn">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="login hidden">
                    <h2 class="signin__head">Sign In</h2>
                    <form>
                        <label for="user_email_signin">Email</label>
                        <input type="email" id="user_email_signin" />

                        <label for="user_password_signin">Password</label>
                        <input type="password" id="user_password_signin" />

                        <button type="submit" class="btn">Sign In</button>
                    </form>
                </div>
            </div>
            <aside>
                <div class="aside-text">
                    <section class="login-block">
                        <h2>Already a user?</h2>
                        <button type="submit" id="login-btn" class="btn">
                            Sign In
                        </button>
                    </section>
                    <section class="register-block hidden">
                        <h2>New User?</h2>
                        <button type="submit" id="register-btn" class="btn">
                            Sign Up
                        </button>
                    </section>
                </div>
            </aside>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
    .formField-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .formField {
        background-color: white;
    }

    .aside-text {
        background-color: #0a1d56;
        color: white;
    }

    .hidden {
        display: none;
    }

    .signup__head {
        color: #0a1d56;
    }

    .register,
    .login,
    .register-block,
    .login-block {
        padding: 2em;
    }

    .formControl {
        padding: 0.5em 0;
    }

    .formControl input {
        padding: 0.5em 1em;
        outline: none;
    }
</style>
