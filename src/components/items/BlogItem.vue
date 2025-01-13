<script setup lang="ts">
	const props = defineProps([
		"prodID",
		"prodImage",
		"prodTitle",
		"prodPrice",
		"prodCategory",
	]);
</script>

<template>
	<div class="product">
		<RouterLink :to="`/products/${prodID}`">
			<img class="prod__img" :src="prodImage" :alt="prodTitle" />
		</RouterLink>
		<div class="product__details">
			<p class="product__brand">{{ prodCategory }}</p>
			<RouterLink :to="`/products/${prodID}`">
				<h3 class="product__name">{{ prodTitle }}</h3>
			</RouterLink>
			<span class="product__price">${{ prodPrice }}</span>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.product {
		display: grid;
		gap: 1rem;
	}

	.prod__img {
		border: 1px solid var(--clr-lightGrey);
		aspect-ratio: 1/1;
		object-fit: cover;
	}

	.product__brand {
		font-size: 0.7rem;
		text-transform: uppercase;
	}

	.product__name {
		font-family: var(--ff-tertiary);
		color: black;
		font-weight: 400;
		font-size: 1.2rem;
	}

	.product__price {
		font-family: var(--ff-tertiary);
		font-size: 1.5rem;
		font-weight: 700;
	}
</style>
