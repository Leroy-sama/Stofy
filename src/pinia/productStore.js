import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [
            {
                id: "p1",
                mainImage:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/564x/f6/8e/2c/f68e2c750e8c9b37ac72bc0d3aac7096.jpg",
                    "https://i.pinimg.com/564x/bb/a1/86/bba186e21de2a3c3ae97837b7c4b77b9.jpg",
                    "https://i.pinimg.com/564x/5c/78/f2/5c78f2041b5256174db6a752f4f29099.jpg",
                    "https://i.pinimg.com/564x/79/cf/a8/79cfa8f54417f874425d2065f50203b7.jpg",
                ],
                title: "Book Collection",
                description:
                    "A collection of must-read books. All-time classics included!",
                price: 99.99,
                brand: "John Kiriamiti",
            },
            {
                id: "p2",
                mainImage:
                    "https://i.pinimg.com/564x/e5/6d/df/e56ddfe39b39887838125fddc4238c2f.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/564x/13/a5/93/13a593df459b59099371b32c3d7000da.jpg",
                    "https://i.pinimg.com/564x/a8/2f/16/a82f16b75589303dabad8a842b906409.jpg",
                    "https://i.pinimg.com/564x/11/51/8a/11518ab4cb6a318506b65e2435642f38.jpg",
                    "https://i.pinimg.com/564x/53/25/a0/5325a019d073f609a2a8ee2763dd0e11.jpg",
                ],
                title: "Mountain Tent",
                description:
                    "crafted specifically for the adventurous and ambitious outdoor enthusiast",
                price: 129.99,
                brand: "Tiger Wall",
            },
            {
                id: "p3",
                mainImage:
                    "https://i.pinimg.com/564x/a4/a3/9d/a4a39d447f94278647758ac2d060c46c.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/236x/d5/e2/bd/d5e2bda445cc16d66fc2c5601a35c0f4.jpg",
                    "https://i.pinimg.com/236x/77/03/e3/7703e334ac7f2fb45e6131f2a58adcfc.jpg",
                    "https://i.pinimg.com/236x/bd/14/37/bd1437e5421dc3babac7ea81513c480b.jpg",
                    "https://i.pinimg.com/236x/81/8f/b5/818fb56689784191ac9787332fd459f5.jpg",
                ],
                title: "Logitech MX Keys",
                description:
                    "New experiences with the new logitec mx keys. With a new detecting keyboard.",
                price: 100.99,
                brand: "logitech",
            },
            {
                id: "p4",
                mainImage:
                    "https://i.pinimg.com/564x/81/35/ba/8135ba9f3c3d6c337f6ed2bbd819dded.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/236x/96/64/25/9664251c6da72632c2e1c9165833ddb2.jpg",
                    "https://i.pinimg.com/236x/e9/5f/5a/e95f5a0899797c6a16bdaa13b803f683.jpg",
                    "https://i.pinimg.com/236x/65/78/ed/6578ede4cffa779a7bda0635a61d89fc.jpg",
                    "https://i.pinimg.com/236x/c6/bf/77/c6bf7781cdfc4b2f9ef29f57c22de129.jpg",
                ],
                title: "Smartphone & Tablet Bundle",
                description:
                    "Stay connected and productive with this bundle containing a high-performance smartphone and tablet.",
                price: 599.99,
                brand: "TechMaster",
            },
            {
                id: "p5",
                mainImage:
                    "https://i.pinimg.com/564x/89/41/5b/89415be7da99e5cf63993f028f4983d4.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/564x/e9/05/c5/e905c536c865d8b9c93d184aef1e45ec.jpg",
                    "https://i.pinimg.com/236x/ae/db/b2/aedbb2e71627b8c98e108545fa27d3be.jpg",
                    "https://i.pinimg.com/736x/e3/87/b5/e387b595b04f67ce1332471579ce8cf0.jpg",
                    "https://i.pinimg.com/236x/df/ec/68/dfec682e0d39b6af36a0766059995c16.jpg",
                ],
                title: "Classic Headphones",
                description:
                    "Immerse yourself in your favorite music with these high-quality classic headphones, designed for comfort and superior sound.",
                price: 49.99,
                brand: "AudioBliss",
            },
            {
                id: "p6",
                mainImage:
                    "https://i.pinimg.com/564x/7a/d6/b0/7ad6b07a11627f80174dfb370bacfbaf.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/564x/ae/d8/98/aed89849bd729f2c5e3597e3080906ab.jpg",
                    "https://i.pinimg.com/564x/9f/39/eb/9f39ebdc3be044f9b7df0c7945f7c4d4.jpg",
                    "https://i.pinimg.com/564x/53/aa/e8/53aae8d07d793cf1e83d9e9612d4a8a2.jpg",
                    "https://i.pinimg.com/564x/b1/85/19/b1851992658ac1eb31e252facd3645f2.jpg",
                ],
                title: "Modern TV Unit",
                description:
                    "Enhance your living room with this sleek and modern TV unit, featuring ample storage and stylish lighting.",
                price: 299.99,
                brand: "DesignFusion",
            },
            {
                id: "p7",
                mainImage:
                    "https://i.pinimg.com/564x/d9/ed/61/d9ed612739ee671c1be26c49fc94bad1.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/236x/5d/e2/c3/5de2c3ada0f4be5da935a7a77c034781.jpg",
                    "https://i.pinimg.com/236x/04/39/6d/04396de1a1b0d88f94f56d0f98de9158.jpg",
                    "https://i.pinimg.com/564x/7b/fb/81/7bfb817c6c498641133b0dbec74f211c.jpg",
                    "https://i.pinimg.com/564x/8d/c6/b5/8dc6b510a7874e0779b19fac66964e6c.jpg",
                ],
                title: "Sports Shoes",
                description:
                    "Get ready for your next workout with these comfortable and durable sports shoes, engineered for performance.",
                price: 79.99,
                brand: "AthleticPro",
            },
            {
                id: "p8",
                mainImage:
                    "https://i.pinimg.com/564x/2f/d3/65/2fd365655040151d5bd16f0826afb6ff.jpg",
                secondaryImages: [
                    "https://i.pinimg.com/236x/89/1b/87/891b874e75c7c7de165d3c6758640ddd.jpg",
                    "https://i.pinimg.com/236x/dd/a6/5f/dda65f3a4642b607d4eef2be2bc8e993.jpg",
                    "https://i.pinimg.com/236x/1b/1b/2a/1b1b2a4c5367a683180a512615983239.jpg",
                    "https://i.pinimg.com/236x/33/0c/ec/330cecf0a3c20fc9bb376edc1e686e31.jpg",
                ],
                title: "Google Pixel 7A",
                description:
                    "At a reduced cost, the best camera, good storage, good memory, solid battery and a smooth experience with the Google Pixel 7A",
                price: 599.99,
                brand: "AthleticPro",
            },
        ],
    }),
});
