<script>
// import { RouterLink } from "vue-router";
export default {
  setup() {
    const classForLinks = "p-2 hover:bg-gray-200 rounded"
    // представити до шаблону та інших параметрів API хуків
    return {
      classForLinks
    }
  },
}
</script>

<template>
  <header class="flex justify-between items-end pt-2">
    <h1 class="text-3xl"><RouterLink to="/">Examinator</RouterLink></h1>
    <nav class="flex">
      <RouterLink :class=classForLinks to="/">Home</RouterLink>
      <RouterLink :class=classForLinks to="/available-tests">Available tests</RouterLink>
    </nav>
  </header>
</template>
