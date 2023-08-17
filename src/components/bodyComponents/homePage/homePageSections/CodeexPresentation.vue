<template>
  <div class="codeexPresentationSection">
    <div class="presentationDivision">
      <div class="welcomeToCodeex">
        <h2>{{ $t('homePage.presentation.welcomeToCodeex') }}</h2>
      </div>
      <div class="operationsCardsContainer">
        <div
            class="operationsCards"
            v-for="(cardData, index) in operationsCardsData"
            :key="index"
        >
          <div class="operationsCardsImage">
            <img :src="cardData.image" alt="Codeex Pictures">
          </div>
          <div class="operationsCardsContent">
            <div class="operationsCardsContentContainer">
              <h2>{{ $t(cardData.title) }}</h2>
              <p>{{ $t(cardData.description) }}</p>
              <button>{{ $t('homePage.presentation.viewMore') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import operationsPic1 from "/src/assets/images/operationsPictures/operationsPic1.jpg";
import operationsPic2 from "/src/assets/images/operationsPictures/operationsPic2.jpg";
import operationsPic3 from "/src/assets/images/operationsPictures/operationsPic3.jpg";
import operationsPic4 from "/src/assets/images/operationsPictures/operationsPic4.jpg";

export default {
  name: "CodeexPresentation",
  data() {
    return {
      operationsPic1: operationsPic1,
      operationsCardsData: [
        {
          image: operationsPic1,
          title: "homePage.presentation.softwareDevelopment",
          description: "homePage.presentation.softwareDevParagraph",
        },
        {
          image: operationsPic2,
          title: "homePage.presentation.mobileDevelopment",
          description: "homePage.presentation.mobileDevParagraph",
        },
        {
          image: operationsPic3,
          title: "homePage.presentation.dedicatedTeam",
          description: "homePage.presentation.dedicatedTeamParagraph",
        },
        {
          image: operationsPic4,
          title: "homePage.presentation.operationMaintenance",
          description: "homePage.presentation.operationMaintenanceParagraph",
        },
      ],
    };
  },
};
</script>




<style scoped>
  .codeexPresentationSection{
    width: 100%;
    height: 830px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .presentationDivision{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 80%;
    height: 800px;
    /*background-color: #282828;*/
  }

  .welcomeToCodeex{
    width: 100%;
    height: 50px;
    /*background-color: #3296fa;*/
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .welcomeToCodeex h2 {
    font-size: 28px;
    font-weight: bold;
    color: #414141;
  }
  .operationsCardsContainer{
    width: 100%;
    min-height: 700px;
    /*background-color: #691ff4;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .operationsCards{
    position: relative;
    width: 300px;
    height: 620px;
    /*background-color: #ffffff;*/
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .operationsCardsImage{
    position: relative;
    overflow: hidden;
    height: 381px;
    width: 251px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
  .operationsCards img{
    height: 380px;
    width: 250px;
    border-radius: 50px 0 50px 0;
  }
  .operationsCardsContent {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 380px;
    width: 250px;
    border: 2.5px solid limegreen;
    border-left: 2.5px solid #691ff4;
    border-radius: 50px 0 50px 0;
    /*border-image: linear-gradient(to right, #2e008b, #40af00) 1;*/
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .operationsCardsContentContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 230px;
    height: 220px;
    /*background-color: #ffc6c6;*/
    justify-content: space-around;
  }
  .operationsCardsContentContainer h2{
    font-size: 22px;
    font-weight: bold;
    color: #414141;
  }
  .operationsCardsContentContainer p{
    font-size: 16px;
    font-weight: bold;
    color: #414141;
  }
  .operationsCardsContentContainer button{
    width: 110px;
    height: 40px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    color: white;
    background-color: #691ff4;
  }
  .operationsCardsContentContainer button:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
    border: 1px solid #691ff4;
  }

  @media screen and (max-width: 1300px) {
    .codeexPresentationSection{
      width: 100%;
      height: 1520px;
    }
    .presentationDivision{
      width: 80%;
      height: 1500px;
    }
  .operationsCardsContainer{
    display: flex;
    flex-wrap: wrap;
    height: 1450px ;
    /*background-color: #691ff4;*/
    }
  }
  @media screen and (max-width: 1200px) {
    .codeexPresentationSection{
      width: 100%;
      height: 1520px;
    }
    .presentationDivision{
      width: 80%;
      height: 1500px;
    }
    .operationsCardsContainer{
      display: flex;
      flex-wrap: wrap;
      height: 1450px ;
    }
  }
  @media screen and (max-width: 770px) {
    .codeexPresentationSection{
      width: 100%;
      height: 1650px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 765px) {
    .codeexPresentationSection{
      width: 100%;
      height: 2850px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .presentationDivision{
      width: 80%;
      height: 2800px;
    }
    .operationsCardsContainer{
      display: flex;
      flex-wrap: wrap;
      height: 2750px ;
    }
    .operationsCards{
      width: 400px;
      height: 620px;
    }
    .operationsCardsImage{
      height: 391px;
      width: 281px;
    }
    .operationsCards img{
      height: 390px;
      width: 280px;
    }
    .operationsCardsContent {
      height: 390px;
      width: 280px;
    }
    .operationsCardsContentContainer{
      width: 260px;
      height: 220px;
    }
    .operationsCardsContentContainer h2{
      font-size: 24px;
    }
    .operationsCardsContentContainer p{
      font-size: 17px;
    }
    .operationsCardsContentContainer button{
      width: 130px;
      height: 45px;
    }
  }

</style>