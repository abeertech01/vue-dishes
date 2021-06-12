<template>
  <div class="not-found">
    Not found the page. Rather go <router-link to="/">home</router-link>.
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

.not-found {
  font-size: 18px;
  padding: 50px;
  font-family: "Roboto", sans-serif;
}
</style>