<template>
  <div class="search-results">
    <each-result
      v-for="recipe in searchedRecipes"
      :key="recipe.id"
      :recipe="recipe"
    ></each-result>
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
  background-color: wheat;
  color: black;
}
</style>