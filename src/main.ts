import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Toast, { POSITION } from 'vue-toastification';
import '@proxymal/smoothui/style.css';
import '@/assets/globals.scss';
import '@/assets/toast.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(Toast, {
	position: POSITION.BOTTOM_RIGHT,
	timeout: 3 * 1000, // 3 seconds
	maxToasts: 4,
	newestOnTop: true,
	hideProgressBar: true,
	showCloseButtonOnHover: true,

	toastClassName: ['toast'],
	bodyClassName: ['toast__body'],
	containerClassName: ['toast__container'],
	closeButtonClassName: ['toast__close']
});
app.mount('#app');
