export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id: "p1",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
                    title: "Book Collection",
                    description:
                        "A collection of must-read books. All-time classics included!",
                    price: 99.99,
                    brand: "John Kiriamiti",
                },
                {
                    id: "p2",
                    image: "https://i.pinimg.com/564x/e5/6d/df/e56ddfe39b39887838125fddc4238c2f.jpg",
                    title: "Mountain Tent",
                    description:
                        "crafted specifically for the adventurous and ambitious outdoor enthusiast",
                    price: 129.99,
                    brand: "Tiger Wall",
                },
                {
                    id: "p3",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
                    title: "Grocery Box",
                    description:
                        "A box full of your favourite groceries at a very affordable price.",
                    price: 6.99,
                    brand: "Glovo",
                },
            ],
        };
    },
    getters: {
        products(state) {
            return state.products;
        },
    },
};
