import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        items: [],
        total: 0,
        qty: 0,
    }),
    actions: {
        addProductToCart(product) {
            const productInCartIndex = this.items.findIndex(
                (ci) => ci.productId === product.id
            );

            if (productInCartIndex >= 0) {
                this.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: product.id,
                    title: product.title,
                    image: product.mainImage,
                    price: product.price,
                    qty: 1,
                };
                this.items.push(newItem);
            }
            this.qty++;
            this.total += product.price;
        },
        removeProductFromCart(prodId) {
            const productInCartIndex = this.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            if (productInCartIndex !== -1) {
                const prodData = this.items[productInCartIndex];
                this.removeItem(productInCartIndex);
                this.updateCartState(prodData);
            }
        },
        removeItem(index) {
            this.items.splice(index, 1);
        },
        updateCartState(prodData) {
            this.qty -= prodData.qty;
            this.total -= prodData.price * prodData.qty;
        },
    },
});
