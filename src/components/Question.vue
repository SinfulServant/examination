<script>
export default {
  props: {
    question: Object,
    questionNumber: Number,
  },

  setup(props) {
    return { props };
  },

  mounted() {
    console.log(this.props);
  },
};
</script>

<template>
  <div class="py-3 flex flex-col items-center">
    <h3>Питання {{ +questionNumber + 1 }}</h3>
    <div v-for="option in question.Options" :key="option">
      <p>{{ option }}</p>
    </div>
  </div>
</template>
