<template>
  <div class="solutionsSection">
    <div class="borderGradient"></div>
    <div class="solutionsContainer">
      <div class="globalTech">
        <div class="translatedParagraph">
          <p>
          <span>{{ $t("homePage.visionMission.visionParagraph1") }}</span>
          {{ $t("homePage.visionMission.visionParagraph2") }}
          <span>{{ $t("homePage.visionMission.visionParagraph3") }}</span>
          {{ $t("homePage.visionMission.visionParagraph4") }}
          <span>{{ $t("homePage.visionMission.visionParagraph5") }}</span>
          </p>
        </div>
        <div class="globalTechVision">
          <p>{{ $t("homePage.visionMission.vision") }}</p>
        </div>
      </div>
      <div class="digitalSolutions">
        <div class="translatedParagraph">
          <p>
          {{ $t("homePage.visionMission.missionParagraph1") }}
          <span>{{ $t("homePage.visionMission.missionParagraph2") }}</span>
          {{ $t("homePage.visionMission.missionParagraph3") }}
          <span>{{ $t("homePage.visionMission.missionParagraph4") }}</span>
          {{ $t("homePage.visionMission.missionParagraph5") }}
          <span>{{ $t("homePage.visionMission.missionparagraph6") }}</span>
          </p>
        </div>
        <div class="digitalSolutionsVision">
          <p>{{ $t("homePage.visionMission.mission") }}</p>
        </div>
      </div>
    </div>
    <div class="borderGradient"></div>
  </div>
</template>

<script>
export default {
  name: "SolutionsSection"
}
</script>

<style scoped>
  .solutionsSection{
    width: 100%;
    height: 230px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .borderGradient{
    width: 100%;
    height: 9px;
    background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0,255,68,1) 100%);
  }
  .solutionsContainer{
    width: 90%;
    height: 190px;
    /*background-color: #dedede;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .solutionsContainer p {
    font-size: 18px;
  }
  .solutionsContainer span {
    font-size: 18px;
    font-weight: bolder;
  }
  .globalTech{
    width: 50%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    /*background-color: #ffc6c6;*/
    border-right: 1px solid black;
    padding: 0 20px  0 20px;
  }
  .digitalSolutions{
    width: 50%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    /*background-color: #c6e5ff;*/
    padding: 0 20px  0 20px;
  }

  .translatedParagraph{
    width: 90%;
    height: 85px;
    /*background-color: red;*/
    display: flex;
  }

  @media screen and (max-width: 894px) {
    .solutionsSection{
      height: 350px;
      align-items: center;
      justify-content: center;
    }
    .solutionsContainer{
      height: 400px;
      flex-direction: column;
      justify-content: space-around;
    }
    .globalTech{
      width: 95%;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      border-right: none;
      padding-bottom: 20px;
      border-bottom: 1px solid black;
    }
    .digitalSolutions{
      width: 95%;
      margin-bottom: 50px;
    }
  }
</style>