import { createStore } from "vuex";

import productsModule from "./modules/products.js";
import usersModule from "./modules/users.js";

const store = createStore({
    modules: {
        prods: productsModule,
        users: usersModule,
    },
});

export default store;
