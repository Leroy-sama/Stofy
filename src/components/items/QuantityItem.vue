<script setup lang="ts">
	import IconMinus from "@/assets/Icons/IconMinus.vue";
	import IconPlus from "@/assets/Icons/IconPlus.vue";
	import { ref } from "vue";

	const counter = ref<number>(0);
	const increment = () => {
		counter.value++;
	};
	const decrement = () => {
		if (counter.value > 0) {
			counter.value--;
		}
	};
</script>

<template>
	<div class="wrap">
		<div class="quantity">
			<IconMinus @click="decrement" />
			<p class="value">{{ counter }}</p>
			<IconPlus @click="increment" />
		</div>
	</div>
</template>

<style lang="css" scoped>
	.wrap {
		display: flex;
	}

	.quantity {
		display: flex;
		gap: 2rem;
		background-color: var(--clr-lightGrey);
		padding: 1rem;
	}
</style>
