<template>
  <header class="bg-gray-800 text-white py-4">
      <nav class="container mx-auto flex justify-center space-x-6">
        <router-link to="/" class="hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
          Home
        </router-link>
        <router-link to="/companies" class="hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
          Companies
        </router-link>
        <router-link to="/employees" class="hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
          Employees
        </router-link>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'App-Header'
}
</script>

<style>

</style>