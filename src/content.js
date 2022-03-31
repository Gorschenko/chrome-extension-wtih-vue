const extension = document.createElement('div');
extension.id = 'app'
document.body.insertAdjacentElement('beforeend', extension);

// import Vue from 'vue';

// import App from './App/App.vue';
// const app = new Vue({
//     el: '#app',
//     render: createElement => createElement(App)
// });

import { createApp } from 'vue';
import App from './App/App.vue';
createApp(App).mount('#app');