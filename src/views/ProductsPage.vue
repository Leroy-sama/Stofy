<script setup lang="ts">
	interface Product {
		id: number;
		title: string;
		description: string;
		price: number;
		image: string;
		category: string;
	}
	import BlogItem from "@/components/items/BlogItem.vue";
	import { onMounted, ref } from "vue";

	const products = ref<Product[]>([]);
	const APIURL = "https://dummyjson.com/products";

	const fetchProducts = async () => {
		const response = await fetch("/data.json");
		const data = await response.json();
		products.value = data;
		console.log(products.value);
	};

	onMounted(() => {
		fetchProducts();
	});
</script>

<template>
	<main>
		<section class="products">
			<div class="wrapper">
				<h1 class="products__head">The Products Page</h1>
				<p class="products__text">Find all our products here</p>
				<div class="products__grid">
					<BlogItem
						v-for="prod in products"
						:key="prod.id"
						:prodID="prod.id"
						:prodImage="prod.image"
						:prodTitle="prod.title"
						:prodPrice="prod.price"
						:prodCategory="prod.category"
					/>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="css" scoped>
	.products {
		padding: 1.5rem 0;
	}

	.products__head {
		font-size: 2rem;
	}

	.products__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
		padding: 1rem 0;
	}
</style>
