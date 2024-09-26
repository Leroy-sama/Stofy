<template>
	<section v-if="product">
		<div class="grid grid-cols-2">
			<div>
				<img :src="product.image" alt="" />
			</div>
			<div>
				<h2>{{ product.name }}</h2>
				<p>{{ product.description }}</p>
				<p>Price: ${{ product.price }}</p>
				<button @click="showProdId">Add to Cart</button>
			</div>
		</div>
	</section>
	<section v-else>
		<h1>Loading......</h1>
	</section>
</template>

<script setup>
	const { id } = useRoute().params;

	console.log(id);

	const { data: products, error } = await useFetch("/data.json");

	const product = products.find((product) => product.id === id);

	const showProdId = () => {
		console.log(product.id);
	};
</script>
