<script setup>
import { ref, onMounted } from "vue";
import "../assets/font/fontello-0ae12903/css/fontello.css";

const props = defineProps({
  question: Object,
  questionTitle: Array,
  questionNumber: Number,
  toShowResult: Boolean,
  canBeSeveralAnswers: Boolean
});

onMounted(() => {
  createObjectIsChecked();
});

const emit = defineEmits(["sendAnswers"]);
const selectedCheckboxes = ref({});


function selectAnswer(event, i) {
  if(!props.canBeSeveralAnswers){
    for (let item in selectedCheckboxes.value){
      selectedCheckboxes.value[item] = false
    }
    selectedCheckboxes.value[i] = true
  }
  sendToParentIsAnswerRight()
}

function createObjectIsChecked() {
  props.question.options.forEach((_, i) => {
    selectedCheckboxes.value[i] = false;
  });
}

function sendToParentIsAnswerRight() {
    console.log(selectedCheckboxes.value[props.question.correctAnswer - 1])
  if(selectedCheckboxes.value[props.question.correctAnswer - 1]) emit("sendAnswers", true);
  else emit("sendAnswers", false);
}
</script>

<template>
  <div class="p-3 w-[400px] border rounded-lg my-2">
    <h3 class="text-center text-slate-600 py-2"><strong>{{ props.questionTitle[questionNumber] }}</strong></h3>
    <div
    v-for="(option, index) in question.options"
    :key="option"
    class="flex flex-row justify-between"
    >
      <label class="px-2">
        <input
          @change="selectAnswer($event, index)"
          value="index"
          type="checkbox"
          :disabled="props.toShowResult"
          v-model="selectedCheckboxes[index]"
        />
        {{ option }}
      </label>
      <template v-if="props.toShowResult">
        <i
          v-if="index + 1 !== props.question.correctAnswer && selectedCheckboxes[index]"
          class="icon-cancel-squared text-red-500 float-right"
        ></i>
        <i
          v-if="index + 1 == props.question.correctAnswer && selectedCheckboxes[index]"
          class="icon-ok-squared text-green-500 float-right"
        ></i>
      </template>
    </div>
  </div>
</template>
