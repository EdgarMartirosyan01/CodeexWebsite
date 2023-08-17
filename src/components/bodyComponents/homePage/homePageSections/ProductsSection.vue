<template>
  <div class="productsSection">
    <div class="boldBorderGradient"></div>
    <div class="productsSectionContainer">
      <div class="ProductsHeader">
        <h2>{{ $t("navbar.products") }}</h2>
      </div>
      <div class="productsCardsContainerHome">
        <div class="cardsForProducts" v-for="(product, index) in products" :key="index">
          <img alt="product image" :src="product.imageSrc">
          <div class="titleParagraphCombined">
            <div class="productsTitle">
              <h2>{{ product.title }}</h2>
            </div>
            <div class="productsParagraph">
              <p>{{ $t(`homePage.productsTranslations.${product.descriptionTranslationKey}`) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="productsButtonContainer">
        <button>
          {{ $t(`homePage.productsTranslations.moreAboutUsButtons`) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import productsVone from "/src/assets/images/productsImages/productsVone.png";
import productsGym from "/src/assets/images/productsImages/productsGym.png";
import productsGymNet from "/src/assets/images/productsImages/productsGymNet.jpg";

export default {
  name: "ProductsSection",
  data() {
    return {
      products: [
        {
          title: "VONE",
          imageSrc: productsVone,
          descriptionTranslationKey: "voneParagraph",
        },
        {
          title: "GYM STREET",
          imageSrc: productsGym,
          descriptionTranslationKey: "gymParagraph",
        },
        {
          title: "GYM NETWORK",
          imageSrc: productsGymNet,
          descriptionTranslationKey: "gymNetParagraph",
        },
      ],
    };
  },
};
</script>




<style scoped>
  .productsSection{
    width: 100%;
    height: 820px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .boldBorderGradient{
    position: absolute;
    top: 70px;
    width: 100%;
    height: 150px;
    background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0,255,68,1) 100%);
  }
  .productsSectionContainer{
    width: 75%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    z-index: 100;
    /*background-color: #ffc6c6;*/
    /*opacity: 0.7;*/
  }
  .ProductsHeader{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #282828;*/
  }
  .ProductsHeader h2 {
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
  .productsCardsContainerHome{
    width: 100%;
    height: 500px;
    /*background-color: #282828;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cardsForProducts{
    width: 340px;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    margin: 0 10px 0 10px;
  }
  .cardsForProducts:hover {
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
    0 2px 2px rgba(0,0,0,0.12),
    0 4px 4px rgba(0,0,0,0.12),
    0 8px 8px rgba(0,0,0,0.12),
    0 16px 16px rgba(0,0,0,0.12);
  }
  .cardsForProducts img{
    width: 100%;
    height: 280px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .titleParagraphCombined{
    width: 90%;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .productsTitle{
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #0083cb;*/
  }
  .productsTitle h2 {
    font-size: 25px;
    font-weight: bolder;
  }
  .productsParagraph {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #0083cb;*/
  }
  .productsButtonContainer{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .productsButtonContainer button {
    width: 610px;
    height: 51px;
    border-radius: 50px;
    border: 1px solid #691ff4;
    cursor: pointer;
    color: #691ff4;
    font-size: 19px;
    font-weight: bold;
    background-color: white;
  }
  .productsButtonContainer button:hover {
    background-color: #691ff4;
    color: white;
    transition: 0.3s;
  }

  @media screen and (max-width: 1143px) {
    .productsSection{
      width: 100%;
      height: 1650px;
    }
    .productsSectionContainer{
      width: 100%;
      height: 1500px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      z-index: 100;
      /*background-color: #ffc6c6;*/
      /*opacity: 0.7;*/
    }
    .ProductsHeader{
      width: 90%;
      height: 70px;
    }
    .ProductsHeader h2 {
      font-size: 30px;
    }
    .productsCardsContainerHome{
      width: 100%;
      height: 1460px;
      /*background-color: #282828;*/
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
    .cardsForProducts{
      width: 100%;
      height: 430px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      cursor: pointer;
      /*background-color: #3296fa;*/
    }
    .cardsForProducts img{
      width: 100%;
      height: 300px;
    }
  }

</style>