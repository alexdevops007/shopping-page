<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-4">
      <div class="md:hidden">
        <!-- Menu burger -->
        <button @click="toggleMenu" class="text-gray-500 focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <h1 class="text-xl font-bold">Products</h1>
      <div>
        <!-- "+" button -->
        <button class="text-gray-500 focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Barre de recherche -->
    <div class="flex justify-between mb-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search products..."
          class="border border-gray-300 rounded-md px-3 py-2 pl-10 w-full"
        />
        <svg
          class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M13.586 12.586a7 7 0 111.414-1.414l3.352 3.352a1 1 0 01-1.414 1.414l-3.352-3.352zM6 10a4 4 0 100-8 4 4 0 000 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- Options de tri et de filtres -->
      <div class="flex items-center space-x-4">
        <div class="relative">
          <button class="flex items-center space-x-1">
            Sort by Name
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 6.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L7 8.414V16a1 1 0 11-2 0V8.414L4.293 10.7a1 1 0 01-1.414-1.414l3-3zM15 14a1 1 0 112 0v1a1 1 0 11-2 0v-1zM7 6a1 1 0 100-2h6a1 1 0 100 2H7z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="relative">
          <button class="flex items-center space-x-1">
            Filters
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h9a1 1 0 110 2H4a1 1 0 01-1-1zm16-6a1 1 0 100-2h-6a1 1 0 100 2h6zm-2 5a1 1 0 110-2h-4a1 1 0 110-2h4a1 1 0 110 2zm-2 5a1 1 0 100-2h-2a1 1 0 100 2h2z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <button class="flex items-center space-x-1 md:hidden">
          Menu
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Liste des produits paginés -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ProductCard
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <!-- Pagination -->
    <div class="mt-8 flex justify-end items-center">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded-md mr-2 flex items-center"
        :class="{ 'cursor-not-allowed opacity-50': currentPage === 1 }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        
      </button>
      <span class="text-lg font-semibold"
        >{{ currentPage }} of {{ totalPages }}</span
      >
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded-md ml-2 flex items-center"
        :class="{ 'cursor-not-allowed opacity-50': currentPage === totalPages }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/store/modules/product.js";
import { ref, computed, onMounted } from "vue";
import ProductCard from "@/components/products/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  setup() {
    const productStore = useProductStore();

    // Déplacez la logique de fetchProducts dans le hook onMounted()
    onMounted(() => {
      productStore.fetchProducts();
    });

    const currentPage = ref(1);
    const itemsPerPage = 8;

    const paginatedProducts = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return productStore.products.slice(startIndex, endIndex);
    });

    const totalPages = computed(() =>
      Math.ceil(productStore.products.length / itemsPerPage)
    );

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    return {
      productStore, // Assurez-vous de retourner le store
      paginatedProducts,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
    };
  },
};
</script>
