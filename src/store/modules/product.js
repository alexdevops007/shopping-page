import { defineStore } from "pinia";
import productService from "@/services/ProductService.js";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
    isLoading: false,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        this.products = await productService.fetchProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
