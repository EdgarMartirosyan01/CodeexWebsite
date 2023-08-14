<template>
  <div class="appMain">
    <NavBar/>
    <HomePage/>
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "@/components/semantics/NavBar";
import FooterComponent from "@/components/semantics/FooterComponent";
import HomePage from "@/components/bodyComponents/homePage/HomePage";

export default {
  name: 'App',
  components: {
    FooterComponent,
    NavBar,
    HomePage
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.appMain {
  height: 100vh;
}
</style>