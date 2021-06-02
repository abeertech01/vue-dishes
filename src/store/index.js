import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      recipes: [],
    }
  },
  mutations: {
    TAKE_RECIPES(state, payload) {
      state.recipes = payload;
    },
    EMPTY_RECIPES(state) {
      state.recipes = [];
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
        })
      }

      context.commit('TAKE_RECIPES', recipes);
    }
  },
  getters: {
    recipes(state) {
      return state.recipes;
    }
  }
});

export default store;