<template>
  <div class="recipe-card">
    <div
      :style="{ backgroundImage: `url('${cardRecipe.imageUrl}')` }"
      class="image"
    ></div>
    <div class="details">
      <div class="main-details">
        <h3 class="title">{{ cardRecipe.title }}</h3>
        <h4 class="publisher">Publisher: {{ cardRecipe.publisher }}</h4>
      </div>

      <div class="buttons">
        <button class="see-recipe-btn" @click="seeRecipe">
          See The Recipe
        </button>
        <button class="bookmark-btn" @click="bookmarkIt">
          <i class="fas fa-bookmark" v-if="cardRecipe.bookmark"></i>
          <i class="far fa-bookmark" v-else></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  props: ["cardRecipe"],
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const bookmarkIt = () => {
      store.commit("BOOKMARK_RECIPE", props.cardRecipe);
    };

    const seeRecipe = async () => {
      await store.dispatch("getRecipe", props.cardRecipe.id);
      router.push("/recipe");
    };
    return {
      bookmarkIt,
      seeRecipe,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

.recipe-card {
  width: 280px;
  margin-bottom: 50px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  .image {
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px 5px 0 0;
  }

  .details {
    min-height: 140px;
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      margin-bottom: 15px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .see-recipe-btn {
        color: white;
        border: none;
        border-radius: 5px;
        padding: 3px 7px;
        font-size: 16px;
        cursor: pointer;
        background: $peach; /* fallback for old browsers */
        background: $linear-orange-all;
        background: $linear-orange;
      }

      .bookmark-btn {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: $peach;
      }
    }
  }
}
</style>