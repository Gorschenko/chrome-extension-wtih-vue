const app = document.createElement('div');
app.id = 'buzz-sidebar'
document.body.insertAdjacentElement('beforeend', app);

import { createApp } from 'vue';
import App from './App/App';
import router from './App/router/router'
import { store } from './App/store/store'
createApp(App).use(router).use(store).mount('#buzz-sidebar');