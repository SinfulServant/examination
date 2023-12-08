<script setup>
import { onMounted, ref } from "vue";
import ApiTests from "./../../src/services/ApiTests.service";
import Spiner from "../components/Shared/Spiner.vue";
import { useRouter } from "vue-router";

const titleOfTests = ref([]);
const router = useRouter();

onMounted(() => {
  getTitlesOfTests();
});

function toPassingTest(title) {
  router.push({
    path: "/passing-test",
    query: { title: title },
  });
}

function getTitlesOfTests() {
  // CHANGE
  ApiTests.getTitles().then((res) => {
    titleOfTests.value = ApiTests.formatTitles(res)
  });
}
</script>

<template>
  <div class="pt-3 h-[85vh]">
    <h2 class="text-2xl text-center">Here are the tests you can pass</h2>
    <div class="border-b-2 py-1"></div>
    <ul v-if="titleOfTests.length">
      <li
        v-for="title in titleOfTests"
        :key="title"
        class="flex justify-center pt-2"
      >
        <button
          @click="toPassingTest(title)"
          class="text-xl border px-[50px] py-1 hover:bg-green-100 rounded-lg w-[400px]"
        >
          {{ title }}
        </button>
      </li>
    </ul>
    <Spiner v-else></Spiner>
  </div>
</template>
