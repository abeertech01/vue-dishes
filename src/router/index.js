import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SearchList from '../views/SearchList.vue';

const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/search-list', component: SearchList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
