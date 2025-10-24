import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSigninView from "@/views/FirebaseSigninView.vue"
import FirebaseRegisterView from "@/views/FirebaseRegisterView.vue"
import AdminLogin from '@/views/AdminLogin.vue'
import AdminReg from '@/views/AdminReg.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import AddBookView from '@/views/AddBookView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'

const routes = [
 
  {
    path: '/addbook',   
    name: 'AddBook',
    component: AddBookView
  },
   {
    path: '/firelogin',
    name: 'FireLogin',
    component: FirebaseSigninView  
  },
  {
    path: '/getallbookapi',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI  
  },
   {
    path: '/countbookapi',
    name: 'CountBookAPI',
    component: CountBookAPI  
  },
  {
    path: '/getbookcountview',   
    name: 'GetBookCountView',
    component: GetBookCountView
  },
   {
    path: '/weatherview',   
    name: 'WeatherView',
    component: WeatherView
  },
  {
    path: '/fireregister',
    name: 'FireRegister',
    component: FirebaseRegisterView  
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    component: AdminLogin  
  },
  {
    path: '/adminreg',
    name: 'AdminReg',
    component: AdminReg  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
