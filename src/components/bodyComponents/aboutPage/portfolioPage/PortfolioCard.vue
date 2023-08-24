<template>
    <div :class="['portfolioCardContainer', isReversed ? 'reversed' : '']">
        <div class="portfolioCardContainerRelative">
            <div class="portfolioCard">
                <img :alt="card.title" :src="card.image">
                <div class="portfolioCardInformation">
                    <div class="portfolioCardInformationContainer">
                        <div class="portfolioCardInformationTitleParagraph">
                            <h2>{{ card.title }}</h2>
                            <p>{{ card.description }}</p>
                        </div>
                        <div class="portfolioCardInformationLogo">
                            <img :alt="card.title + ' logo'" :src="card.logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioCard",
    props: {
        card: Object,
        isReversed: Boolean
    }
};
</script>


<style scoped>
    .portfolioCardContainer{
        width: 100%;
        height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #ffc2c2;*/
    }
    .portfolioCardContainerRelative{
        width: 1200px;
        height: 319px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #3296fa;*/
    }
    .portfolioCard{
        width: 1080px;
        height: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 25px;
        cursor: pointer;
        /*background-color: #ffcccc;*/
        position: relative;
    }
    .portfolioCard:hover{
        box-shadow: 0 1px 1px rgba(0,0,0,0.12),
        0 2px 2px rgba(0,0,0,0.12),
        0 4px 4px rgba(0,0,0,0.12),
        0 8px 8px rgba(0,0,0,0.12),
        0 16px 16px rgba(0,0,0,0.12);
        transition: 0.3s;
    }
    .portfolioCard img {
        width: 500px ;
        height: 260px;
        border-radius: 25px;
        margin-left: 15px;
        z-index: 100;
    }
    .portfolioCardInformation{
        width: 570px;
        height: 265px;
        border: 1px solid #343434;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        position: absolute;
        overflow: hidden;
        right: 15px;
        display: flex;
        align-items:  flex-start;
        justify-content: center;
    }
    .portfolioCardInformationContainer{
        width: 520px;
        height: 200px;
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-between;
        /*background-color: #004469;*/
    }
    .portfolioCardInformationTitleParagraph{
        width: 250px;
        height: 150px;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;
        /*background-color: #ff9595;*/
    }
    .portfolioCardInformationTitleParagraph h2{
       font-size: 20px;
       color: #282828;
    }
    .portfolioCardInformationTitleParagraph p{
       font-size: 1em;
       color: #282828;
    }
    .portfolioCardInformationLogo{
        width: 160px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: wheat;*/
        margin-top: 5px;
    }
    .portfolioCardInformationLogo img{
        width: 100%;
        height: 100%;
    }

    /* Added styles for reversed cards */
    .reversed .portfolioCard {
        flex-direction: row-reverse;
    }
    .reversed .portfolioCard img {
        margin-left: 0;
        margin-right: 15px;
    }
    .reversed .portfolioCardInformation {
        right: auto;
        left: 15px;
        border-radius: 25px 0 0 25px;
    }
    .reversed .portfolioCardInformationContainer {
        justify-content: space-between;
        flex-direction: row-reverse;
    }
    @media screen and (max-width: 1113px) {
        .portfolioCardContainer{
            width: 100%;
            height: 820px;
        }
        .portfolioCardContainerRelative{
            width: 100%;
            height: 819px;
            /*background-color: #3296fa;*/
        }
        .portfolioCard{
            width: 100%;
            height: 760px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            border-radius: 25px;
            cursor: pointer;
            /*background-color: #ffcccc;*/
            position: relative;
        }
        .portfolioCard:hover{
            box-shadow: 0 1px 1px rgba(0,0,0,0.12),
            0 2px 2px rgba(0,0,0,0.12),
            0 4px 4px rgba(0,0,0,0.12),
            0 8px 8px rgba(0,0,0,0.12),
            0 16px 16px rgba(0,0,0,0.12);
            transition: 0.3s;
        }
        .portfolioCard img {
            width: 95%;
            margin-top: 15px;
            height: 460px;
            border-radius: 25px;
            z-index: 100;
        }
        .portfolioCardInformation{
            width: 95%;
            height: 380px;
            border: 1px solid #343434;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
            position: absolute;
            overflow: hidden;
            bottom: 15px;
            display: flex;
            align-items:  flex-end;
            justify-content: flex-start;
        }
        .portfolioCardInformationContainer{
            width: 90%;
            height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            /*background-color: #004469;*/
            flex-direction: column;
            margin-left: 20px;
        }
        .portfolioCardInformationTitleParagraph{
            width: 90%;
            height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            flex-direction: column;
            /*background-color: #ff9595;*/
        }
        .portfolioCardInformationTitleParagraph h2{
            font-size: 20px;
            color: #282828;
        }
        .portfolioCardInformationTitleParagraph p{
            font-size: 1em;
            color: #282828;
        }
        .portfolioCardInformationLogo{
            width: 160px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            /*background-color: wheat;*/
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .portfolioCardInformationLogo img{
            width: 100%;
            height: 100%;
        }

        /* Added styles for reversed cards */
        .reversed .portfolioCard {
            width: 100%;
            height: 760px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            border-radius: 25px;
            cursor: pointer;
            /*background-color: #ffcccc;*/
            position: relative;
        }
        .reversed .portfolioCard img {
            width: 95%;
            height: 460px;
            border-radius: 25px;
            z-index: 100;
        }
        .reversed .portfolioCardInformation {
            width: 95%;
            height: 380px;
            border: 1px solid #343434;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
            position: absolute;
            overflow: hidden;
            bottom: 15px;
            display: flex;
            align-items:  flex-end;
            justify-content: flex-start;
        }
        .reversed .portfolioCardInformationContainer {
            width: 90%;
            height: 200px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            /*background-color: #004469;*/
            flex-direction: column;
            margin-left: 20px;
        }
    }
</style>