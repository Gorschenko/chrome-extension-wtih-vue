import { createRouter, createMemoryHistory } from 'vue-router'
import AppAuthorization from '../views/AppAuthorization'
import AppNotification from '../views/AppNotification'
import AppProspect from '../views/AppProspect'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/authorization', name: 'Authorization', component: AppAuthorization, alias: '/' },
    { path: '/notification', name: 'Notification', component: AppNotification },
    { path: '/prospect', name: 'Prospect', component: AppProspect },
  ]
})

export default router