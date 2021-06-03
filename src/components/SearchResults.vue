<template>
  <div class="search-results">
    <each-result
      v-for="recipe in searchedRecipes"
      :key="recipe.id"
      :recipe="recipe"
    ></each-result>
    <div class="page-buttons er" v-if="searchedRecipes.length > 0">
      <button class="prev-btn er">Prev.</button>
      <button class="view-all er">View The List</button>
      <button class="next er">Next</button>
    </div>
  </div>
</template>

<script>
import EachResult from "./EachResult.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    EachResult,
  },
  setup() {
    const store = useStore();

    const searchedRecipes = computed(() => {
      return store.getters.recipes;
    });
    return {
      searchedRecipes,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-results {
  width: 600px;
  margin-top: 10px;
  background-color: rgb(253, 245, 229);
  color: black;
  border-radius: 5px;

  .page-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;

    button {
      cursor: pointer;
    }
  }
}
</style>