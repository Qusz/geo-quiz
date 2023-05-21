import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';

import App from './App.vue';
import router from './router';

import 'normalize.css';
import 'vue3-toastify/dist/index.css';
import 'assets/scss/main.scss';

const app = createApp(App);

app.use(Vue3Toasity, {
  multiple: false,
  position: 'top-center',
  hideProgressBar: true,
  theme: 'colored'
} as ToastContainerOptions);

app.use(createPinia());
app.use(router);

app.mount('#app');
