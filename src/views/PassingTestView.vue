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
</script>

<template>
  <div class="h-[85vh]">
    <div v-if="questions.length" class="flex flex-col items-center">
      <template v-for="(question, i) in questions" :key="question">
        <Question @response="(res) => console.log(res)" :question="question" :questionNumber="i"></Question>
      </template>
    </div>
    <Spiner v-else></Spiner>
  </div>
</template>
