<script>
import { ref } from 'vue';
import ApiTests from "./../../src/services/ApiTests.service";

function removeSpaces(inputString) {
    return inputString.replace(/ /g, "_");
  }

export default {
  setup() {
    const questions = ref([])
    return { questions };
  },
  mounted() {
    ApiTests.getTestQuestions(this.$route.query.title)
            .then(res => {
                const needQuestion = res[removeSpaces(this.$route.query.title)]
                const arrQuestion = []
                for(let item in needQuestion){
                    arrQuestion.push(needQuestion[item])
                }
                this.questions = arrQuestion
            });
  },
};
</script>

<template>
    <div>
        <pre v-for="question in questions" :key="question">
            {{question}}
        </pre>
    </div>
</template>
