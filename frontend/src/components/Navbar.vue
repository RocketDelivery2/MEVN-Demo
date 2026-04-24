<script setup>
import { NButton } from "naive-ui";
import { RouterLink } from "vue-router";

defineProps({
	isDark: Boolean,
});

const emit = defineEmits(["toggle-dark"]);
</script>

<template>
	<div style="padding: 0 16px">
		<div
			style="
				max-width: 1140px;
				margin: 0 auto;
				height: 64px;
				display: flex;
				align-items: center;
				justify-content: space-between;
			"
		>
			<RouterLink to="/" style="text-decoration: none">
				<span
					style="
						font-size: 28px;
						font-weight: bold;
						text-transform: uppercase;
						background: linear-gradient(to right, #48cae4, #3a86ff);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						background-clip: text;
					"
				>
					Product Store 🛒
				</span>
			</RouterLink>

			<div style="display: flex; gap: 8px; align-items: center">
				<RouterLink to="/create">
					<NButton>➕</NButton>
				</RouterLink>
				<NButton @click="emit('toggle-dark')">
					{{ isDark ? "☀️" : "🌙" }}
				</NButton>
			</div>
		</div>
	</div>
</template>
