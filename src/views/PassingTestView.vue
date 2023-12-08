<script setup>
import { onMounted, ref } from "vue";
import ApiTests from "./../../src/services/ApiTests.service";
import Spiner from "./../components/Shared/Spiner.vue";
import Question from "./../components/Question.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const questions = ref([]);
const allAnswers = {};
const isResultShow = ref(false);
const questionTitles = [];

onMounted(() => {
  getQuestions();
});

function getQuestions() {
  ApiTests.getTestQuestions(route.query.title).then((res) => {
    const needQuestion = res[removeSpaces(route.query.title)];
    const titleOfQuestions = []
    for (let item in needQuestion) {
      titleOfQuestions.push(`${item}`);
      questions.value.push(needQuestion[item]);
    }
    ApiTests.formatTitles(titleOfQuestions).forEach(item => questionTitles.push(item))
  });
}

function writeAnswers(answer, i) {
  allAnswers[i] = answer;
}

function checkAnswers() {
  let amountOfCorrectAnswers = 0
  isResultShow.value = true;
  console.log(allAnswers)
  for (let item in allAnswers){
    if(allAnswers[item]) amountOfCorrectAnswers++
  }
  return amountOfCorrectAnswers
}

function removeSpaces(inputString) {
  return inputString.replace(/ /g, "_");
}
</script>

<template>
  <div class="min-h-[85vh] py-4">
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
      <p v-if="isResultShow" class="border py-3 px-5 mt-2 text-xl rounded-xl bg-green-300">Правильних відповідей {{ checkAnswers() }}/{{ questions.length }}</p>
      <button
        @click="checkAnswers"
        class="rounded-lg py-1 px-3 bg-blue-200 hover:bg-blue-300"
      >
        Здати тест!
      </button>
    </div>
    <Spiner v-else></Spiner>
  </div>
</template>
