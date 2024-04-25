<template>
    <Home />
    <section class="categories">
        <div class="categories__wrapper">
            <div class="head__wrapper">
                <span class="arrow"></span>
                <h2 class="categories__head">Product categories</h2>
                <span class="arrow"></span>
            </div>
            <div class="categories__box">
                <div class="category1">
                    <RouterLink to="/products" class="category__name"
                        >Electronics & accessories</RouterLink
                    >
                </div>
                <div class="category2">
                    <RouterLink to="/products" class="category__name"
                        >Clothes</RouterLink
                    >
                </div>
                <div class="category3">
                    <RouterLink to="/products" class="category__name"
                        >Shoes</RouterLink
                    >
                </div>
                <div class="category4">
                    <RouterLink to="/products" class="category__name"
                        >Furniture</RouterLink
                    >
                </div>
            </div>
            <div class="cta">
                <a href="">Shop all products</a>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="about__wrapper">
            <div class="head__wrapper">
                <span class="arrow"></span>
                <h2 class="about__head">About us</h2>
                <span class="arrow"></span>
            </div>

            <div class="abouts__wrapper">
                <div class="about1">
                    <img
                        src="@/assets/images/whatIsBlackM.jpg"
                        alt="about us"
                    />
                    <h3 class="about__query">What is BlackM?</h3>
                    <p class="about__ansr">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati quidem aliquid molestias quis similique quos
                        consequuntur atque reiciendis aut repellat, ipsam beatae
                        veritatis omnis, laudantium facere possimus autem
                        consequatur cum.
                    </p>
                </div>
                <div class="about2">
                    <img src="@/assets/images/whyUs.jpg" alt="why us" />
                    <h3 class="about__query">Why should you choose BlackM?</h3>
                    <p class="about__ansr">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati quidem aliquid molestias quis similique quos
                        consequuntur atque reiciendis aut repellat, ipsam beatae
                        veritatis omnis, laudantium facere possimus autem
                        consequatur cum.
                    </p>
                </div>
                <div class="about3">
                    <img src="@/assets/images/ourPromise.jpg" alt="about us" />
                    <h3 class="about__query">Our promise</h3>
                    <p class="about__ansr">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati quidem aliquid molestias quis similique quos
                        consequuntur atque reiciendis aut repellat, ipsam beatae
                        veritatis omnis, laudantium facere possimus autem
                        consequatur cum.
                    </p>
                </div>
            </div>
            <div class="cta">
                <a href="">Go to help center</a>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Home from "@/components/carousel/Home.vue";
</script>

<style scoped>
    .hero__wrapper {
        background: linear-gradient(45deg, black, transparent),
            url(../assets/images/ecommerceLanding.jpg);

        min-height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 1em;
    }

    .arrow {
        display: block;
        width: 50px;
        height: 2px;
        background-color: #163020;
    }

    .head__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
    }

    .categories,
    .about {
        padding: 0 1em;
    }

    .categories__wrapper,
    .about__wrapper {
        max-width: 1200px;
        margin-inline: auto;
    }

    .hero__wrapper,
    .category1,
    .category2,
    .category3,
    .category4 {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .hero__bigtext {
        color: cyan;
        font-size: 2rem;
        /* background-color: white; */
    }

    .hero__desc {
        color: white;
    }

    .categories__head {
        text-align: center;
        color: olive;
        color: #163020;
        padding: 2em 0;
    }

    .about__head {
        color: #163020;
    }

    .categories__box {
        display: grid;

        gap: 2em;
    }

    .category__name {
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        position: relative;
    }

    .category__name::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: white;

        transform: scaleX(0.4);
        transform-origin: left;
        transition: transform 350ms ease-in;
    }

    .category__name:hover::after {
        transform: scaleX(1);
    }

    .category1 {
        background-image: url(../assets/images/_e1f7ca79-55d4-45da-ab66-5d475423f742.jpeg);
    }

    .category2 {
        background-image: url(../assets/images/clothes.jpeg);
    }

    .category3 {
        background-image: url(../assets/images/shoes.jpeg);
    }

    .category4 {
        background-image: url(../assets/images/furniture.jpeg);
    }

    .category1,
    .category2,
    .category3,
    .category4 {
        position: relative;
        min-height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cta {
        padding: 2em 0;
        display: flex;
        justify-content: center;
    }

    .cta a {
        color: #163020;
        border: 1px solid #163020;
        padding: 0.5em 1em;
    }

    .cta a:hover {
        color: white;
        background-color: #163020;
    }

    .about__head {
        text-align: center;
        padding: 1em 0;
    }

    .abouts__wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2em;
    }

    .abouts__wrapper img {
        inline-size: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
    }

    @media (min-width: 35em) {
        .categories__box {
            grid-template-columns: repeat(4, 1fr);
        }

        .abouts__wrapper {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
