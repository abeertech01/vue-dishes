<template>
  <div class="search-list">
    <div class="col-padding"></div>
    <div class="col-head">
      <!-- Heading head -->
      <div class="head-buttons">
        <button class="home-btn" @click="goHome">
          <i class="fas fa-home"></i> Home
        </button>
        <h2 class="page-title">Searched Recipes</h2>
        <button class="bookmarks-btn">
          <i class="fas fa-bookmark"></i> Bookmarks
        </button>
      </div>
      <!-- End of Heading head -->

      <!-- card views -->
      <div class="card-views">
        <recipe-card
          v-for="recipe in searchedRecipes"
          :key="recipe.id"
          :cardRecipe="recipe"
        ></recipe-card>
      </div>
    </div>
    <div class="col-padding"></div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

import RecipeCard from "../components/RecipeCard.vue";

export default {
  components: {
    RecipeCard,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const searchedRecipes = computed(() => {
      return store.getters.recipes;
    });

    const goHome = () => {
      router.push("/");
    };

    return {
      searchedRecipes,
      goHome,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

.search-list {
  display: grid;
  grid-template-columns: 15vw 70vw 15vw;

  .col-head {
    margin-top: 10px;

    .head-buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;

      .page-title {
        font-family: "Roboto", sans-serif;
        margin-top: 10px;
      }

      button {
        text-transform: uppercase;
        padding: 10px 20px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 20px;
        border: none;
        color: white;
        cursor: pointer;
        background: $peach; /* fallback for old browsers */
        background: $linear-orange-all;
        background: $linear-orange;
      }
    }

    .card-views {
      display: grid;
      grid-template-columns: auto auto auto;
      justify-content: space-between;
    }
  }
}
</style>