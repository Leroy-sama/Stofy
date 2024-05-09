import { defineStore } from "pinia";

export const useUserStore = defineStore("useStore", {
    state: () => ({
        users: [],
    }),
    actions: {
        addUser(newUser) {
            this.users.push(newUser);
        },
        clearUser() {
            this.user = null;
        },
    },
});
