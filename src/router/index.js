import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SearchList from '../views/SearchList.vue';
import Bookmarks from '../views/Bookmarks.vue';
import Recipe from '../views/Recipe.vue';
import NotFound from '../views/NotFound.vue';

import store from '../store/index';

const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/search-list', meta: { searchMeta: true }, component: SearchList
  },
  {
    path: '/bookmarks', component: Bookmarks
  },
  {
    path: '/recipe', meta: { recipeMeta: true }, component: Recipe
  },
  {
    path: '/:notFound(.*)', component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.searchMeta) {
    if (store.getters.recipes.length) {
      next();
    } else {
      next('/');
    }
  } else if (to.meta.recipeMeta) {
    if (store.getters.presentRecipe) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
})

export default router
