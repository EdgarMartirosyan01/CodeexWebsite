<template>
  <div class="footerSection">
    <h2>{{ title }}</h2>
    <span>
      <a v-for="item in items" :key="item">{{ item }}</a>
    </span>
  </div>
</template>



<script>
import {Back} from "@element-plus/icons-vue";
export default {
  name: "FooterServices",
  components: {Back},
  props: {
    title: String,
    items: Array,
  },
};
</script>



<style scoped lang="scss">
.footerSection {
  width: 150px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  h2 {
    font-size: 26px;
    color: white;
    //padding-bottom: 2vw;
  }

  span {
    width: 100%;
    height: auto;
    margin-bottom: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;

    a {
      font-size:  18.432px;
      padding-top: 5px;
      font-weight: 500;
      cursor: pointer;
      color: white;

      &:hover {
        font-weight: bold;
      }
    }
  }
}
</style>
