<template>
  <div class="home-page">
    <div class="black-phase" @click="blackClick">
      <!-- Main part -->
      <div class="main-part">
        <div class="padding"></div>
        <!-- Main Content -->
        <div class="main-content">
          <!-- Header -->
          <div class="header">
            <button class="bookmarks" @click="goBookmarks">Bookmarks</button>
            <div class="search-recipes">
              <input
                type="text"
                v-model="inputSearch"
                placeholder="Search Recipes"
                class="er"
                @keyup.enter="searchRec"
              />
              <button class="search-btn" @click="searchRec">
                <i class="fas fa-search"></i> Search
              </button>

              <search-results
                class="s-result"
                :inputSearch="inputSearch"
              ></search-results>
            </div>
          </div>
          <!-- End of Header -->
          <div class="slogan">
            <p>
              Food brings people together on many different levels. It's
              nourishment of the soul and body; it's truly love
            </p>
            <button class="pizza-btn">Pizza Recipes</button>
            <button class="pasta-btn">Pasta Recipes</button>
          </div>
        </div>
        <!-- End of Main Content -->
        <div class="padding"></div>
      </div>
      <!-- End of Main part -->
    </div>
  </div>
</template>

<script>
import SearchResults from "../components/SearchResults.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    SearchResults,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const inputSearch = ref("");

    const searchRec = function () {
      store.dispatch("getRecipes", inputSearch.value);
      store.commit("PAGE_RENEWER");
    };
    const blackClick = function (e) {
      const arr = [];
      for (let i = 0; i < e.target.classList.length; i++) {
        arr.push(e.target.classList[i]);
      }

      if (!arr.includes("er")) {
        store.commit("EMPTY_RECIPES");
      }
    };

    const goBookmarks = () => {
      router.push("/bookmarks");
    };

    return {
      goBookmarks,
      inputSearch,
      searchRec,
      blackClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Ramabhadra&display=swap");

.home-page {
  width: 100vw;
  height: 100vh;
  background-image: url("../pictures/chef.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Ramabhadra", sans-serif;

  .black-phase {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.76);

    .main-part {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 15% 70% 15%;

      .main-content {
        display: flex;
        align-items: center;
        position: relative;

        .header {
          color: white;
          position: absolute;
          top: 15px;
          width: 100%;
          display: flex;
          justify-content: space-between;

          .bookmarks {
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

          .search-recipes {
            .search-btn {
              text-transform: uppercase;
              padding: 10px 20px;
              font-size: 18px;
              font-weight: 500;
              border-radius: 20px;
              border: none;
              color: white;
              cursor: pointer;
              position: relative;
              z-index: 2;
              background: $peach; /* fallback for old browsers */
              background: $linear-orange-all;
              background: $linear-orange;
            }

            input {
              // width: 500px;
              outline: none;
              border: none;
              font-size: 18px;
              padding: 10px 30px 10px 20px;
              border-radius: 50px;
              position: relative;
              right: -31px;
              z-index: 1;
            }

            .s-result {
              position: absolute;
              right: 0;
            }
          }
        }

        .slogan {
          p {
            color: white;
            font-size: 40px;
            margin-bottom: 30px;
          }

          button {
            text-transform: uppercase;
            margin-right: 10px;
            padding: 7px 12px;
            font-size: 17px;
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
      }
    }
  }
}
</style>