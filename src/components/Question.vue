<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  question: Object,
  questionNumber: Number,
});
const answers = ref([]);
const emit = defineEmits(["response"]);

const selectAnswer = (i) => {
  if(!answers.value.find((item) => item === i)) answers.value.push(i)
  else answers.value = answers.value.filter((item) => item != i)
  console.log(answers.value)
};

onMounted(() => {
  console.log("Props from Question Vue: ", props);
});
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
          value=index
          type="checkbox"
        />
        {{ option }}
      </label>
    </div>
  </div>
</template>
