<script setup>
import { ref } from "vue";
import { NButton, NInput, NSpace, useMessage } from "naive-ui";
import { useProductStore } from "../store/product";

const store = useProductStore();
const message = useMessage();

const newProduct = ref({
	name: "",
	price: "",
	image: "",
});

const handleAddProduct = async () => {
	const { success, message: msg } = await store.createProduct(newProduct.value);
	if (!success) {
		message.error(msg);
	} else {
		message.success(msg);
		newProduct.value = { name: "", price: "", image: "" };
	}
};
</script>

<template>
	<div style="max-width: 600px; margin: 0 auto; padding: 32px 16px">
		<NSpace vertical size="large" style="width: 100%">
			<h1
				style="
					font-size: 32px;
					text-align: center;
					margin-bottom: 32px;
				"
			>
				Create New Product
			</h1>

			<div
				style="
					padding: 24px;
					border-radius: 8px;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
					background: var(--n-color);
				"
			>
				<NSpace vertical style="width: 100%">
					<NInput
						v-model:value="newProduct.name"
						placeholder="Product Name"
						size="large"
					/>
					<NInput
						v-model:value="newProduct.price"
						placeholder="Price"
						type="text"
						size="large"
					/>
					<NInput
						v-model:value="newProduct.image"
						placeholder="Image URL"
						size="large"
					/>
					<NButton
						type="primary"
						size="large"
						style="width: 100%"
						@click="handleAddProduct"
					>
						Add Product
					</NButton>
				</NSpace>
			</div>
		</NSpace>
	</div>
</template>
