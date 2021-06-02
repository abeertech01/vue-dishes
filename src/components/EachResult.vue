<template>
  <div class="each-recipe er">
    <div
      class="image er"
      :style="{ backgroundImage: 'url(' + recipe.imageUrl + ')' }"
    ></div>
    <div class="details er">
      <div class="title er">{{ recipe.title }}</div>
      <div class="publisher er">{{ recipe.publisher }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>

<style lang="scss" scoped>
.each-recipe {
  display: grid;
  grid-template-columns: 60px auto;
  align-items: center;
  border-bottom: 1px solid rgb(199, 199, 199);
  padding: 0 5px;

  .image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .details {
    padding-left: 10px;

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: 520px;

      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
}
</style>