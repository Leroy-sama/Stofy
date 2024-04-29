import { createStore } from "vuex";
import usersModule from "./modules/users.js";
import cartModule from "./modules/cart.js";

const store = createStore({
    modules: {
        users: usersModule,
        cart: cartModule,
    },
});

export default store;
