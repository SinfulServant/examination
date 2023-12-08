<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>

  <RouterView />
</template>

<style>
h1, h2, .router-link {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>