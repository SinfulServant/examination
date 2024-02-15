<script setup>
import { onMounted, ref } from "vue";
import ApiTests from "./../../src/services/ApiTests.service";
import Spiner from "./../components/Shared/Spiner.vue";
import Question from "./../components/Question.vue";
import { useRoute } from "vue-router";
import ModalTemplate from "../components/Shared/ModalTemplate.vue";

const isModalOpen = ref(false);
const route = useRoute();
const questions = ref([]);
const allAnswers = {};
const isResultShow = ref(false);
const questionTitles = [];

onMounted(() => {
  getQuestions();
});

async function getQuestions() {
  const test = await ApiTests.getTestQuestions(route.query.title);
  for (let item in test) {
    questionTitles.push(`${ApiTests.replaceUnderscores(item)}`);
    questions.value.push(test[item]);
  }
}

function writeAnswers(answer, i) {
  allAnswers[i] = answer;
}

function checkAnswers() {
  let amountOfCorrectAnswers = 0;
  isResultShow.value = true;
  console.log(allAnswers);
  for (let item in allAnswers) {
    if (allAnswers[item]) amountOfCorrectAnswers++;
  }
  return amountOfCorrectAnswers;
}
</script>

<template>
  <ModalTemplate v-if="isModalOpen" @toClose="isModalOpen = false">
    <h4 class="text-xl text-center pt-3">
      You get {{ checkAnswers() }} correct answers of the
      {{ questions.length }} questions!
    </h4>
    <div class="flex gap-3">
      <button class="bg-gray-600 hover:bg-slate-500 px-2 py-1 rounded">
        <RouterLink to="/available-tests">To other tests</RouterLink>
      </button>
      <button
        @click="isModalOpen = false"
        class="bg-gray-600 hover:bg-slate-500 px-2 py-1 rounded"
      >
        View the results
      </button>
    </div>
  </ModalTemplate>
  <div class="min-h-[85vh] py-4 flex flex-col items-center justify-center">
    <div v-if="questions.length" class="flex flex-col items-center">
      <h2 class="text-2xl py-2">{{ route.query.title }}</h2>
      <template v-for="(question, i) in questions" :key="question">
        <Question
          @sendAnswers="(answer) => writeAnswers(answer, i)"
          :question="question"
          :questionNumber="i"
          :questionTitle="questionTitles"
          :toShowResult="isResultShow"
          :canBeSeveralAnswers="false"
        ></Question>
      </template>
      <button
        @click="isModalOpen = true"
        class="rounded-lg py-1 px-3 bg-slate-600 hover:bg-slate-700"
      >
        Здати тест!
      </button>
    </div>
    <Spiner v-else></Spiner>
  </div>
</template>


