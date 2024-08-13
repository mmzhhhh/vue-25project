import { createApp } from 'vue';
import App from './App.vue';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaStar,BiArrowLeftCircleFill,BiArrowRightCircleFill } from "oh-vue-icons/icons";


addIcons(FaStar,BiArrowLeftCircleFill,BiArrowRightCircleFill);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app');
