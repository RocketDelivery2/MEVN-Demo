import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
	state: () => ({
		products: [],
	}),
	actions: {
		async createProduct(newProduct) {
			if (!newProduct.name || !newProduct.image || !newProduct.price) {
				return { success: false, message: "Please fill in all fields." };
			}
			const res = await fetch("/api/products", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newProduct),
			});
			const data = await res.json();
			this.products.push(data.data);
			return { success: true, message: "Product has been created successfully" };
		},
		async fetchProducts() {
			const res = await fetch("/api/products");
			const data = await res.json();
			this.products = data.data;
		},
		async deleteProduct(pid) {
			const res = await fetch(`/api/products/${pid}`, { method: "DELETE" });
			const data = await res.json();
			if (!data.success) return { success: false, message: data.message };
			this.products = this.products.filter((p) => p._id !== pid);
			return { success: true, message: data.message };
		},
		async updateProduct(pid, updatedProduct) {
			const res = await fetch(`/api/products/${pid}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(updatedProduct),
			});
			const data = await res.json();
			if (!data.success) return { success: false, message: data.message };
			const index = this.products.findIndex((p) => p._id === pid);
			if (index !== -1) this.products[index] = data.data;
			return { success: true, message: data.message };
		},
	},
});
