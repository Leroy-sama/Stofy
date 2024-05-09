import { defineStore } from "pinia";

export const useAboutStore = defineStore("aboutStore", {
    state: () => ({
        cards: [
            {
                image: "@/assets/images/whatIsBlackM.jpg",
                title: "What is BlackM?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis, laudantium facere possimus autem consequatur cum.",
            },
            {
                image: "@/assets/images/whyUs.jpg",
                title: "Why should you choose BlackM?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis, laudantium facere possimus autem consequatur cum.",
            },
            {
                image: "@/assets/images/ourPromise.jpg",
                title: "Our promise",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis, udantium facere possimus autem consequatur cum.",
            },
        ],
    }),
});
