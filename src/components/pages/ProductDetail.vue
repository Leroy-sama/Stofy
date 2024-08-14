<template>
	<section class="details" v-if="product">
		<div class="firstSection">
			<div class="image__details">
				<img class="main-img" :src="image" :alt="title" />
			</div>
			<div class="description__details">
				<span class="brand">{{ category }}</span>
				<h2 class="desc__head">{{ title }}</h2>
				<p class="desc__text">
					{{ description }}
				</p>
				<span class="price">${{ price }}</span>
				<div class="cartQuantity">
					<QuantityItem :quantity="quantity" />
					<button class="cart-btn" @click="addToCart">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
		<div class="description">
			<h1 class="desc__head">Description</h1>
			<p class="desc__text">
				{{ description }}
			</p>
		</div>
		<div class="mayLike">
			<h2 class="maylike__head">You may also like</h2>
			<div class="mayLike__products">
				<div class="product">
					<img
						src="https://i.pinimg.com/564x/47/cd/3a/47cd3a7466fed5fb38135049c7dae06b.jpg"
					/>
					<span class="product__head">Product 1</span>
				</div>
				<div class="product">
					<img
						src="https://i.pinimg.com/564x/36/cd/09/36cd09baefff367ff94cdeae9b59fc2d.jpg"
					/>
					<span class="product__head">Product 2</span>
				</div>
				<div class="product">
					<img
						src="https://i.pinimg.com/564x/b0/5d/6d/b05d6da86ffe1ed6c73df588ca7fefd5.jpg"
					/>
					<span class="product__head">Product 3</span>
				</div>
			</div>
		</div>
	</section>
	<section v-else>
		<h1>Loading loading loading....</h1>
	</section>
</template>

<script setup>
	import QuantityItem from "@/components/items/QuantityItem.vue";

	import { useCartStore } from "@/pinia/cartStore";
	import { onMounted, computed, ref } from "vue";
	import { useRoute } from "vue-router";

	const cartStore = useCartStore();

	const route = useRoute();

	const product = ref(null);

	const id = route.params.id;

	const quantity = ref(0);

	const title = computed(() => {
		return product.value.title;
	});

	const description = computed(() => {
		return product.value.description;
	});

	const price = computed(() => {
		return product.value.price;
	});

	const image = computed(() => {
		return product.value.image;
	});

	const category = computed(() => {
		return product.value.category;
	});

	const getProductData = async (id) => {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		const data = await response.json();
		console.log(data);
		product.value = data;
	};

	onMounted(() => {
		getProductData(route.params.id);
	});

	const addToCart = () => {
		cartStore.addProductToCart({
			id: product.value.id,
			title: product.value.title,
			mainImage: product.value.mainImage,
			price: product.value.price,
			qty: selectedQuantity.value,
		});
	};
</script>

<style scoped>
	li {
		list-style: none;
	}

	.details {
		max-width: 1200px;
		margin-inline: auto;
		padding: 2em 0;
	}

	.firstSection {
		display: grid;
		gap: 3em;

		padding: 2em 0;
	}

	.main-img {
		inline-size: 100%;
		/* aspect-ratio: 4/3;
		object-fit: cover; */
	}

	.box {
		padding: 1em 0;
	}

	.box-imgs {
		/* max-width: 300px; */
		inline-size: 100%;
		aspect-ratio: 4/3;
		object-fit: cover;
	}

	.small-imgs {
		display: flex;
		gap: 1em;
	}

	.brand {
		text-transform: uppercase;
		font-weight: 700;
	}

	.desc__head {
		font-size: 2rem;
	}

	.desc__text {
		padding: 1em 0;
	}

	.price {
		font-family: "Fraunces", serif;
		font-size: 1.5rem;
	}

	.description {
		padding: 2em 0;
	}

	.cartQuantity {
		display: flex;
		gap: 1.5em;
		flex-direction: column;

		margin: 1.5em 0;
	}

	.cartQuantity .cart-btn {
		padding: 1em 3em;
		background-color: black;
		color: white;
		border: 1px solid black;
		cursor: pointer;
		width: 100%;
	}

	.cartQuantity .cart-btn:hover {
		color: black;
		background-color: white;
	}

	.properties {
		font-weight: 700;
	}

	.mayLike {
		padding: 2em 0;
	}

	.mayLike__products {
		display: grid;
		gap: 1em;
	}

	.product img {
		inline-size: 100%;
		aspect-ratio: 4/3;
		object-fit: cover;
	}

	.details {
		padding: 0 1em;
	}

	@media (min-width: 35em) {
		.firstSection {
			grid-template-columns: 1fr 1fr;
		}

		.cartQuantity {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.cartQuantity .cart-btn {
			width: auto;
		}

		.mayLike__products {
			grid-template-columns: repeat(3, 1fr);
		}

		.desc__head {
			font-size: 3rem;
		}
	}
</style>
