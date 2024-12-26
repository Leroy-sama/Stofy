<script setup lang="ts">
	import IconCart from "@/assets/Icons/IconCart.vue";
	import QuantityItem from "@/components/items/QuantityItem.vue";
	import { onMounted, ref } from "vue";
	import { useRoute } from "vue-router";

	interface Product {
		id: number;
		title: string;
		description: string;
		price: number;
		images: string[];
		category: string;
		discountPercentage: number;
	}

	const route = useRoute();
	const id = parseInt(route.params.id as string);
	const product = ref<Product | null>(null);

	const fetchSingleProduct = async (id: number) => {
		try {
			const response = await fetch(
				`https://dummyjson.com/products/${id}`
			);
			const data = await response.json();
			product.value = data;
			console.log(product.value);
		} catch (err) {
			console.log(err);
		}
	};

	onMounted(() => {
		if (id !== null) {
			fetchSingleProduct(id);
		} else {
			console.error("Invalid product ID");
			// Handle invalid ID case
		}
	});
</script>

<template>
	<main class="proddetails">
		<div class="wrapper">
			<div class="details__wrap">
				<section class="details__images">
					<img class="main-image" :src="product?.images[0]" alt="" />
					<div
						class="details__images-others"
						v-for="image in product?.images"
					>
						<img :src="image" alt="" />
					</div>
				</section>
				<section class="details__description">
					<span class="category">{{ product?.category }}</span>
					<h2 class="title">{{ product?.title }}</h2>
					<p class="description">
						{{ product?.description }}
					</p>
					<div class="price-box">
						<span class="price">${{ product?.price }}</span>
						<span class="cancelled-price">$100</span>
						<span class="saved"
							>save {{ product?.discountPercentage }}%</span
						>
					</div>
					<div class="shopping">
						<QuantityItem />
						<button>
							<IconCart class="cart-icon" />
							<span>Add To Cart</span>
						</button>
					</div>
				</section>
			</div>
		</div>
	</main>
</template>

<style lang="css" scoped>
	.details__wrap {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 4rem;
	}

	.details__images {
		display: grid;
		gap: 1rem;
	}

	.main-image {
		border: 1px solid var(--clr-lightGrey);
		aspect-ratio: 4/3;
		object-fit: cover;
	}

	.details__images-others {
		display: flex;
		gap: 1rem;
	}

	.details__images-others img {
		max-width: 100px;
	}

	.details__description {
		display: grid;
		place-content: start;
		gap: 1rem;
	}

	.category {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 0.8rem;
	}

	.title {
		font-weight: bold;
		font-size: 2.5rem;
		font-family: var(--ff-tertiary);
	}

	.price-box {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.price {
		font-size: 2rem;
		font-family: var(--ff-tertiary);
	}

	.cancelled-price {
		text-decoration: line-through;
	}

	.saved {
		color: var(--clr-white);
		background-color: var(--clr-darkGreen);
		padding: 0.5rem;
		border-radius: 20px;
		font-size: 0.8rem;
	}

	.shopping {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.shopping button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid var(--clr-darkGreen);
		background-color: var(--clr-white);
		padding: 0.75rem 2rem;
		cursor: pointer;
		transition: 0.2s ease-in;
	}

	.shopping button:hover {
		background-color: var(--clr-darkGreen);
		color: var(--clr-white);
	}
</style>
