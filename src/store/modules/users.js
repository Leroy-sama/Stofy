export default {
    namespaced: true,
    state() {
        return {
            users: [
                {
                    id: "u1",
                    firstname: "George",
                    lastname: "Clooney",
                    email: "clooneygeorge@gmai.com",
                    password: "itsmecl00n",
                },
                {
                    id: "u2",
                    firstname: "Salma",
                    lastname: "Hayek",
                    email: "hayeksalma@gmail.com",
                    password: "bingbing",
                },
            ],
        };
    },
    getters: {
        users(state) {
            return state.users;
        },
    },
};
