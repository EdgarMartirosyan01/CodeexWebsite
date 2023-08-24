<template>
    <div class="VoneProductsPage">
        <div class="VoneHeader">
            <ProductDirectoryInnerHeader
                :title="'VONE'"
                :paragraph="$t('homePage.productPages.voneParagraph')"
                :link="'vone.io'"
                :logo="VONELogo"
            />
        </div>
        <div class="VoneCover"></div>
        <ProductDirectoryInnerFooter
            :images="VoneProductImages"
            :technologies="VoneTechnologiesImages"
        />
    </div>
</template>



<script>
import ProductDirectoryInnerHeader from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/ProductDirectoryInnerHeader";
import ProductDirectoryInnerFooter from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/ProductDirectoryInnerFooter";
import VONELogo from  "/src/assets/images/productComponentsLogos/VONE-logo.png"
import {VoneTechnologieImages} from "../../../../fakeData";
import {VoneProductDoubleImages} from "../../../../fakeData";

export default {
    name: "VoneTheProduct",
    components: {ProductDirectoryInnerFooter, ProductDirectoryInnerHeader },
    data() {
        return {
            VONELogo: VONELogo,
            VoneTechnologiesImages: VoneTechnologieImages,
            VoneProductImages: VoneProductDoubleImages
        }
    }
}
</script>



<style scoped lang="scss">
.VoneProductsPage {
    width: 100%;
    height: 1950px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(15,39,66,1) 0%, rgba(76,85,112,1) 100%);
    margin-top: 69.12px;
}
.VoneHeader{
    width: 100%;
    height: 421px;
    display: flex;
    align-items: center;
}
.VoneCover{
    width: 100%;
    height: 950px;
    background-image: url("/src/assets/images/productComponentsLogos/Vone-cover.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

@media screen and (max-width: 1155px) {
    .VoneProductsPage {
        width: 100%;
        height: 3150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: linear-gradient(90deg, rgba(15,39,66,1) 0%, rgba(76,85,112,1) 100%);
        margin-top: 69.12px;
    }
}
</style>