import { createRouter, createMemoryHistory } from 'vue-router'
import AppAuthorization from '../views/AppAuthorization'
import AppNotification from '../views/AppNotification'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/authorization', name: 'Authorization', component: AppAuthorization, alias: '/' },
    { path: '/notification', name: 'Notification', component: AppNotification },
  ]
})

export default router