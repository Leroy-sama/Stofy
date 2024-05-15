<template>
    <section class="profile">
        <div class="profile__wrapper">
            <h1 class="profile__head">Profile Settings</h1>
            <div class="the__profile">
                <div class="user">
                    <p class="user__initials">LM</p>
                </div>
                <div class="user__details">
                    <div class="form-control">
                        <input type="radio" />
                        <input type="radio" />
                    </div>
                    <div class="form-control">
                        <label for="firstname">Firstname</label>
                        <input
                            type="text"
                            class="firstname"
                            v-model.trim="firstname"
                        />
                    </div>
                    <div class="form-control">
                        <label for="lastname">Lastname</label>
                        <input
                            type="text"
                            class="lastname"
                            v-model.trim="lastname"
                        />
                    </div>
                    <div class="form-control">
                        <label for="email">Email Address</label>
                        <input
                            type="email"
                            class="email"
                            v-model.trim="email"
                        />
                    </div>
                    <div class="form-control">
                        <button class="btn">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from "vue";

    const firstname = ref("");

    const lastname = ref("");

    const email = ref("");
</script>

<style scoped>
    .profile__wrapper {
        max-width: 1200px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2em 0;
        /* border: 1px solid red; */
    }

    .profile__head {
        color: #163020;
        text-align: center;
        padding: 1em 0;
    }

    .the__profile {
        /* border: 2px solid blue; */
        padding: 2em;
        background-color: #e4e4e4;
    }

    .user {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user__initials {
        font-size: 2rem;
        background-color: #163020;
        color: #fff;
        padding: 1.5em;
        border-radius: 50%;
    }

    .form-control {
        padding: 1em 0;
    }

    .form-control label {
        display: block;
    }

    .form-control input {
        width: 100%;
        max-width: 500px;
        /* max-width: 100%; */
        padding: 1em;
        outline: none;
    }

    .btn {
        background-color: #163020;
        color: white;
        border: #163020;
        padding: 1em 2em;
        cursor: pointer;
        width: 100%;
    }
</style>
