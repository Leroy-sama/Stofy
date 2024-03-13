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
                {
                    id: "p4",
                    image: "https://i.pinimg.com/564x/81/35/ba/8135ba9f3c3d6c337f6ed2bbd819dded.jpg",
                    title: "Smartphone & Tablet Bundle",
                    description:
                        "Stay connected and productive with this bundle containing a high-performance smartphone and tablet.",
                    price: 599.99,
                    brand: "TechMaster",
                },
                {
                    id: "p5",
                    image: "https://i.pinimg.com/564x/89/41/5b/89415be7da99e5cf63993f028f4983d4.jpg",
                    title: "Classic Headphones",
                    description:
                        "Immerse yourself in your favorite music with these high-quality classic headphones, designed for comfort and superior sound.",
                    price: 49.99,
                    brand: "AudioBliss",
                },
                {
                    id: "p6",
                    image: "https://i.pinimg.com/564x/7a/d6/b0/7ad6b07a11627f80174dfb370bacfbaf.jpg",
                    title: "Modern TV Unit",
                    description:
                        "Enhance your living room with this sleek and modern TV unit, featuring ample storage and stylish lighting.",
                    price: 299.99,
                    brand: "DesignFusion",
                },
                {
                    id: "p7",
                    image: "https://i.pinimg.com/564x/d9/ed/61/d9ed612739ee671c1be26c49fc94bad1.jpg",
                    title: "Sports Shoes",
                    description:
                        "Get ready for your next workout with these comfortable and durable sports shoes, engineered for performance.",
                    price: 79.99,
                    brand: "AthleticPro",
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
