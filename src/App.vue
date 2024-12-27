<script setup lang="ts">
	import TheFooter from "./layout/TheFooter.vue";
	import TheHeader from "./layout/TheHeader.vue";
</script>

<template>
	<TheHeader />
	<RouterView />
	<TheFooter />
</template>
