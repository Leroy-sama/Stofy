<script setup lang="ts"></script>

<template>
	<main>
		<section class="hero">
			<div class="wrapper">
				<h1 class="hero__head">HomePage</h1>
				<p class="hero__text">Landing Page Coming Soon</p>
				<RouterLink class="prod-link" :to="{ name: 'products' }"
					>Products</RouterLink
				>
			</div>
		</section>
	</main>
</template>

<style lang="css" scoped>
	.hero__head {
		font-size: 2rem;
	}

	.hero__text {
		margin-bottom: 2rem;
	}

	.prod-link {
		background-color: var(--clr-darkGreen);
		color: var(--clr-white);
		padding: 0.75rem 2rem;
		transition: 0.3s ease-in;
		border: 1px solid var(--clr-darkGreen);
	}

	.prod-link:hover {
		background-color: var(--clr-white);
		color: var(--clr-darkGreen);
	}
</style>
