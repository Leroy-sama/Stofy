<script setup lang="ts"></script>

<template>
	<div class="product">
		<img src="@/assets/images/bag_main.webp" alt="" />
		<div class="product__details">
			<h3 class="product__name">ManUnited Backpack</h3>
			<span class="product__price">$25.00</span>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.product {
		display: grid;
		gap: 1rem;
	}

	.product__name {
		font-family: var(--ff-tertiary);
		font-weight: 400;
		font-size: 1.2rem;
	}

	.product__price {
		font-family: var(--ff-tertiary);
		font-size: 1.5rem;
		font-weight: 700;
	}
</style>
