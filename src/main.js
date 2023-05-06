import { createApp } from "vue";
import Login from "./Login.vue";
import i18n from "./i18n";
import "./assets/main.css";

createApp(Login).use(i18n).mount("#app");
