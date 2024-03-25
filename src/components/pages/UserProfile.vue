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
                    <button class="btn">Save changes</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
    .profile__wrapper {
        max-width: 1200px;
        margin-inline: auto;
        padding: 2em 0;
    }

    .profile__head {
        color: #163020;
        text-align: center;
        padding: 1em 0;
    }

    .the__profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .user {
        background-color: #163020;
        color: #fff;
        padding: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user__initials {
        font-size: 2rem;
    }

    .form-control {
        padding: 1em 0;
    }

    .form-control label {
        display: block;
    }

    .form-control input {
        width: 300px;
    }

    .btn {
        background-color: #163020;
        color: white;
        border: #163020;
        padding: 1em 2em;
        cursor: pointer;
    }
</style>
