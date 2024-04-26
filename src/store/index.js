import { createStore } from "vuex";

import productsModule from "./modules/products.js";
import usersModule from "./modules/users.js";
import cartModule from "./modules/cart.js";

const store = createStore({
    modules: {
        prods: productsModule,
        users: usersModule,
        cart: cartModule,
    },
});

export default store;
