import { createApp } from 'vue';
import App from './App.vue';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaStar,BiArrowLeftCircleFill,BiArrowRightCircleFill,FaPlus, FaMinus } from "oh-vue-icons/icons";
import router from './router';

addIcons(FaStar,BiArrowLeftCircleFill,BiArrowRightCircleFill,FaPlus, FaMinus);

const app = createApp(App);
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app');
