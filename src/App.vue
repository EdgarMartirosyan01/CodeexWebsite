<template>
  <div class="appMain">
    <NavBar :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
// import router from "@/router";
import NavBar from "@/components/semantics/NavBar";
import FooterComponent from "@/components/semantics/FooterComponent";
// import HomePage from "@/components/bodyComponents/homePage/HomePage";
// import ProductsPage from "@/components/bodyComponents/productsPage/ProductsPage";
// import BlockchainPage from "@/components/bodyComponents/blockchainPage/BlockchainPage";
// import WhyArmenia from "@/components/bodyComponents/homePage/homePageSections/WhyArmenia";
// import CareersPage from "@/components/bodyComponents/careersPage/CareersPage";
// import ContactPage from "@/components/bodyComponents/contactPage/ContactPage";
// import BlogPage from "@/components/bodyComponents/blogPage/BlogPage";

export default {
  name: 'App',
  components: {
    // BlogPage,
    // ContactPage,
    // CareersPage,
    // WhyArmenia,
    // BlockchainPage,
    // ProductsPage,
    FooterComponent,
    NavBar,
    // HomePage
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