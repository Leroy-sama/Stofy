import { createStore } from "vuex";

import productsModule from "./modules/products.js";

const store = createStore({
    modules: {
        prods: productsModule,
    },
});

export default store;
