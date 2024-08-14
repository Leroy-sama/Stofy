<script setup>
	import TheHeader from "./layout/TheHeader.vue";
	import TheFooter from "./layout/TheFooter.vue";
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import { useUserStore } from "./pinia/userStore";

	const userStore = useUserStore();

	// const auth = getAuth();
	// onAuthStateChanged(auth, (user) => {
	//     userStore.updateUser(user);
	//     if (user) {
	//         userStore.getCurrentUser();
	//         console.log("email is", userStore.profileEmail);
	//     }
	// });
</script>

<template>
	<TheHeader />
	<RouterView />
	<TheFooter />
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");

	:root {
		---darkGreenish: #163020;
		---greenishHover: rgb(3, 63, 3);
	}

	* {
		font-family: "Jost", sans-serif;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		line-height: 1.5;
		text-decoration: none;
	}

	img {
		display: block;
		width: 100%;
	}
</style>
