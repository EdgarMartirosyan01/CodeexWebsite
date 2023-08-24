<template>
    <div class="productsPage">
        <div class="productsPageContainer">
            <div class="productsPageTitleParagraph">
                <h2>{{ $t('homePage.productsMainPage.products') }}</h2>
                <p>
                    {{ $t('homePage.productsMainPage.productsParagraphTop') }}
                </p>
            </div>
            <div class="productsPageProductCards">
                <div class="specificProductCard">
                    <div class="specificProductCardTopImage">
                        <img alt="product logo" :src="VoneLogoProducts">
                    </div>
                    <router-link to="/vone" class="specificProductCardBottomImage">
                        <div class="specificProductCardBottomImageContainer">
                            <img alt="product card" :src="VoneProductCard">
                            <div class="specificProductCardBottomImageInnerText">
                                <h2>VONE</h2>
                                <p>
                                    {{ $t('homePage.productsMainPage.productCardsInfo1') }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="specificProductCard">
                    <div class="specificProductCardTopImage">
                        <img alt="product logo" :src="GymStreetLogoProducts">
                    </div>
                    <router-link to="/gym-street" class="specificProductCardBottomImage">
                        <div class="specificProductCardBottomImageContainer">
                            <img alt="product card" :src="GymStreetProductCard">
                            <div class="specificProductCardBottomImageInnerText">
                                <h2>GYM STREET</h2>
                                <p>
                                    {{ $t('homePage.productsMainPage.productCardsInfo2') }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="specificProductCard">
                    <div class="specificProductCardTopImageBlue">
                        <img alt="product logo" :src="GymNetLogoProducts">
                    </div>
                    <router-link to="/gym-network" class="specificProductCardBottomImage">
                            <div class="specificProductCardBottomImageContainer">
                                <img alt="product card" :src="GymNetProductCard">
                                <div class="specificProductCardBottomImageInnerText">
                                    <h2>GYM NETWORK</h2>
                                    <p>
                                        {{ $t('homePage.productsMainPage.productCardsInfo3') }}
                                    </p>
                                </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="productsPageInformationText">
                <p>
                    {{ $t('homePage.productsMainPage.productsParagraphBottom1') }}
                </p>
                <p>
                    {{ $t('homePage.productsMainPage.productsParagraphBottom2') }}
                </p>
                <p>
                    {{ $t('homePage.productsMainPage.productsParagraphBottom3') }}
                </p>
                <p>
                    {{ $t('homePage.productsMainPage.productsParagraphBottom4') }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import VoneLogoProducts from "/src/assets/images/productPageSpecific/Vone-logo-product-page.webp"
import VoneProductCard from "/src/assets/images/productPageSpecific/Vone-product-background-product-page.webp"
import GymNetLogoProducts from "/src/assets/images/productPageSpecific/gym-net-prodyct-page.png"
import GymNetProductCard from "/src/assets/images/productPageSpecific/Gym-Network-card-product-page.webp"
import GymStreetLogoProducts from "/src/assets/images/productPageSpecific/Logo-Gym-street-product-page.png"
import GymStreetProductCard from "/src/assets/images/productPageSpecific/Gym-street-card-product-page.webp"
export default {
    name: "ProductsPage",
    data(){
        return{
            VoneLogoProducts: VoneLogoProducts,
            VoneProductCard: VoneProductCard,
            GymNetLogoProducts: GymNetLogoProducts,
            GymNetProductCard: GymNetProductCard,
            GymStreetLogoProducts: GymStreetLogoProducts,
            GymStreetProductCard: GymStreetProductCard
        }
    }
}
</script>

<style scoped>
.productsPage {
    width: 100%;
    height: 1350px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 69.12px;
}
.productsPageContainer{
    width: 75%;
    height: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    /*background-color: #ffc6c6;*/
}
.productsPageTitleParagraph{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    /*background-color: #777777;*/
}
.productsPageTitleParagraph h2{
    font-size: 35px;
    font-weight: bolder;
    color: #282828;
}
.productsPageTitleParagraph p{
    font-size: 1.05em;
    font-weight: bolder;
    color: #282828;
}
.productsPageProductCards{
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /*background-color: lightseagreen;*/
}
.specificProductCard{
    width: 350px;
    height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /*background-color: salmon;*/
}
.specificProductCardTopImage{
    width: 60%;
    height: 56px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /*background-color: #dbcaff;*/
    margin-top: 20px;
}
.specificProductCardTopImage img{
    width: 100%;
    height: 100%;
}
.specificProductCardTopImageBlue{
    width: 60%;
    height: 56px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /*background-color: #dbcaff;*/
    margin-top: 20px;
}
.specificProductCardTopImageBlue img{
    width: 100%;
    height: 100%;
    background-color: #3296fa;
    padding: 5px;
    border-radius: 25px;
}
.specificProductCardBottomImage{
    width: 99%;
    height: 515px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*background-color: coral;*/
    cursor: pointer;
}
.specificProductCardBottomImage:hover{
    width: 100%;
    height: 520px;
    transition: 0.2s;
}
.specificProductCardBottomImageContainer{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}
.specificProductCardBottomImageInnerText{
    width: 300px;
    height: 100px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    overflow: hidden;
    bottom: 20px;
    right: 0;
}
.specificProductCardBottomImageInnerText h2{
    font-size: 25px;
    font-weight: bolder;
    color: white;
}
.specificProductCardBottomImageInnerText p{
    font-size: 1em;
    font-weight: bolder;
    color: white;
}
.specificProductCardBottomImage img{
    width: 100%;
    height: 100%;
}
.productsPageInformationText{
    margin-top: 50px;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    /*background-color: #b3d4f5;*/
}
.productsPageInformationText p{
    font-size: 1.05em;
    color: #282828;
}
@media screen and (max-width: 1298px) {
    .productsPage {
        width: 100%;
        height: 2050px;
    }
    .productsPageContainer{
        width: 75%;
        height: 2000px;
        justify-content: space-between;
        flex-direction: column;
    }
    .productsPageProductCards{
        width: 100%;
        height: 1300px;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}
@media screen and (max-width: 933px) {
    .productsPage {
        width: 100%;
        height: 3450px;
    }
    .productsPageContainer{
        width: 95%;
        height: 3400px;
        flex-direction: column;
    }
    .productsPageTitleParagraph{
        width: 100%;
        height: 200px;
    }
    .productsPageTitleParagraph h2{
        font-size: 35px;
        font-weight: bolder;
        color: #282828;
    }
    .productsPageTitleParagraph p{
        font-size: 1.05em;
        font-weight: bolder;
        color: #282828;
    }
    .productsPageProductCards{
        width: 100%;
        height: 2200px;
        border-top: 5px solid #3296fa;
        border-bottom:  5px solid #3296fa;
    }
    .productsPageInformationText{
        margin-top: 50px;
        margin-bottom: 50px;
        width: 100%;
        height: 700px;
    }
    .productsPageTitleParagraph{
        width: 100%;
        height: 300px;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;
        /*background-color: #777777;*/
    }
}
</style>