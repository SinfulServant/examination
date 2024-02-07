<script setup>
import { onMounted, ref } from "vue";
// import ResourseForStudy from "../components/Shared/ResourseForStudy.vue";
import resoursesJSON from "../../resourses.json";

const resourses = ref([]);

onMounted(() => {
  resourses.value = Object.keys(resoursesJSON);
});
</script>

<template>
  <div class="container mx-auto">
    <h2 class="text-center text-2xl py-3">
      Here you can find resourses where you can study
    </h2>
    <template v-for="resourse in resourses" :key="resourse">
      <h3>{{ resourse }}</h3>
    </template>
  </div>
</template>
