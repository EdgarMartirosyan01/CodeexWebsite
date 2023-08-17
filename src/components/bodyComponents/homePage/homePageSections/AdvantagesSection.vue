<template>
  <div class="advantagesSection">
    <div class="advantagesSectionContainer">
      <div class="boldBorderGradientAdvantages1">
        <h2>{{ $t('homePage.advantagesTranslations.advantagesCodeex') }}</h2>
      </div>
      <div class="circleImagesContainer">
        <div class="advantagesCards" v-for="(advantage, index) in advantages" :key="index">
          <div class="advantageImageContainer">
            <img :alt="`Advantage image ${index + 1}`" :src="advantage.image">
          </div>
          <div :class="{ whiteText: isWhiteText(index), whiteText2: isWhiteText2(index) }">
            <h2>{{ $t(advantage.titleKey) }}</h2>
          </div>
          <div :class="{ whiteText: isWhiteText(index), whiteText2: isWhiteText2(index) }">
            <p>{{ $t(advantage.paragraphKey) }}</p>
          </div>
        </div>
      </div>
      <div class="boldBorderGradientAdvantages2"></div>
    </div>
  </div>
</template>

<script>
import advantage1 from "/src/assets/images/advantages/advantage1.png";
import advantage2 from "/src/assets/images/advantages/advantage2.png";
import advantage3 from "/src/assets/images/advantages/advantage3.png";
import advantage4 from "/src/assets/images/advantages/advantage4.png";
import advantage5 from "/src/assets/images/advantages/advantage5.png";

export default {
  name: "AdvantagesSection",
  data() {
    return {
      advantages: [
        { image: advantage1, titleKey: "homePage.advantagesTranslations.firstTitle", paragraphKey: "homePage.advantagesTranslations.firstParagraph" },
        { image: advantage2, titleKey: "homePage.advantagesTranslations.secondTitle", paragraphKey: "homePage.advantagesTranslations.secondParagraph" },
        { image: advantage3, titleKey: "homePage.advantagesTranslations.thirdTitle", paragraphKey: "homePage.advantagesTranslations.thirdParagraph" },
        { image: advantage4, titleKey: "homePage.advantagesTranslations.fourthTitle", paragraphKey: "homePage.advantagesTranslations.fourthParagraph" },
        { image: advantage5, titleKey: "homePage.advantagesTranslations.fifthTitle", paragraphKey: "homePage.advantagesTranslations.fifthParagraph" },
      ],
    };
  },
  methods: {
    isWhiteText(index) {
      return index >= this.advantages.length - 2;
    },
    isWhiteText2(index) {
      return index >= this.advantages.length - 1;
    },
  },
};
</script>



<style scoped>
.advantagesSection {
  width: 100%;
  height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  /*background-color: #f3f3f3;*/
}
.advantagesSectionContainer{
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.boldBorderGradientAdvantages1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0,255,68,1) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.boldBorderGradientAdvantages1 h2{
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-left: 200px;
  margin-top: 20px;
}

.boldBorderGradientAdvantages2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0,255,68,1) 100%);
}

.circleImagesContainer {
  width: 70%;
  margin-top: 100px;
  height: 720px;
  /*background-color: #f5ffd8;*/
  z-index: 100;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
}

.advantagesCards{
  width: 300px;
  height: 350px;
  /*background-color: #414141;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.advantageImageContainer{
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  /*background-color: #ffc6c6;*/
}
.advantageImageContainer img{
  width: 220px;
  height: 220px;
}

.advantageTitleContainer{
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-self: center;
  text-align: center;
  /*background-color: #731616;*/
}
.advantageTitleContainer h2{
  font-size: 18px;
  font-weight: bolder;
  color: #282828;
  margin-left: 25px;
}

.advantageParagraphContainer{
  width: 65%;
  height: 70px;
  display: flex;
  align-items: flex-start;
  justify-self: flex-start;
  text-align: center;
  /*background-color: #ffc6c6;*/
}
.advantageParagraphContainer p {
  font-size: 18px;
  font-weight: bolder;
  color: #282828;
}
.whiteText h2{
  color: white;
}
.whiteText p{
  color: white;
}

@media screen and (max-width: 1286px) {
  .advantagesSection {
    width: 100%;
    height: 1230px;
  }
  .advantagesSectionContainer{
    width: 100%;
    height: 1180px;
    display: flex;
    justify-content: space-between;
  }
  .advantagesCards{
    width: 300px;
    height: 350px;
    /*background-color: #414141;*/
  }
  .whiteText h2{
    color: #282828;
  }
  .whiteText p{
    color: #282828;
  }
  .whiteText2 h2 {
    color: white;
  }
  .whiteText2 p {
    color: white;
  }

  @media screen and (max-width: 859px) {
    .advantagesSection {
      width: 100%;
      height: 2220px;
    }
    .advantagesSectionContainer{
      width: 100%;
      height: 2200px;
      display: flex;
      justify-content: space-between;
    }
    .advantagesCards{
      width: 370px;
      height: 420px;
      /*background-color: #414141;*/
    }
    .advantageImageContainer{
      width: 100%;
      height: 290px;
    }
    .advantageImageContainer img{
      width: 280px;
      height: 280px;
    }

    .advantageTitleContainer{
      width: 100%;
      height: 40px;
    }
    .advantageTitleContainer h2{
      font-size: 22px;
    }

    .advantageParagraphContainer{
      width: 65%;
      height: 80px;
    }
    .advantageParagraphContainer p {
      font-size: 20px;
      font-weight: bolder;
      color: #282828;
    }
    .whiteText h2{
      color: #282828;
    }
    .whiteText p{
      color: #282828;
    }
    .whiteText2 h2 {
      color: white;
    }
    .whiteText2 p {
      color: white;
    }
  }
}
</style>
