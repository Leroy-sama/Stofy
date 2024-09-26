<template>
	<div class="container mx-auto">
		<h1 class="text-3xl font-bold py-6">This is the Products page</h1>
		<div class="grid gap-8 lg:grid-cols-3">
			<div v-for="prod in data" :key="prod.id" class="grid gap-6">
				<NuxtLink :to="`/products/${prod.id}`">
					<NuxtImg
						:src="prod.image"
						alt=""
						format="webp"
						densities="x1"
						class="w-full aspect-[4/3] object-cover"
					/>
				</NuxtLink>
				<div class="grid gap-4">
					<NuxtLink :to="`/products/${prod.id}`">
						<h2 class="font-semibold text-xl">{{ prod.name }}</h2>
					</NuxtLink>
					<span>${{ prod.price }}</span>
					<button
						class="border text-white bg-black px-6 py-3 hover:bg-white hover:text-black"
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { data, error } = await useFetch("/data.json");
</script>
