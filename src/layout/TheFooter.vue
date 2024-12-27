<template>
	<footer>
		<div class="wrapper">
			<div class="footer__wrap">
				<div class="small-desc">
					<RouterLink to="/">
						<span class="logo">Stofy</span>
					</RouterLink>
					<p class="small-text">
						An online store with high quality products and very
						efficient shopping experience.
					</p>
					<div class="socials">
						<IconIg />
						<IconTiktok />
						<IconFb />
					</div>
				</div>
				<div class="links">
					<div class="company-links">
						<h2>Company</h2>
						<div class="links-routes">
							<RouterLink to="/home">Home</RouterLink>
							<RouterLink to="/about">About Us</RouterLink>
							<RouterLink to="/contact">Contact</RouterLink>
						</div>
					</div>
					<div class="company-links">
						<h2>Get In Touch</h2>
						<div class="links-contact">
							<div class="phone">
								<IconPhone />
								<span>+1 234 567 8901</span>
							</div>
							<div class="email">
								<IconEmail />
								<span>support@example.com</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import IconFb from "@/assets/Icons/IconFb.vue";
	import IconIg from "@/assets/Icons/IconIg.vue";
	import IconTiktok from "@/assets/Icons/IconTiktok.vue";
	import IconPhone from "@/assets/Icons/IconPhone.vue";
	import IconEmail from "@/assets/Icons/IconEmail.vue";
</script>

<style lang="css" scoped>
	footer {
		background-color: var(--clr-darkGreen);
		padding: 2rem 0;
	}

	.small-text {
		padding: 1rem 0;
		color: var(--clr-offWhite);
	}

	.socials {
		display: flex;
		gap: 0.5rem;
	}

	footer h2 {
		padding: 1rem 0;
		color: var(--clr-white);
	}

	.footer__wrap {
		display: grid;
		gap: 2rem;
	}

	.logo {
		color: var(--clr-white);
		text-transform: uppercase;
		font-family: var(--ff-secondary);
		font-size: 2rem;
	}

	.links {
		display: grid;
		gap: 2rem;
	}

	.links-routes {
		display: grid;
		gap: 0.5rem;
	}

	.links-routes a {
		color: var(--clr-offWhite);
	}

	.links-contact {
		display: grid;
		gap: 1rem;
	}

	.phone,
	.email {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.links-contact span {
		color: var(--clr-offWhite);
	}

	@media (min-width: 1024px) {
		.footer__wrap {
			grid-template-columns: repeat(2, 1fr);
		}

		.links {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
