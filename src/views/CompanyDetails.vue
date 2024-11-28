<template>
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold text-center mb-6">Company Details</h1>
      <div v-if="loading" class="flex justify-center items-center min-h-screen">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
      <div v-else class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Company: {{ company.name }}</h2>
        <p class="text-gray-600 mb-2">Email: {{ company.email }}</p>
        <p class="text-gray-600 mb-2">Phone: {{ company.phone }}</p>
        <p class="text-gray-600 mb-2">VAT: {{ company.vat }}</p>
        <h3 class="text-xl font-semibold mt-6">Founders:</h3>
        <div v-if="loadingFounders" class="flex justify-center items-center mt-4">
          <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>
        </div>
        <div v-else class="mt-4">
          <div v-for="(founder, index) in founders" :key="founder.login.uuid" class="bg-gray-100 p-4 mb-4 rounded flex items-center">
            <img :src="`https://robohash.org/${index}`" alt="Founder Avatar" class="w-16 h-16 rounded-full mr-4">
            <div>
              <p class="text-lg font-semibold">{{ founder.name.first }} {{ founder.name.last }}</p>
              <p class="text-gray-600">Email: {{ founder.email }}</p>
              <p class="text-gray-600">Phone: {{ founder.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: 'CompanyDetailsPage',
    props: {
      companyId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        company: {},
        founders: [],
        loading: true,
        loadingFounders: true
      };
    },
    created() {
      this.fetchCompanyDetails();
      this.fetchFounders();
    },
    methods: {
      fetchCompanyDetails() {
        // Fetch company details based on companyId (Here using a placeholder since the actual API doesn't support company details by ID)
        axios.get(`https://fakerapi.it/api/v1/companies?_quantity=1`)
          .then(response => {
            this.company = response.data.data[0];
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching company details:', error);
            this.loading = false;
          });
      },
      fetchFounders() {
        // Fetch founders based on company ID (Using RandomUser API as a placeholder for founders data)
        axios.get('https://randomuser.me/api/?results=3')
          .then(response => {
            this.founders = response.data.results;
            this.loadingFounders = false;
          })
          .catch(error => {
            console.error('Error fetching founders:', error);
            this.loadingFounders = false;
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
  