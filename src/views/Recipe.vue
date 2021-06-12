<template>
  <div class="recipe-page">
    <div class="main-part">
      <!-- Heading -->
      <div class="heading">
        <button class="home-btn" @click="goHome">
          <i class="fas fa-home"></i> Home
        </button>
        <button class="back-btn" @click="goBack">
          <i class="fas fa-arrow-left"></i> Back
        </button>
      </div>
      <!-- End of Heading -->

      <!-- Image -->
      <div
        class="image"
        :style="{ backgroundImage: `url('${theRecipe.imageUrl}')` }"
      ></div>
      <!-- End of Image -->

      <!-- Brief intro -->
      <div class="brief-intro">
        <h1 class="title">
          <div class="title-div">{{ theRecipe.title }}</div>
        </h1>
        <div class="the-intro">
          <div class="intro">
            <span class="cooking-time"
              ><i class="far fa-clock"></i>
              {{ theRecipe.cookingTime }} minutes</span
            >
            <span class="servings"
              ><i class="fas fa-user-friends"></i>
              {{ theRecipe.servings }} servings</span
            >
            <button class="plus" @click="plusServing">
              <i class="fas fa-plus-circle"></i>
            </button>
            <button class="minus" @click="minusServing">
              <i class="fas fa-minus-circle"></i>
            </button>
          </div>
          <div class="bookmark">
            <button class="bookmark-btn">
              <i class="far fa-bookmark" v-if="true"></i>
              <i class="fas fa-bookmark" v-else></i>
            </button>
          </div>
        </div>
      </div>
      <!-- End of Brief intro -->

      <!-- Ingredients -->
      <div class="ingredients">
        <h1 class="title">Recipe Ingredients</h1>
        <div class="all-ingredients">
          <div
            class="ingredient"
            v-for="(ing, index) in theRecipe.ingredients"
            :key="index"
          >
            <div class="tick-icon">
              <i class="fas fa-check"></i>
            </div>
            <div class="ing-text">
              {{ ing.quantity }} {{ ing.unit }} {{ ing.description }}
            </div>
          </div>
        </div>
      </div>
      <!-- End of Ingredients -->

      <!-- Directions -->
      <div class="directions">
        <h1 class="title">How to cook it</h1>
        <p class="description">
          This recipe was carefully designed and tested by
          {{ theRecipe.publisher }}. Please check out directions at their
          website.
        </p>
        <a :href="`${recipeSource}`" target="_blank" class="direction-btn">
          directions <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <!-- End of Directions -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const theRecipe = computed(() => {
      return store.getters.presentRecipe;
    });

    const recipeSource = computed(() => {
      return theRecipe.value.sourceUrl;
    });

    const plusServing = () => {};

    const minusServing = () => {};

    const goHome = () => {
      router.push("/");
    };

    const goBack = () => {
      router.go(-1);
    };

    return {
      theRecipe,
      recipeSource,
      goHome,
      goBack,
      plusServing,
      minusServing,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

.recipe-page {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  background: #d66d75; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e29587,
    #d66d75
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e29587,
    #d66d75
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .main-part {
    width: 60%;
    border-radius: 10px;
    margin: 10vh 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .heading {
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background: $peach; /* fallback for old browsers */
      background: $linear-orange-all;
      background: $linear-orange;

      button {
        padding: 5px 10px;
        font-size: 18px;
        background: $peach; /* fallback for old browsers */
        background: $linear-orange-all;
        background: $linear-orange;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
          rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      }
    }

    .image {
      height: 350px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .brief-intro {
      padding: 0 10%;
      background: #f9f5f3;

      .title {
        text-align: center;
        position: relative;
        top: -35px;

        .title-div {
          max-width: 500px;
          display: inline-block;
          padding: 10px 25px;
          transform: skewY(-6deg);
          color: white;
          background: $peach; /* fallback for old browsers */
          background: $linear-orange-all;
          background: $linear-orange;
        }
      }

      .the-intro {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        .intro {
          i {
            color: $peach;
          }

          .cooking-time {
            font-size: 18px;
            margin-right: 20px;
          }

          .servings {
            font-size: 18px;
            margin-right: 10px;
          }

          .plus {
            margin-right: 5px;
          }

          button {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
          }
        }

        .bookmark button {
          border: none;
          font-size: 18px;
          background: none;
          color: $peach;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }

    .ingredients {
      background-color: #f2efee;
      padding: 30px 15%;

      .title {
        text-align: center;
        margin-bottom: 30px;
      }

      .all-ingredients {
        display: grid;
        grid-template-columns: auto auto;

        .ingredient {
          display: grid;
          grid-template-columns: 30px auto;
          padding: 0 5px;
          margin: 15px 0;

          i {
            color: $peach;
          }
        }
      }
    }

    .directions {
      padding: 50px 17%;
      text-align: center;
      background-color: #f9f5f3;
      border-radius: 0 0 10px 10px;

      .title {
        margin-bottom: 30px;
      }

      .description {
        margin-bottom: 30px;
      }

      .direction-btn {
        text-decoration: none;
        color: white;
        font-size: 18px;
        padding: 10px 20px;
        border-radius: 50px;
        background: $peach; /* fallback for old browsers */
        background: $linear-orange-all;
        background: $linear-orange;
      }
    }
  }
}
</style>