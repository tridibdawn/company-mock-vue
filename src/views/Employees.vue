<template>
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold text-center mb-6">Employees</h1>
      <div v-if="loading" class="flex justify-center items-center min-h-screen">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="employee in employees" :key="employee.login.uuid" class="bg-white p-6 rounded-lg shadow-md">
          <img :src="employee.picture.large" alt="Employee Picture" class="w-24 h-24 rounded-full mx-auto mb-4">
          <h2 class="text-xl font-semibold text-center">{{ employee.name.first }} {{ employee.name.last }}</h2>
          <p class="text-gray-600 text-center">{{ employee.email }}</p>
          <p class="text-gray-600 text-center">{{ employee.phone }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: 'EmployeesPage',
    data() {
      return {
        employees: [],
        loading: true
      };
    },
    created() {
      this.fetchEmployees();
    },
    methods: {
      fetchEmployees() {
        axios.get('https://randomuser.me/api/1.4?results=9')
          .then(response => {
            this.employees = response.data.results;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching employees:', error);
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
  