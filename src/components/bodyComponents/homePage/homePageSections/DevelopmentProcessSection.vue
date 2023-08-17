<template>
  <div class="developmentProcessSection">
    <div class="devProcessContainer">
      <div class="devProcessParagraph">
        <h2>{{ $t('homePage.developmentProcess.developmentProcessTitle') }}</h2>
      </div>
      <div class="devProcessMainElements">
        <div class="iconsContainerDevProc">
          <div class="devProcCard" v-for="(card, index) in devProcCards" :key="index">
            <div class="devProcCardImg">
              <img alt="Research & Investigation" :src="card.imageSrc">
            </div>
            <div class="devProcCardTitle">
              <h2>{{ $t(card.titleKey) }}</h2>
            </div>
            <div class="devProcDots">
              <img alt="dots" :src="devProcDots">
            </div>
            <div class="devProcParagraph">
              <p>{{ $t(card.descriptionKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import devProcIcon1 from "/src/assets/images/devProcIcons/devProcIcon1.png"
import devProcIcon2 from "/src/assets/images/devProcIcons/devProcIcon2.png"
import devProcIcon3 from "/src/assets/images/devProcIcons/devProcIcon3.png"
import devProcIcon4 from "/src/assets/images/devProcIcons/devProcIcon4.png"
import devProcIcon5 from "/src/assets/images/devProcIcons/devProcIcon5.png"
import devProcIcon6 from "/src/assets/images/devProcIcons/devProcIcon6.png"
import devProcDots from "/src/assets/images/devProcIcons/devProcDots.png"

export default {
  name: "DevelopmentProcessSection",
  data() {
    return {
      devProcCards: [
        {
          titleKey: "homePage.developmentProcess.researchInvestigation",
          descriptionKey: "homePage.developmentProcess.researchInvestigationParagraph",
          imageSrc: devProcIcon1,
        },
        {
          titleKey: "homePage.developmentProcess.ideaValidation",
          descriptionKey: "homePage.developmentProcess.ideaValidationParagraph",
          imageSrc: devProcIcon2,
        },
        {
          titleKey: "homePage.developmentProcess.designPrototyping",
          descriptionKey: "homePage.developmentProcess.designPrototypingParagraph",
          imageSrc: devProcIcon3,
        },
        {
          titleKey: "homePage.developmentProcess.maintenanceSupport",
          descriptionKey: "homePage.developmentProcess.maintenanceSupportParagraph",
          imageSrc: devProcIcon4,
        },
        {
          titleKey: "homePage.developmentProcess.testingQa",
          descriptionKey: "homePage.developmentProcess.testingQaParagraph",
          imageSrc: devProcIcon5,
        },
        {
          titleKey: "homePage.developmentProcess.developmentImplementation",
          descriptionKey: "homePage.developmentProcess.developmentImplementationParagraph",
          imageSrc: devProcIcon6,
        },
      ],
      devProcDots: devProcDots,
    };
  },
};
</script>

<style scoped>
  .developmentProcessSection{
    width: 100%;
    height: 1450px;
    /*background-color: #414141;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .devProcessContainer{
    width: 85%;
    height: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    /*background-color: #000000;*/
  }
  .devProcessParagraph{
    width: 85%;
    height: 80px;
    /*background-color: #efefef;*/
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .devProcessParagraph h2 {
    font-size: 27px;
    font-weight: bolder;
    color: #313131;
  }
  .devProcessMainElements{
    width: 100%;
    height: 1350px;
    /*background-color: coral;*/
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  .iconsContainerDevProc {
    width: 85%;
    height: 1340px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /*background-color: white;*/
  }
  .devProcCard{
    width: 290px;
    height: 600px;
    border-bottom: 20px solid #691ff4;
    border-left: 2.5px solid #7e34ff;
    border-top: 2.5px solid #1ff4db;
    border-right: 2.5px solid #2fff89;
    border-top-left-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin:0 5px 0 5px;
  }
  .devProcCardImg {
    width: 100%;
    height: 240px;
    /*background-color: #ffc6c6;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .devProcCardImg img {
    width: 160px;
    height: 205px;
  }
  .devProcCardTitle {
    width: 100%;
    height: 60px;
    /*background-color: #ffc6c6;*/
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .devProcCardTitle h2 {
    font-size: 25px;
    font-weight: bolder;
    color: #313131;
  }
  .devProcDots {
    width: 100%;
    height: 40px;
    /*background-color: #ff8989;*/
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .devProcDots img {
    width: 55px;
    height: 15px;
  }
  .devProcParagraph {
    width: 100%;
    height: 180px;
    /*background-color: #913a3a;*/
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .devProcParagraph p{
    font-size: 19px;
    color: #313131;
  }


  @media screen and (max-width: 1285px) {
    .developmentProcessSection{
      width: 100%;
      height: 1350px;
    }
    .devProcessContainer{
      width: 85%;
      height: 1340px;
    }
    .devProcessMainElements{
      width: 100%;
      height: 1350px;
    }

    .iconsContainerDevProc {
      width: 85%;
      height: 1300px;
    }
  }
  @media screen and (max-width: 1255px) {
    .developmentProcessSection{
      width: 100%;
      height: 1950px;
    }
    .devProcessContainer{
      width: 85%;
      height: 1940px;
    }
    .devProcessMainElements{
      width: 100%;
      height: 1950px;
    }

    .iconsContainerDevProc {
      width: 85%;
      height: 1900px;
    }
  }
  @media screen and (max-width: 847px) {
    .developmentProcessSection{
      width: 100%;
      height: 3750px;
    }
    .devProcessContainer{
      width: 85%;
      height: 3740px;
    }
    .devProcessMainElements{
      width: 100%;
      height: 3750px;
    }

    .iconsContainerDevProc {
      width: 85%;
      height: 3700px;
    }
  }
</style>