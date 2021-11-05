import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CharacterDetails from '../views/CharacterDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character/:name',
    name: 'CharacterDetails',
    component: CharacterDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
