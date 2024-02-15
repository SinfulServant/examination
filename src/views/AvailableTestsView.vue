<script setup>
import { computed, onMounted, ref } from "vue";
import ApiTests from "./../../src/services/ApiTests.service";
import Spiner from "../components/Shared/Spiner.vue";
import { useRouter } from "vue-router";

const titlesOfTests = ref([]);
const router = useRouter();
const searchInput = ref("");
let failedRequest = true;

onMounted(() => {
  getTitlesOfTests();
});

const filtedTitles = computed(() => {
  return titlesOfTests.value.filter((item) =>
    item.toLowerCase().includes(searchInput.value.toLowerCase())
  );
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
    titlesOfTests.value = ApiTests.formatTitles(res);
    if (titlesOfTests.value.length) failedRequest = false;
  });
}
</script>

<template>
  <div class="pt-3 h-[85vh]">
    <h2 class="text-2xl text-center">Here are the tests you can pass</h2>
    <div class="flex justify-center border-b-2 pt-3 pb-1">
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search test"
        class="text-center outline-0 bg-inherit placeholder:text-white"
      />
    </div>
    <ul v-if="filtedTitles.length">
      <li
        v-for="(title, i) in filtedTitles"
        :key="title"
        class="flex justify-center pt-2"
      >
        <button
          v-appearance-animation="{delay: 100 + (i * 20)}"
          @click="toPassingTest(title)"
          class="text-xl border px-[50px] py-1 hover:bg-gray-100 hover:text-black ease-in duration-100 rounded-lg w-[400px]"
        >
          {{ title }}
        </button>
      </li>
    </ul>
    <div v-else class="text-center py-3">
      <p><b>No such tests were found :( </b></p>
    </div>
    <Spiner v-if="failedRequest"></Spiner>
  </div>
</template>
