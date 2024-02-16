<script setup>
import { onMounted } from "vue";

const cubes = document.getElementsByClassName("cube");
let doesAnimPlay;

onMounted(() => {
  animIsPlaying();
});

function animActive() {
  if (!doesAnimPlay) {
    animIsPlaying();
    doesAnimPlay = true;
    const cubesArray = Array.from(cubes);
    requestAnimationFrame(() => {
      cubesArray.forEach((cube) => {
        cube.classList.remove("animation");
        requestAnimationFrame(() => cube.classList.add("animation"));
      });
    });
  }
}

function animIsPlaying() {
  doesAnimPlay = true;
  setTimeout(() => (doesAnimPlay = false), 2500);
}
</script>

<template>
  <div v-appearance-animation="{ delay: 200 }" class="main">
    <h2 class="text-2xl text-center px-10">
      Hello! <br />
      Here you can test on different IT technologies and test your knowledge
    </h2>
    <div @click="animActive" class="container">
      <div class="shadow-animation">
        <div class="flex">
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
        </div>
        <div class="flex">
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
        </div>
        <div class="flex">
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
          <div class="cube animation">
            <div class="wall front"></div>
            <div class="wall back"></div>
            <div class="wall left"></div>
            <div class="wall right"></div>
            <div class="wall top"></div>
            <div class="wall bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  margin: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 0 -80px 0 0;
}
.cube {
  position: relative;
  width: 1px;
  height: 1px;
  margin: 0 80px 0 0;
  transform-style: preserve-3d;
}

.animation {
  animation: cubeAnim 3s;
}
.wall {
  width: 80px;
  height: 80px;
  position: absolute;
  left: calc(-80px / 2);
  top: calc(-80px / 2);
  text-align: center;
  line-height: 100px;
  border: solid 1px #fff;
}
.front {
  transform: translateZ(calc(80px / 2));
  animation: mymove 5s infinite;
}
.back {
  transform: translateZ(calc(-80px / 2)) rotateY(180deg);
  animation: mymove 5s infinite;
}
.right {
  transform: translateX(calc(80px / 2)) rotateY(90deg);
  animation: mymove 5s infinite;
}
.left {
  transform: translateX(calc(-80px / 2)) rotateY(-90deg);
  animation: mymove 5s infinite;
}
.top {
  transform: translateY(calc(-80px / 2)) rotateX(90deg);
  animation: mymove 5s infinite;
}
.bottom {
  transform: translateY(calc(80px / 2)) rotateX(-90deg);
  animation: mymove 5s infinite;
}

@keyframes cubeAnim {
  10% {
    transform: rotateX(0) rotateY(0);
  }

  100% {
    transform: rotateX(180deg) rotateY(180deg);
  }
}

.shadow-animation {
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@keyframes mymove {
  50% {
    box-shadow: 0 0 15px rgb(255, 255, 255);
  }
}
</style>
