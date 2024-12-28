<template>
	<header>
		<nav>
			<RouterLink to="/">
				<span class="logo">Stofy</span>
			</RouterLink>
			<ul class="navlinks" :class="{ active: status.isActive }">
				<li>
					<RouterLink to="/">Home</RouterLink>
				</li>
				<li>
					<RouterLink to="/products">Products</RouterLink>
				</li>
				<li>
					<RouterLink to="/about">About</RouterLink>
				</li>
				<li>
					<RouterLink to="/contact">Contact</RouterLink>
				</li>
			</ul>
			<div class="icons">
				<IconSearch />
				<!-- <IconUser /> -->
				<NavCart />
				<button class="burger" @click="toggleNavMenu">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</button>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
	// import IconUser from "@/assets/Icons/IconUser.vue";
	import IconSearch from "@/assets/Icons/IconSearch.vue";
	import NavCart from "@/assets/Icons/NavCart.vue";
	import { reactive } from "vue";
	import { RouterLink } from "vue-router";

	const status = reactive({
		isActive: false,
	});

	const toggleNavMenu = () => {
		status.isActive = !status.isActive;
	};
</script>

<style lang="css" scoped>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
	}

	.logo {
		color: var(--clr-darkGreen);
		text-transform: uppercase;
		font-family: var(--ff-secondary);
		font-size: 2rem;
	}

	.navlinks {
		display: flex;
		gap: 2rem;
	}

	.navlinks li a {
		color: var(--clr-darkGreen);
	}

	.icons {
		display: flex;
		gap: 1rem;
	}

	.navlinks {
		position: fixed;
		inset: 10% 0 55% 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
		background: hsl(0 0% 0% / 0.7);
		backdrop-filter: blur(1rem);
		transform: translateY(-130%);
		transition: 0.3s ease;
	}

	.burger {
		cursor: pointer;
		border: none;
		background-color: inherit;
	}

	.bar {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px;
		background-color: var(--clr-darkGreen);
		transition: all 0.3s ease;
	}

	.navlinks.active {
		transform: translateY(0);
	}

	@media (min-width: 768px) {
		.navlinks {
			position: static;
			flex-direction: row;
			padding: 0;
			background-color: var(--clr-white);
			transform: translateY(0);
		}

		.burger {
			display: none;
		}
	}
</style>
