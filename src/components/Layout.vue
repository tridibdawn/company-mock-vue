<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './layouts/Header.vue'
export default {
    name: 'App-Layout',
    components: {
        'app-header': HeaderComponent
    }
}
</script>

<style>

</style>