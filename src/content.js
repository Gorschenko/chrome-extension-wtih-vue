const app = document.createElement('div');
app.id = 'buzz'
document.body.insertAdjacentElement('beforeend', app);

import { createApp } from 'vue';
import App from './App/App.vue';
createApp(App).mount('#buzz');