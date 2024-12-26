<script setup lang="ts">
	interface Product {
		id: number;
		title: string;
		description: string;
		price: number;
		images: string[];
		category: string;
	}
	import BlogItem from "@/components/items/BlogItem.vue";
	import { onMounted, ref } from "vue";

	const products = ref<Product[]>([]);
	const APIURL = "https://dummyjson.com/products";

	const fetchProducts = async () => {
		const response = await fetch(APIURL);
		const data = await response.json();
		products.value = data.products;
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
						:prodImage="prod.images[0]"
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
	.products__head {
		font-size: 2rem;
	}

	.products__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}
</style>
