<script setup>
import { onMounted, ref } from "vue";

const isSmallScreen = ref(false);
const classForLinks =
  "p-2 hover:bg-gray-100 hover:text-black ease-in duration-100 rounded router-link";
const burgerToggle = ref(null)

onMounted(() => {
  if (window.innerWidth < 600) isSmallScreen.value = true;
  addListenerForWindowSize();
});

function addListenerForWindowSize() {
  window.addEventListener("resize", (event) => {
    window.innerWidth < 600
      ? (isSmallScreen.value = true)
      : (isSmallScreen.value = false);
  });
}

function test($event){
  burgerToggle.value.checked = false
}
</script>

<template>
  <header class="flex justify-between items-end pt-2">
    <h1 class="text-4xl py-1"><RouterLink to="/">Examinator</RouterLink></h1>
    <nav v-if="!isSmallScreen" class="flex">
      <RouterLink :class="classForLinks" to="/">Home</RouterLink>
      <RouterLink :class="classForLinks" to="/available-tests"
        >Available tests</RouterLink
      >
      <RouterLink :class="classForLinks" to="/resourses-for-study"
        >Resourses for education</RouterLink
      >
    </nav>
    <nav v-else>
      <div class="hamburger-menu">
        <input ref="burgerToggle" id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box" @click="test($event)">
          <li><RouterLink class="menu__item" to="/">Home</RouterLink></li>
          <li>
            <RouterLink class="menu__item" to="/available-tests"
              >Available tests</RouterLink
            >
          </li>
          <li>
            <RouterLink class="menu__item" to="/resourses-for-study"
              >Resourses for education</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  top: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 30px;
  right: 20px;
  width: 26px;
  height: 26px;
  z-index: 2;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ececec;
  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
.menu__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -120%;
  right: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #2c2c2c;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transition-duration: 0.25s;
  z-index: 1;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #ededed;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;
}
.menu__item:hover {
  color: black;
  background-color: #cfd8dc;
}
</style>
