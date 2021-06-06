<template>
  <div class="search-list">
    <div class="col-padding"></div>
    <div class="col-head">
      <!-- Heading head -->
      <div class="head-buttons">
        <button class="home-btn" @click="goHome">
          <i class="fas fa-home"></i> Home
        </button>
        <h2 class="page-title">Bookmarked Recipes</h2>
        <button class="bookmarks-btn" @click="goBack">
          <i class="fas fa-arrow-left"></i> Back
        </button>
      </div>
      <!-- End of Heading head -->

      <!-- If recipes array is empty -->
      <div class="empty-sign" v-if="bookmarks.length === 0">
        <img src="../assets/empty.svg" alt="empty" />
        <h1 class="empty-text">EMPTY</h1>
      </div>
      <!-- End of If recipes array is empty -->

      <!-- card views -->
      <div class="card-views" v-else>
        <recipe-card
          v-for="recipe in bookmarks"
          :key="recipe.id"
          :cardRecipe="recipe"
        ></recipe-card>
      </div>
      <!-- End of card views -->
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

    const bookmarks = computed(() => {
      return store.getters.bookmarkedRecipes;
    });

    const goHome = () => {
      router.push("/");
    };

    const goBack = () => {
      router.go(-1);
    };

    return {
      bookmarks,
      goHome,
      goBack,
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

    .empty-sign {
      margin-top: 100px;
      text-align: center;

      img {
        width: 40%;
      }

      .empty-text {
        margin-top: 50px;
        font-size: 60px;
        color: silver;
        font-family: "Roboto", sans-serif;
      }
    }
  }
}
</style>