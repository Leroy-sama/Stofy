<template>
    <footer>
        <div class="footer__wrapper">
            <div class="logo-div">
                <h1 class="logo">BlackM</h1>
            </div>
            <div class="columns__wrapper">
                <div class="column">
                    <p class="sub-text">
                        Subscribe to our newsletter to get updated terms and
                        information
                    </p>
                    <div class="form-control">
                        <input type="text" name="email" id="email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
                <div class="column">
                    <h3 class="links__head">Helpful Links</h3>
                    <div class="links__items">
                        <div>
                            <a href="#">Home</a>
                        </div>
                        <div><a href="">Products</a></div>
                        <div><a href="">Cart</a></div>
                        <div><a href="">Profile</a></div>
                    </div>
                </div>
                <div class="column">
                    <h3 class="contact__head">Contact Us</h3>
                    <div class="phone">
                        <FluentPhone />
                        <span>+254715354384</span>
                    </div>
                    <div class="email">
                        <EmailIcon />
                        <span>blackmenterprises@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import FluentPhone from "@/assets/icons/FluentPhone.vue";
    import EmailIcon from "@/assets/icons/EmailIcon.vue";
</script>

<style scoped>
    footer {
        background-color: #163020;
        color: #e1f0da;
        padding: 0 1em;
    }

    .columns__wrapper {
        display: grid;
        gap: 2em;
    }

    .links__items {
        display: flex;
        gap: 1em;
        flex-direction: column;
    }

    .links__head,
    .contact__head {
        color: yellow;
    }

    #email {
        background-color: #163020;
        border: 1px solid white;
        outline: none;
        color: white;
    }

    .form-control button {
        color: #163020;
        background-color: white;
        border: 1px solid white;
    }

    .links__items a {
        color: white;
        padding: 0.5em 0;
        transition: all 300ms ease-out;
    }

    .links__items a:hover {
        color: yellow;
        transform: translateX(20px);
    }

    .phone,
    .email {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    @media (min-width: 35em) {
        .footer__wrapper {
            padding: 2em 0;
            max-width: 1200px;
            margin-inline: auto;
        }

        .columns__wrapper {
            grid-template-columns: repeat(3, 1fr);
        }

        .links__items {
            flex-direction: row;
            padding: 1em 0;
        }
    }
</style>
