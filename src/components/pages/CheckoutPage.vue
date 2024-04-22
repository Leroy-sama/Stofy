<template>
    <section class="checkout">
        <div class="section__wrapper">
            <!-- <RouterLink to="/cart" href="#" class="goback">Back</RouterLink> -->
            <div class="checkout__details">
                <h1 class="checkout__head">Checkout</h1>
                <div class="checkout__wrapper">
                    <div class="contact__deets">
                        <h2 class="deets__head">Contact Details</h2>
                        <div class="contact__form">
                            <div class="form-control">
                                <label for="name">Name</label>
                                <input
                                    type="text"
                                    placeholder="Kobbie Mainoo"
                                />
                            </div>
                            <div class="form-control">
                                <label for="name">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="kobbie@mainoo.com"
                                />
                            </div>
                            <div class="form-control">
                                <label for="name">Phone Number</label>
                                <input
                                    type="tel"
                                    name="tele"
                                    placeholder="+123 456789012"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="billing__deets">
                        <h2 class="deets__head">Address Details</h2>
                        <div class="contact__form">
                            <div class="form-control">
                                <label for="name">Address</label>
                                <input
                                    type="text"
                                    placeholder="143 Jackridge Street"
                                />
                            </div>
                            <div class="form-control">
                                <label for="name">ZIP Code</label>
                                <input type="text" placeholder="100001" />
                            </div>
                            <div class="form-control">
                                <label for="name">City</label>
                                <input type="text" placeholder="Ruiru City" />
                            </div>
                            <div class="form-control">
                                <label for="name">County</label>
                                <input type="text" placeholder="Kiambu" />
                            </div>
                        </div>
                    </div>
                    <div class="payment__deets">
                        <h2 class="deets__head">Payment Details</h2>
                        <div class="payment__form">
                            <div class="form-control">
                                <label for="visa">Visa Card</label>
                                <input type="checkbox" name="visa" id="visa" />
                            </div>
                            <div class="form-control">
                                <label for="mpesa">Mpesa</label>
                                <input
                                    type="checkbox"
                                    name="mpesa"
                                    id="mpesa"
                                />
                            </div>
                        </div>
                    </div>
                    <button class="sbt">Continue</button>
                </div>
            </div>
            <div class="summary">
                <h2 class="summ__head">Summary</h2>
                <div class="items">
                    <div class="item">
                        <img
                            src="https://i.pinimg.com/564x/f1/a9/1c/f1a91c506d25f76efdc43a4df54dc9bb.jpg"
                            alt="images"
                        />
                        <div class="item__deets">
                            <p class="item__name">Ringing two</p>
                            <span class="price">sh 2000</span>
                        </div>
                        <span class="qty">X2</span>
                    </div>
                    <div class="item">
                        <img
                            src="https://i.pinimg.com/564x/cc/d6/46/ccd646034e7d75f071de39c065780809.jpg"
                            alt="images"
                        />
                        <div class="item__deets">
                            <p class="item__name">Miwani flani</p>
                            <span class="price">sh 1000</span>
                        </div>
                        <span class="qty">X1</span>
                    </div>
                    <div class="item">
                        <img
                            src="https://i.pinimg.com/564x/d2/28/3a/d2283a59fdae3935ce59df2763ed5b86.jpg"
                            alt="images"
                        />
                        <div class="item__deets">
                            <p class="item__name">La Television</p>
                            <span class="price">sh 25000</span>
                        </div>
                        <span class="qty">X2</span>
                    </div>
                </div>
                <div class="totals">
                    <div class="total">
                        <span class="total__span">Total</span>
                        <p class="total__tot">Sh.28000</p>
                    </div>
                    <div class="shipping">
                        <span class="ship__span">Shipping</span>
                        <p class="ship__tot">Sh.500</p>
                    </div>
                    <div class="taxt">
                        <span class="tax__span">Vat(included)</span>
                        <p class="tax__tot">Sh.4000</p>
                    </div>
                    <div class="grand">
                        <span class="grand__span">Grand Total</span>
                        <p class="grand__tot">Sh.28500</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
    .checkout {
        margin: 0 1em 3em;
        /* background-color: rgb(228, 228, 228); */
    }

    .section__wrapper {
        display: flex;
        flex-direction: column-reverse;
        gap: 2em;
        background-color: white;
    }

    .summary {
        padding: 1.5em;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }

    .summ__head {
        padding: 1em 0;
        font-weight: 600;
    }

    .items {
        display: grid;
        gap: 1.5em;
        padding: 1em 0;
    }

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .item img {
        max-width: 70px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 10px;
    }

    .item .item__deets .item__name {
        font-size: 1.1rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    .item__deets .price {
        font-size: 0.9rem;
        color: rgb(110, 110, 110);
    }

    .total,
    .shipping,
    .taxt,
    .grand {
        display: flex;
        justify-content: space-between;
        padding: 0.5em 0;
    }

    .total__span,
    .ship__span,
    .tax__span,
    .grand__span {
        text-transform: uppercase;
        color: rgb(139, 139, 139);
    }

    .total__tot,
    .ship__tot,
    .tax__tot,
    .grand__tot {
        font-weight: 600;
    }

    .grand__tot {
        color: rgb(3, 37, 3);
    }

    .checkout__details {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1.5em;
    }

    .checkout__head {
        font-size: 1.7rem;
        font-weight: 600;
    }

    .deets__head {
        font-size: 1.1rem;
        font-weight: 600;
        padding: 1em 0;
    }

    .form-control label {
        display: block;
        padding: 0.5em 0;
    }

    .form-control input {
        width: 100%;
        padding: 1em;
    }

    .payment__form .form-control {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sbt {
        width: 100%;
        padding: 1em;
        margin: 1.5em 0;
        background-color: rgb(5, 39, 5);
        border: 1px solid rgb(5, 39, 5);
        color: white;
        cursor: pointer;
    }

    .sbt:hover {
        background-color: rgb(3, 63, 3);
    }

    @media (min-width: 35em) {
        .section__wrapper {
            flex-direction: row;
            /* max-width: 1200px; */
            width: 100%;
            margin-inline: auto;
            justify-content: center;
            align-items: start;
        }

        .checkout__details {
            max-width: 700px;
        }
    }
</style>
