<template>
    <div class="GymStreetProductsPage">
        <div class="GymStreetHeader">
            <ProductDirectoryInnerHeader
                :title="'GYM STREET'"
                :paragraph="$t('homePage.productPages.gymStreetParagraph')"
                :logo="GYMstLogo"
            />
        </div>
        <div class="GymStreetCover"></div>
        <ProductDirectoryInnerFooter
            :images="GymStreetProductImages"
            :technologies="GymStreetTechnologieImages"
        />
    </div>
</template>

<script>
import ProductDirectoryInnerHeader
    from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/ProductDirectoryInnerHeader";
import ProductDirectoryInnerFooter
    from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/ProductDirectoryInnerFooter";
import GYMstLogo from "/src/assets/images/productComponentsLogos/GYMst-logo.webp"
import {GymStreetTechnologieImages, GymStreetProductImages} from "../../../../fakeData";

export default {
    name: "GymStreetTheProduct",
    components: {ProductDirectoryInnerFooter, ProductDirectoryInnerHeader},
    data() {
        return {
            GYMstLogo: GYMstLogo,
            GymStreetTechnologieImages: GymStreetTechnologieImages,
            GymStreetProductImages: GymStreetProductImages
        }
    }
}
</script>

<style scoped>
.GymStreetProductsPage {
    width: 100%;
    height: 1950px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(55, 55, 55, 1) 0%, rgba(41, 41, 41, 1) 100%);
    margin-top: 69.12px;
}

.GymStreetHeader {
    width: 100%;
    height: 381px;
    background-color: #004469;
}

.GymStreetCover {
    width: 100%;
    height: 900px;
    background-image: url("/src/assets/images/productComponentsLogos/Gym-Street-cover.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

@media screen and (max-width: 1155px) {
    .GymStreetProductsPage {
        width: 100%;
        height: 3150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .GymStreetHeader {
        width: 100%;
        height: 881px;
        background-color: #004469;
    }
}
</style>
