import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SearchList from '../views/SearchList.vue';
import Bookmarks from '../views/Bookmarks.vue';
import Recipe from '../views/Recipe.vue';

const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/search-list', component: SearchList
  },
  {
    path: '/bookmarks', component: Bookmarks
  },
  {
    path: '/recipe', component: Recipe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
