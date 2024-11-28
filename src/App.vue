<template>
  <div id="app">
    <app-layout></app-layout>
  </div>
</template>

<script>
import LayoutComponent from "./components/Layout.vue";
export default {
  name: 'App',
  components: {
    'app-layout': LayoutComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
