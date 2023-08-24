<template>
    <div class="portfolioPage">
        <div class="portfolioPageContainer">
            <div class="portfolioTitleContainer"><h2>{{ $t('homePage.portfolioParagraphs.portfolio') }}</h2></div>
            <div class="portfolioCardsContainer">
                <PortfolioCard
                    v-for="(card, index) in portfolioCards"
                    :key="index"
                    :card="card"
                    :isReversed="shouldReverse(index)"
                />
            </div>
        </div>
    </div>
</template>




<script>
import PortfolioCard from "@/components/bodyComponents/aboutPage/portfolioPage/PortfolioCard";
import ZAPPIX  from "/src/assets/images/portfolioImages/Zappix.webp"
import PetPeace from "/src/assets/images/portfolioImages/PetPace.webp"
import Vejle   from "/src/assets/images/portfolioImages/Vejle.webp"
import TryMeet from "/src/assets/images/portfolioImages/Trymeet.webp"
import Ayb     from "/src/assets/images/portfolioImages/AYB.webp"
import German  from "/src/assets/images/portfolioImages/Sparkassenstiftung.webp"
// import PetPeaceLogo from "src/assets/images/portfolioImages/petpace_logo.png"
// import TryMeetLogo from "src/assets/images/portfolioImages/try-meet-logo.png"
// import AybLogo from "src/assets/images/portfolioImages/ayb-logo.png"


export default {
    name: "PortfolioPage",
    components: { PortfolioCard },
    data() {
        return {
            portfolioCards: [
                {
                    title: "ZAPPIX",
                    description: this.$t('homePage.portfolioParagraphs.zappixParagraph'),
                    image: ZAPPIX,
                    // logo: PetPeaceLogo
                },
                {
                    title: "Pet Peace",
                    description: this.$t('homePage.portfolioParagraphs.petPeaceParagraph'),
                    image: PetPeace,
                    // logo: TryMeetLogo
                },
                {
                    title: "VEJLE ADMINISTRATION",
                    description: this.$t('homePage.portfolioParagraphs.vejleParagraph'),
                    image: Vejle,
                    // logo: AybLogo
                },
                {
                    title: "TRYMEET",
                    description: this.$t('homePage.portfolioParagraphs.tryMeetParagraph'),
                    image: TryMeet,
                    // logo: PetPeaceLogo
                },
                {
                    title: "AYB FOUNDATION CRM",
                    description: this.$t('homePage.portfolioParagraphs.aybParagraph'),
                    image: Ayb,
                    // logo: TryMeetLogo
                },
                {
                    title: "DSIK ARMENIA MNE PLATFORM",
                    description: this.$t('homePage.portfolioParagraphs.germanParagrpah'),
                    image: German,
                    // logo: AybLogo
                },
            ]
        };
    },
    methods: {
        shouldReverse(index) {
            return index % 2 === 1;
        }
    }
};
</script>




<style scoped>
.portfolioPage {
    width: 100%;
    height: 2100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 69.12px;
}
.portfolioPageContainer{
    width: 75%;
    height: 2080px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    /*background-color: #ffc6c6;*/
}
.portfolioTitleContainer{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #777777;*/
}
.portfolioTitleContainer h2 {
    font-size: 30px;
    font-weight: bolder;
    color: #282828;
}
.portfolioCardsContainer{
    width: 100%;
    height: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /*background-color: #525252;*/
}
@media screen and (max-width: 1113px) {
    .portfolioPage {
        width: 100%;
        height: 5100px;
    }
    .portfolioPageContainer{
        width: 75%;
        height: 5080px;
    }
    .portfolioCardsContainer{
        width: 100%;
        height: 5000px;
    }
}
</style>