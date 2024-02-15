<script setup>
import { onMounted } from "vue";
const props = defineProps({
  name: String,
  urls: Array,
});

</script>

<template>
  <div class="p-[25px] flex flex-col items-center">
    <h3 class="text-center p-[20px] text-4xl">{{ props.name }}</h3>
    <div
      class="flex flex-row flex-wrap gap-[10px] justify-center max-w-[800px]"
    >
      <div
        class="overflow-hidden"
        v-for="(url, index) in props.urls"
        :key="url"
      >
        <a :href="url.URL" v-appearance-animation="{ delay: 750 + index * 20 }">
          <img
            id="resourse-img"
            :src="url.img"
            class="transition-all cursor-pointer hover:scale-105 max-h-[150px]"
            :alt="url.name"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  /* #resourse-img {
    height: 100px;
  } */
}
</style>
