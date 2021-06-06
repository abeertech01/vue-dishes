import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      recipes: [],
      bookmarkedRecipes: [],
      renewer: false
    }
  },
  mutations: {
    TAKE_RECIPES(state, payload) {
      state.recipes = payload;
    },
    EMPTY_RECIPES(state) {
      state.recipes = [];
      state.bookmarkedRecipes = [];
    },
    PAGE_RENEWER(state) {
      state.renewer = !state.renewer;
    },
    BOOKMARK_RECIPE(state, payload) {
      const recordIndex = state.recipes.findIndex(el => el.id === payload.id);
      if (state.recipes[recordIndex].bookmark === false) {
        state.recipes[recordIndex].bookmark = true;
      } else {
        state.recipes[recordIndex].bookmark = false;
      }

      const record = state.recipes.find(el => el.id === payload.id);
      if (record.bookmark === true) {
        state.bookmarkedRecipes.push(record);
      } else {
        const bookmarkIndex = state.bookmarkedRecipes.findIndex(el => el.id === payload.id);
        state.bookmarkedRecipes[bookmarkIndex].bookmark = false;
        state.bookmarkedRecipes.splice(bookmarkIndex, 1);
      }
    }
  },
  actions: {
    async getRecipes(context, payload) {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${payload}`);

      if (!response.ok) {
        const err = new Error('Something went wrong');
        throw err;
      }

      const data = await response.json();
      // console.log(data.data);

      const recipes = [];
      for (let i = 0; i < data.data.recipes.length; i++) {
        recipes.push({
          id: data.data.recipes[i].id,
          title: data.data.recipes[i].title,
          publisher: data.data.recipes[i].publisher,
          imageUrl: data.data.recipes[i].image_url,
          bookmark: false
        })
      }

      context.commit('TAKE_RECIPES', recipes);
    }
  },
  getters: {
    recipes(state) {
      return state.recipes;
    },
    bookmarkedRecipes(state) {
      return state.bookmarkedRecipes;
    },
    renewer(state) {
      return state.renewer;
    }
  }
});

export default store;