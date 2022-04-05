const app = document.createElement('div');
app.id = 'buzz-sidebar'
document.body.insertAdjacentElement('beforeend', app);

import { createApp } from 'vue';
import App from './App/App';
import router from './App/router/router'
createApp(App).use(router).mount('#buzz-sidebar');