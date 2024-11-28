<template>
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold text-center mb-6">Companies</h1>
      <div v-if="loading" class="flex justify-center items-center min-h-screen">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="company in companies" :key="company.uuid" class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-center">{{ company.name }}</h2>
          <p class="text-gray-600 text-center">{{ company.email }}</p>
          <p class="text-gray-600 text-center">{{ company.phone }}</p>
          <p class="text-gray-600 text-center">{{ company.vat }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: 'CompaniesPage',
    data() {
      return {
        companies: [],
        loading: true
      };
    },
    created() {
      this.fetchCompanies();
    },
    methods: {
      fetchCompanies() {
        axios.get('https://fakerapi.it/api/v1/companies?_quantity=9')
          .then(response => {
            this.companies = response.data.data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching companies:', error);
            this.loading = false;
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .loader {
    border-color: #4A5568;
    border-top-color: #3182CE;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  