<template>
  <div class="globe"></div>
</template>


<script>

export default {
  name: "HomePage",
}
</script>


<style scoped lang="scss">
.globe {
  width: 100%;
  height: 500px;
  background-image: url(~@/assets/images/wallpapers/earth.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.8;
  /* Add space for the fixed navbar */

}
</style>