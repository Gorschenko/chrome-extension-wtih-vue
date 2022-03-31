// import Vue from 'vue';

// import Popup from './Popup/Popup.vue';
// const popup = new Vue({
//     el: '#popup',
//     render: createElement => createElement(Popup)
// });

import { createApp } from 'vue';
import Popup from './Popup/Popup.vue';
createApp(Popup).mount('#popup');
import './styles/main.scss'