<script setup lang="ts"></script>

<template>
	<main>
		<section class="hero">
			<div class="wrapper">
				<div class="hero__wrap">
					<h1 class="hero__head">Stofy dot store</h1>
					<p class="hero__text">
						Your one stop for unique products with the best
						discounts of the market
					</p>
					<RouterLink class="prod-link" :to="{ name: 'products' }"
						>Shop Now</RouterLink
					>
				</div>
			</div>
		</section>
		<section class="category">
			<div class="wrapper">
				<div class="category__wrap">
					<h2 class="category__head">Shop By Category</h2>
					<div class="categories">
						<div class="cat">
							<div class="cat-image">
								<img
									src="../assets/images/sneakers-cat.jpg"
									alt=""
								/>
								<h3 class="cat-title">Sneakers</h3>
							</div>
						</div>
						<div class="cat">
							<div class="cat-image">
								<img
									src="../assets/images/backpacks-cat.jpg"
									alt=""
								/>
								<h3 class="cat-title">Back Packs</h3>
							</div>
						</div>
						<div class="cat">
							<div class="cat-image">
								<img
									src="../assets/images/hoodies-cat.jpg"
									alt=""
								/>
								<h3 class="cat-title">Hoodies</h3>
							</div>
						</div>
						<div class="cat">
							<div class="cat-image">
								<img
									src="../assets/images/tshirts-cat.jpg"
									alt=""
								/>
								<h3 class="cat-title">TShirts</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="featured">
			<div class="wrapper">
				<div class="featured__wrap">
					<div class="featured__header">
						<h2 class="featured__items">Featured Products</h2>
						<RouterLink
							class="prod-link web"
							:to="{ name: 'products' }"
							>Shop All Products</RouterLink
						>
					</div>
					<div class="products">
						<div class="product">
							<img src="../assets/images/bag_main.webp" alt="" />
							<h3 class="product__head">Man United Backpack</h3>
						</div>
						<div class="product">
							<img src="../assets/images/sneaker1.jpeg" alt="" />
							<h3 class="product__head">Air Force 1</h3>
						</div>
						<div class="product">
							<img
								src="../assets/images/localhost-tee.jpeg"
								alt=""
							/>
							<h3 class="product__head">Localhost Tee</h3>
						</div>
						<div class="product">
							<img src="../assets/images/arsenal02.webp" alt="" />
							<h3 class="product__head">Jordan 4s Retro</h3>
						</div>
					</div>
					<div class="prod-linkbox">
						<RouterLink
							class="prod-link mobile"
							:to="{ name: 'products' }"
							>Shop All Products</RouterLink
						>
					</div>
				</div>
			</div>
		</section>
		<section class="subscribe">
			<div class="wrapper">
				<div class="subscribe__text">
					<h2>Subscribe to our emails</h2>
					<p>Receive information about discounts and new arrivals</p>
				</div>
				<form action="">
					<input type="email" placeholder="email address" />
					<button>Subscribe</button>
				</form>
			</div>
		</section>
	</main>
</template>

<style lang="css" scoped>
	.hero {
		background: url(../assets/images/hero-img.jpg);
		background-size: cover;
		background-position: bottom;
		background-repeat: no-repeat;
		min-height: 90vh;
	}

	.hero__wrap {
		padding: 2rem 0;
	}

	.hero__head {
		font-size: 2rem;
	}

	.hero__text {
		margin-bottom: 2rem;
	}

	.prod-linkbox {
		display: flex;
		justify-content: center;
	}

	.prod-link {
		background-color: var(--clr-darkGreen);
		color: var(--clr-white);
		padding: 0.75rem 2rem;
		transition: 0.3s ease-in;
		border: 1px solid var(--clr-darkGreen);
	}

	.prod-link:hover {
		background-color: transparent;
		color: var(--clr-darkGreen);
	}

	.category {
		padding: 2rem 0;
	}

	.categories {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.5rem;
		padding: 2rem 0;
	}

	.cat-image {
		position: relative;
		border-radius: 10px;
		overflow: hidden;
		transition: 0.3s ease-in;
	}

	.cat img {
		aspect-ratio: 1/1;
		object-fit: cover;
		transition: 0.3s ease-in;
	}

	.cat img:hover {
		transform: scale(1.1);
	}

	.cat-title {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		color: var(--clr-darkGreen);
		transition: 0.3s ease-in;
	}

	.cat-image:hover .cat-title {
		text-decoration: underline;
	}

	/* FEATURED */

	.featured {
		padding: 2rem 0;
	}

	.featured__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.web {
		display: none;
	}

	.products {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.5rem;
		padding: 2rem 0;
	}

	.product img {
		aspect-ratio: 1/1;
		object-fit: cover;
	}

	/* SUBSCRIBE */

	.subscribe {
		padding: 2rem 0;
		display: flex;
		justify-content: center;
	}

	.subscribe__text {
		padding: 1rem 0;
		text-align: center;
	}

	.subscribe form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.subscribe form input,
	.subscribe form button {
		padding: 0.75rem 1rem;
	}

	.subscribe form button {
		border: 1px solid var(--clr-darkGreen);
		background-color: var(--clr-darkGreen);
		color: var(--clr-white);
		cursor: pointer;
	}

	.subscribe form input {
		border: 1px solid var(--clr-darkGreen);
		outline: none;
	}

	@media (min-width: 768px) {
		.web {
			display: flex;
		}

		.mobile {
			display: none;
		}

		.hero__head {
			font-size: 3rem;
		}

		.subscribe form {
			justify-content: center;
			flex-direction: row;
			gap: 0;
		}
	}
</style>
