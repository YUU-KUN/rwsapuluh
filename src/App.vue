<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-col bg-bg-white">
    <div class="min-w-full">
      <RouterView name="Navbar" />
    </div>
    <RouterView />
    <RouterView name="Footer" />
  </div>
</template>

<style scoped>
</style>
