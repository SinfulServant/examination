<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["toClose"]);

function toClose(event) {
  const targetId = event.target.id;
  if (targetId === "bg-modal" || targetId === "close") emit("toClose");
}
</script>

<template>
  <div
    @click="toClose($event)"
    id="bg-modal"
    class="h-screen w-scree flex justify-center items-center fixed inset-0"
  >
    <div class="h-[200px] w-[350px] bg-zinc-900 relative p-[8px] flex items-center justify-around flex-col rounded">
      <div id="close"></div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
#bg-modal {
  background-color: rgb(50, 50, 50, 0.3);
}

#close {
  cursor: pointer;
  position: absolute;
  height: 20px;
  width: 20px;
  top: 5px;
  right: 10px;
}
#close:before,
#close:after {
  top: 10px;
  content: "";
  position: absolute;
  width: 16px;
  height: 2px;
  background: gray;
}
#close:before {
  transform: rotate(45deg);
}
#close:after {
  transform: rotate(-45deg);
}
</style>
