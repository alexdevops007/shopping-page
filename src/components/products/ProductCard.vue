<template>
  <div
    class="rounded-lg overflow-hidden flex flex-col justify-center items-center relative"
  >
    <div class="border-gray-200 bg-gray-200">
      <img
        :src="product.image"
        alt="Product Image"
        class="w-full h-48 object-contain"
      />
    </div>

    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2 relative">
        {{ product.title
        }}<span
          class="absolute top-1/2 right-0 transform translate-y-1/2 h-2 w-2 bg-green-500 rounded-full"
        ></span>
      </h2>
      <p class="text-gray-400">{{ product.price }} €</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
