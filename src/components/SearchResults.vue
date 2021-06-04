<template>
  <div class="search-results">
    <each-result
      v-for="recipe in pageRecipes"
      :key="recipe.id"
      :recipe="recipe"
    ></each-result>
    <div class="page-buttons er" v-if="searchedRecipes.length > 0">
      <div class="paginations er" v-if="pageNum > 1">
        <span>Pages: </span>
        <button
          class="page-btn er"
          v-for="num in pageNum"
          :key="num"
          @click="pageNumClick(num)"
        >
          {{ num }}
        </button>
      </div>
      <div class="view-list-div er">
        <button class="view-list-btn er">View List</button>
      </div>
    </div>
  </div>
</template>

<script>
import EachResult from "./EachResult.vue";

import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    EachResult,
  },
  setup() {
    const store = useStore();

    const startNum = ref(0);
    const endNum = ref(8);

    const pageRenew = computed(() => {
      return store.getters.renewer;
    });

    const searchedRecipes = computed(() => {
      return store.getters.recipes;
    });

    const pageNum = computed(() => {
      if (searchedRecipes.value.length <= 8) {
        return 1;
      } else if (
        searchedRecipes.value.length > 8 &&
        searchedRecipes.value.length % 8 !== 0
      ) {
        return (
          (searchedRecipes.value.length - (searchedRecipes.value.length % 8)) /
            8 +
          1
        );
      } else {
        return (
          (searchedRecipes.value.length - (searchedRecipes.value.length % 8)) /
          8
        );
      }
    });

    const pageRecipes = computed(() => {
      if (searchedRecipes.value.length <= 8) {
        return searchedRecipes.value;
      } else {
        return searchedRecipes.value.slice(startNum.value, endNum.value);
      }
    });

    const pageNumClick = (num) => {
      startNum.value = (num - 1) * 8; // (num-1)*8

      if (startNum.value + 8 <= searchedRecipes.value.length) {
        endNum.value = num * 8; // num*8
      } else {
        endNum.value = searchedRecipes.value.length;
      }
    };

    watch(pageRenew, () => {
      startNum.value = 0;
      endNum.value = 8;
    });

    return {
      searchedRecipes,
      pageNum,
      pageRecipes,
      pageNumClick,
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
    padding: 10px 10px;

    button {
      cursor: pointer;
      font-size: 17px;
    }

    .paginations {
      .page-btn {
        border: none;
        margin-right: 1px;
        background-color: salmon;
        padding: 2px 7px;
        border-radius: 50%;
        color: white;
      }
    }
  }
}
</style>