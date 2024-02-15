import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

app.directive("appearance-animation", (el, binding) => {
  const delay = binding.value?.delay ? binding.value.delay : 1000;
  el.style.opacity = "0";
  el.style.transition = "opacity 1s ease-out";
  setTimeout(() => (el.style.opacity = "1"), delay);
});
  