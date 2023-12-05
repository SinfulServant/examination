<script>
import { ref } from "vue";
import ApiTests from "./../../src/services/ApiTests.service";
import Spiner from "./../components/Shared/Spiner.vue";
import Question from "./../components/Question.vue";

function removeSpaces(inputString) {
  return inputString.replace(/ /g, "_");
}

export default {
  components: {
    Spiner,
    Question
  },

  setup() {
    const questions = ref([]);
    return { questions };
  },

  mounted() {
    ApiTests.getTestQuestions(this.$route.query.title).then((res) => {
      const needQuestion = res[removeSpaces(this.$route.query.title)];
      const arrQuestion = [];
      for (let item in needQuestion) {
        arrQuestion.push(needQuestion[item]);
      }
      this.questions = arrQuestion;
    });
  },
};
</script>

<template>
  <div class="h-[85vh]">
    <div v-if="questions.length">
      <template v-for="(question, i) in questions" :key="question">
        <Question :question="question" :questionNumber="i"></Question>
      </template>
    </div>
    <Spiner v-else></Spiner>
  </div>
</template>
