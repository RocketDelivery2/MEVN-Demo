<script setup>
import { ref } from "vue";
import {
	NCard,
	NButton,
	NModal,
	NInput,
	NSpace,
	useMessage,
} from "naive-ui";
import { useProductStore } from "../store/product";

const props = defineProps({
	product: Object,
});

const store = useProductStore();
const message = useMessage();
const showModal = ref(false);
const updatedProduct = ref({ ...props.product });

const handleDeleteProduct = async (pid) => {
	const { success, message: msg } = await store.deleteProduct(pid);
	if (!success) {
		message.error(msg);
	} else {
		message.success(msg);
	}
};

const handleUpdateProduct = async () => {
	const { success, message: msg } = await store.updateProduct(
		props.product._id,
		updatedProduct.value
	);
	showModal.value = false;
	if (!success) {
		message.error(msg);
	} else {
		message.success("Product has been updated successfully");
	}
};
</script>

<template>
	<NCard
		:style="{
			transition: 'all 0.3s',
			cursor: 'pointer',
			overflow: 'hidden',
		}"
		:bordered="true"
		hoverable
	>
		<template #cover>
			<img
				:src="product.image"
				:alt="product.name"
				style="width: 100%; height: 192px; object-fit: cover"
			/>
		</template>

		<div>
			<h3 style="font-size: 18px; font-weight: bold; margin: 0 0 8px">
				{{ product.name }}
			</h3>
			<p style="font-size: 20px; font-weight: bold; margin: 0 0 16px; color: #718096">
				${{ product.price }}
			</p>
			<NSpace>
				<NButton type="primary" size="small" @click="showModal = true">✏️ Edit</NButton>
				<NButton type="error" size="small" @click="handleDeleteProduct(product._id)">
					🗑️ Delete
				</NButton>
			</NSpace>
		</div>
	</NCard>

	<NModal v-model:show="showModal" preset="dialog" title="Update Product">
		<NSpace vertical style="width: 100%">
			<NInput
				v-model:value="updatedProduct.name"
				placeholder="Product Name"
			/>
			<NInput
				v-model:value="updatedProduct.price"
				placeholder="Price"
				type="text"
			/>
			<NInput
				v-model:value="updatedProduct.image"
				placeholder="Image URL"
			/>
		</NSpace>
		<template #action>
			<NButton type="primary" @click="handleUpdateProduct">Update</NButton>
			<NButton @click="showModal = false">Cancel</NButton>
		</template>
	</NModal>
</template>
