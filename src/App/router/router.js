import { createRouter, createMemoryHistory } from 'vue-router'
import TheLogin from '../TheLogin'
import TheNotification from '../TheNotification'
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/login', name: 'Login', component: TheLogin, alias: '/' },
    { path: '/notification', name: 'Notification', component: TheNotification },
  ]
})

export default router