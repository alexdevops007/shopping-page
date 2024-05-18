<template>
  <div
    class="bg-gray-200 h-screen w-52 fixed top-0 left-0 flex flex-col pl-3 justify-between"
  >
    <!-- Logo -->
    <div class="mt-4">
      <img src="" alt="Logo" class="h-8 w-8" />
    </div>
    <!-- Menus -->
    <div class="flex flex-col pl-3">
      <router-link to="/" class="p-2 hover:bg-gray-300 rounded-full font-bold">
        Home
      </router-link>
      <router-link to="/people" class="p-2 hover:bg-gray-300 rounded-full font-bold">
        People
      </router-link>
      <router-link
        to="/products"
        class="p-2 hover:bg-gray-300 rounded-full font-bold"
      >
        Products
      </router-link>
      <router-link
        to="/categories"
        class="p-2 hover:bg-gray-300 rounded-full font-bold"
      >
        Categories
      </router-link>
    </div>
    <!-- Utilisateur connecté -->
    <div class="mb-4">
      <router-link to="/profile" class="p-2 hover:bg-gray-300 rounded-full">
        <img src="" alt="Logo" class="h-8 w-8" /> 
      </router-link>
    </div>
  </div>
</template>
