<script setup>
import { onMounted } from "vue";
const cubes = document.getElementsByClassName("cube");
let animationIsNotPlaying = true;
onMounted(() => {
  initForAnimation();
  animReturning();
  setTimeout(animReturning, 1600);
});

function animReturning() {
  if (animationIsNotPlaying) {
    animationIsNotPlaying = false;
    setTimeout(() => (animationIsNotPlaying = true), 1600);
    for (let i = 0; i < cubes.length; i++) {
      const cube = cubes[i].style.transform;
      let xStep = cube.includes("(0deg)") ? 2 : -2;
      let yStep = cube.includes("(0deg)") ? 3 : -3;
      let rotateX = cube.includes("(0deg)") ? 0 : 90;
      let rotateY = cube.includes("(0deg)") ? 0 : 135;
      function animation() {
        if (rotateX > 90) {
          xStep = -2;
          yStep = -3;
          clearInterval(intervalForAnimation);
        }
        if (rotateX < 0) {
          xStep = 2;
          yStep = 3;
          clearInterval(intervalForAnimation);
        }
        rotateX += xStep;
        rotateY += yStep;
        cubes[
          i
        ].style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
      const intervalForAnimation = setInterval(animation, 20 + i * 2);
    }
  }
}

function initForAnimation() {
  for (let i = 0; i < cubes.length; i++) {
    cubes[i].style.transform = "rotateX(0deg) rotateY(0deg)";
  }
}
</script>

<template>
  <div v-appearance-animation="{ delay: 200 }" class="main">
    <h2 class="text-2xl text-center px-10">
      Hello! <br />
      Here you can test on different IT technologies and test your knowledge
    </h2>
    <div @click="animReturning" class="container">
      <div class="flex">
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
      </div>
      <div class="flex">
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
      </div>
      <div class="flex">
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
        <div class="cube first-anim">
          <div class="wall front"></div>
          <div class="wall back"></div>
          <div class="wall left"></div>
          <div class="wall right"></div>
          <div class="wall top"></div>
          <div class="wall bottom"></div>
        </div>
      </div>
    </div>
    <!-- <button
      class="rounded-lg py-1 px-3 bg-zinc-600 hover:bg-zinc-700 ease-linear text-2xl"
    >
      Pass random test!
    </button> -->
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
}

.container {
  display: flex;
  justify-content: center;
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

/* cube */
.cube {
  position: relative;
  width: 1px;
  height: 1px;
  margin: 0 80px 0 0;
  transform-style: preserve-3d;
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
}
.back {
  transform: translateZ(calc(-80px / 2)) rotateY(180deg);
}
.right {
  transform: translateX(calc(80px / 2)) rotateY(90deg);
}
.left {
  transform: translateX(calc(-80px / 2)) rotateY(-90deg);
}
.top {
  transform: translateY(calc(-80px / 2)) rotateX(90deg);
}
.bottom {
  transform: translateY(calc(80px / 2)) rotateX(-90deg);
}
</style>
