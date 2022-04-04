const app = document.createElement('div');
app.id = 'buzz-extension'
document.body.insertAdjacentElement('beforeend', app);

import { createApp } from 'vue';
import App from './App/App.vue';
createApp(App).mount('#buzz-extension');