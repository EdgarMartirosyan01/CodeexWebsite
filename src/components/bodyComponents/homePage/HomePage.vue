<template>
  <div class="HomePageTemplate">
    <VoneSection/>
    <CodeexPresentation/>
    <SolutionsSection/>
    <ProductsSection/>
    <DevelopmentProcessSection/>
    <AdvantagesSection/>
    <WhyArmenia/>
    <MessageSection/>
  </div>
</template>


<script>
import VoneSection from "@/components/bodyComponents/homePage/homePageSections/VoneSection";
import CodeexPresentation from "@/components/bodyComponents/homePage/homePageSections/CodeexPresentation";
import SolutionsSection from "@/components/bodyComponents/homePage/homePageSections/SolutionsSection";
import ProductsSection from "@/components/bodyComponents/homePage/homePageSections/ProductsSection";
import DevelopmentProcessSection from "@/components/bodyComponents/homePage/homePageSections/DevelopmentProcessSection";
import AdvantagesSection from "@/components/bodyComponents/homePage/homePageSections/AdvantagesSection";
import WhyArmenia from "@/components/bodyComponents/homePage/homePageSections/WhyArmenia";
import MessageSection from "@/components/bodyComponents/homePage/homePageSections/MessageSection";
export default {
  name: "HomePage",
  components: {
    MessageSection,
    WhyArmenia,
    AdvantagesSection,
    DevelopmentProcessSection,
    ProductsSection,
    SolutionsSection,
    VoneSection,
    CodeexPresentation,
  },
}
</script>


<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .HomePageTemplate{
    overflow: hidden;
  }
</style>