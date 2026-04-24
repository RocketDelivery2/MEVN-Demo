<script setup>
import { ref, computed } from "vue";
import { NConfigProvider, NGlobalStyle, NMessageProvider, darkTheme } from "naive-ui";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const isDark = ref(false);
const theme = computed(() => (isDark.value ? darkTheme : null));
const bgColor = computed(() => (isDark.value ? "#1a202c" : "#edf2f7"));
</script>

<template>
	<NConfigProvider :theme="theme">
		<NGlobalStyle />
		<NMessageProvider>
			<div :style="{ minHeight: '100vh', background: bgColor }">
				<Navbar :isDark="isDark" @toggle-dark="isDark = !isDark" />
				<RouterView />
			</div>
		</NMessageProvider>
	</NConfigProvider>
</template>
