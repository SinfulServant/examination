<script setup>
import { ref, reactive, onMounted } from "vue";
import "../assets/font/fontello-0ae12903/css/fontello.css";

const props = defineProps({
  question: Object,
  questionNumber: Number
});
const answers = ref([]);
const emit = defineEmits(["sendAnswers"]);
const selectedCheckboxes = ref({});
const showResult = ref(false)

function selectAnswer(i) {
  changeStateOfCheckbox(i);
  i++;
  if (!answers.value.find((item) => item === i)) answers.value.push(i);
  else answers.value = answers.value.filter((item) => item != i);
  emit("sendAnswers", answers);
}

function doShowResult() {}

function isChecked(index) {}

onMounted(() => {
  console.log(props.question.Options);
  createIsCheckedObject();
});

function createIsCheckedObject() {
  props.question.Options.forEach((item, i) => {
    selectedCheckboxes.value[i] = false;
  });
  console.log(selectedCheckboxes);
}

function changeStateOfCheckbox(i) {
  selectedCheckboxes.value[i] = !selectedCheckboxes.value[i];
}
</script>

<template>
  <div class="p-3 w-[300px] border rounded-lg my-2">
    <h3 class="text-center">Питання {{ +questionNumber + 1 }}</h3>
    <div
      v-for="(option, index) in question.Options"
      :key="option"
      class="flex flex-row"
    >
      <label class="w-[100%]">
        <input
          @change="selectAnswer(index)"
          value="index"
          type="checkbox"
          :checked="isChecked(index)"
        />
        {{ option }}
      </label>
      <template v-if="showResult">
        <i
        v-if="index !== props.questionNumber && selectedCheckboxes[index]"
        class="icon-cancel-squared text-red-500"
      ></i>
      <i
        v-if="index == props.questionNumber && selectedCheckboxes[index]"
        class="icon-ok-squared text-green-500"
      ></i>
      </template>
    </div>
  </div>
</template>
