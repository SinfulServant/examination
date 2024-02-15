<script setup>
import { onMounted, ref } from "vue";
import ResourseForStudy from "../components/ResourseForStudy.vue";
import ApiResourcesService from "../services/ApiResources.service";
import Spiner from "../components/Shared/Spiner.vue";

const resourcesTitles = ref([]);
const resources = ref([]);
let isResourcesDownloaded = false;

onMounted(() => {
  ApiResourcesService.getResources().then((data) => {
    console.log(data);
    resources.value = data;
    resourcesTitles.value = Object.keys(data);
    isResourcesDownloaded = true;
  });
});
</script>

<template>
  <div class="h-[100vh]">
    <Spiner v-if="!isResourcesDownloaded"></Spiner>
    <div class="container mx-auto">
      <ResourseForStudy
        v-for="(resourse, i) in resourcesTitles"
        v-appearance-animation="{ delay: 500 + i * 20 }"
        :key="resourse"
        :urls="resources[resourse]"
        :name="resourse"
      >
      </ResourseForStudy>
    </div>
  </div>
</template>
