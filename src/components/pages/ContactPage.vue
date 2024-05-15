<template>
    <section class="contact">
        <div class="contact__wrapper">
            <div class="head__head">
                <span class="line"></span>
                <h1 class="contact__head">Contact Us</h1>
            </div>

            <form @submit.prevent="sendMessage">
                <div class="form__control">
                    <input type="text" placeholder="Name" />
                </div>
                <div class="form__control">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                    />
                </div>
                <div class="form__control">
                    <input
                        type="tel"
                        id="telephone"
                        placeholder="Phone Number"
                    />
                </div>
                <div class="form__control">
                    <textarea
                        id="comments"
                        rows="6"
                        placeholder="Comment"
                    ></textarea>
                </div>
                <div class="form__control">
                    <button class="sbt__btn">Send Messsage</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
    const sendMessage = () => {
        console.log("prevented");
    };
</script>

<style scoped>
    .contact__wrapper {
        max-width: 1200px;
        margin-inline: auto;
        padding: 1em;
    }

    .head__head {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .line {
        background-color: rgb(5, 31, 5);
        display: block;
        width: 50px;
        height: 2px;
    }

    .contact__head {
        color: rgb(5, 31, 5);
        padding: 1em 0;
    }

    form {
        display: grid;
        gap: 1em;
    }

    .form__control input,
    .form__control textarea {
        border: none;
        outline: none;
        padding: 1em;
        border-bottom: 1px solid rgb(5, 31, 5);
        max-width: 500px;
        width: 100%;
    }

    .sbt__btn {
        padding: 0.7em 1.5em;
        background-color: rgb(5, 31, 5);
        color: white;
        font-size: 1rem;
        border: none;
        cursor: pointer;
    }
</style>
