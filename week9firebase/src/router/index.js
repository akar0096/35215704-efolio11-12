import { createRouter, createWebHashHistory } from 'vue-router'
import FirebaseSigninView from "@/views/FirebaseSigninView.vue"
// ... other imports

const routes = [
  { path: '/', redirect: '/firelogin' },
  { path: '/firelogin', name: 'FireLogin', component: FirebaseSigninView },
  { path: '/addbook', name: 'AddBook', component: AddBookView },
  { path: '/getallbookapi', name: 'GetAllBookAPI', component: GetAllBookAPI },
  { path: '/countbookapi', name: 'CountBookAPI', component: CountBookAPI },
  { path: '/getbookcountview', name: 'GetBookCountView', component: GetBookCountView },
  { path: '/weatherview', name: 'WeatherView', component: WeatherView },
  { path: '/fireregister', name: 'FireRegister', component: FirebaseRegisterView },
  { path: '/adminlogin', name: 'AdminLogin', component: AdminLogin },
  { path: '/adminreg', name: 'AdminReg', component: AdminReg }
]

const router = createRouter({
  history: createWebHashHistory('/35215704-efolio11-12/week9firebase/'),
  routes
})

export default router
