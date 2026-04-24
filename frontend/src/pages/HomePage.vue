<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard.vue";

const store = useProductStore();

onMounted(() => {
	store.fetchProducts();
});
</script>

<template>
	<div style="max-width: 1200px; margin: 0 auto; padding: 48px 16px">
		<div style="display: flex; flex-direction: column; gap: 32px; align-items: center">
			<p
				style="
					font-size: 30px;
					font-weight: bold;
					background: linear-gradient(to right, #48cae4, #3a86ff);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
					text-align: center;
				"
			>
				Current Products
			</p>

			<div
				style="
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
					gap: 40px;
					width: 100%;
				"
			>
				<ProductCard
					v-for="product in store.products"
					:key="product._id"
					:product="product"
				/>
			</div>

			<p
				v-if="store.products.length === 0"
				style="font-size: 20px; text-align: center; font-weight: bold; color: #718096"
			>
				No products found 😢
				<RouterLink to="/create" style="color: #3a86ff">
					Create a product
				</RouterLink>
			</p>
		</div>
	</div>
</template>
