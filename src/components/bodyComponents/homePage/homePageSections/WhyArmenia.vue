<template>
    <div class="whyArmenia">
        <div class="whyArmeniaTitleParagraph">
            <div class="whyArmeniaTitleParagraphContainer">
                <div class="whyArmeniaTitle">
                    <h2>{{ $t("homePage.whyArmenia.whyArmenia") }}</h2>
                </div>
                <div class="whyArmeniaParagraph">
                    <p>{{ $t("homePage.whyArmenia.whyArmeniaParagraph") }}</p>
                </div>
            </div>
            <div class="boldBorderGradientWhyArmenia"></div>
        </div>
        <div class="whyArmeniaWallpaper">
            <div class="whyArmeniaButton">
                <router-link to="/armenia">
                    <button>{{ $t("homePage.productsTranslations.moreAboutUsButtons") }}</button>
                </router-link>
            </div>
        </div>

        <div class="inCooperationWith">
            <div class="inCooperationWithContainer">
                <div class="inCooperationWithTitle">
                    <h2>IN COOPERATION WITH</h2>
                </div>
                <div class="inCooperationWithCards">
                    <a target="_blank" href="https://dwv.am/"><img alt="DWV" :src="DWV"></a>
                    <a target="_blank" href="https://www.uate.org/"><img alt="UATE" :src="UATE"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DWV from "/src/assets/images/enterprisesLogo/dwv.webp"
import UATE from "/src/assets/images/enterprisesLogo/uate.webp"

export default {
    name: "WhyArmenia",
    data() {
        return {
            DWV: DWV,
            UATE: UATE
        }
    }
}
</script>

<style scoped>
.whyArmenia {
    width: 100%;
    height: 1250px;
    /*background-color: antiquewhite;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.inCooperationWith {
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.inCooperationWithContainer {
    width: 70%;
    height: 200px;
    /*background-color: #ffc6c6;*/
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.inCooperationWithTitle {
    width: 400px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #691ff4;*/
}

.inCooperationWithTitle h2 {
    font-size: 30px;
    font-weight: bolder;
    color: #282828;
}

.inCooperationWithCards {
    width: 400px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.inCooperationWithCards img {
    width: 180px;
    height: 90px;
    cursor: pointer;
}

.inCooperationWithCards img:hover {
    opacity: 0.9;
}

.whyArmeniaTitleParagraph {
    width: 100%;
    height: 280px;
    /*background-color: gray;*/
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.boldBorderGradientWhyArmenia {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 115px;
    background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0, 255, 68, 1) 100%);
}

.whyArmeniaTitleParagraphContainer {
    width: 70%;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    /*background-color: #ffc6c6;*/
    z-index: 100;
}

.whyArmeniaTitle {
    width: 50%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #414141;*/
}

.whyArmeniaTitle h2 {
    font-size: 60px;
    font-weight: bolder;
    color: #4d1ff4;
}

.whyArmeniaParagraph {
    width: 70%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #ff6d6d;*/
}

.whyArmeniaParagraph p {
    font-size: 20px;
    color: white;
}

.whyArmeniaWallpaper {
    width: 100%;
    height: 700px;
    background-image: url("/src/assets/images/whyArmenia/Yerevan.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
}

.whyArmeniaButton {
    width: 70%;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 100px;
}

.whyArmeniaButton button {
    width: 130px;
    height: 41px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: #691ff4;
    font-size: 16px;
    background-color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12),
    0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
    text-decoration: none;
}

.whyArmeniaButton button:hover {
    background-color: #691ff4;
    color: white;
    transition: 0.3s;
}

@media screen and (max-width: 1173px) {
    .whyArmeniaParagraph {
        width: 100%;
    }

    .inCooperationWithCards {
        height: 200px;
        flex-direction: column;
    }

    .inCooperationWithCards img {
        width: 150px;
        height: 70px;
    }
}
</style>