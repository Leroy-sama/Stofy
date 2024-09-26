<template>
	<header class="container mx-auto p-4">
		<nav class="flex justify-between items-center">
			<NuxtLink to="/" class="flex items-center">
				<img src="/logo.svg" alt="" />
				<span class="text-2xl font-semibold">KobiStore</span>
			</NuxtLink>
			<ul class="hidden md:flex md:gap-6">
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about">About</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/products">Products</NuxtLink>
				</li>
			</ul>
			<div class="md:hidden cursor-pointer border">
				<span class="w-[25px] bg-black h-[2px] block m-[5px]"></span>
				<span class="w-[25px] bg-black h-[2px] block m-[5px]"></span>
				<span class="w-[25px] bg-black h-[2px] block m-[5px]"></span>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts"></script>
