<script setup>
import { onMounted, ref } from "vue";
import ApiTests from "./../../src/services/ApiTests.service";
import Spiner from "./../components/Shared/Spiner.vue";
import Question from "./../components/Question.vue";
import { useRoute } from "vue-router";

function removeSpaces(inputString) {
  return inputString.replace(/ /g, "_");
}
const route = useRoute();
const questions = ref([]);
const allAnswers = {}

onMounted(() => {
  getQuestions();
});

function getQuestions() {
  ApiTests.getTestQuestions(route.query.title).then((res) => {
    const needQuestion = res[removeSpaces(route.query.title)];
    for (let item in needQuestion) {
      questions.value.push(needQuestion[item]);
    }
    questions.value[1].Options[0] +=
      " Дуже довге питання, дуууууже довге питання :)";
  });
}

function writeAnswers(answer, i){
  allAnswers[i] = answer.value
  console.log(allAnswers)
}

function checkAnswers(){
  console.log('Check answers')
}
</script>

<template>
  <div class="min-h-[85vh] py-4" >
    <div v-if="questions.length" class="flex flex-col items-center">
      <template v-for="(question, i) in questions" :key="question">
        <Question @sendAnswers="(answers) => writeAnswers(answers, i)" :question="question" :questionNumber="i"></Question>
      </template>
      <button @click="checkAnswers" class="rounded-lg py-1 px-3 bg-blue-200 hover:bg-blue-300">Здати тест!</button>
    </div>
    <Spiner v-else></Spiner>
  </div>
</template>
