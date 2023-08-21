<template>
    <div class="GymNetworkProductsPage">
        <div class="GymNetworkHeader">
            <ProductDirectoryInnerHeader
                :title="'Gym Network'"
                :paragraph="`Gym Network is a DeFi Aggregator Investment System combining the best yields with high rewards for its users. It provides easy access and saves a lot of precious time making investments in the crypto environment.
                         The GYMNET token also allows you to make smart and profitable investments in it and receive regular high interest.`"
                :link="'gymnetwork.io'"
                :logo="GYMnetLogo"
            />
        </div>
        <div class="GymNetworkCover"></div>
        <ProductDirectoryInnerFooter
            :images="GymNetProductImages"
            :technologies="GymNetTechnologieImages"
        />
    </div>
</template>

<script>
import ProductDirectoryInnerHeader from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/ProductDirectoryInnerHeader";
import ProductDirectoryInnerFooter from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/ProductDirectoryInnerFooter";
import GYMnetLogo from "/src/assets/images/productComponentsLogos/GYMnet-logo.png";
import {GymNetTechnologieImages, GymNetProductImages} from "../../../../fakeData";

export default {
    name: "GymNetworkTheProduct",
    components: {ProductDirectoryInnerFooter, ProductDirectoryInnerHeader},
    data() {
        return {
            GYMnetLogo: GYMnetLogo,
            GymNetTechnologieImages: GymNetTechnologieImages,
            GymNetProductImages: GymNetProductImages
        }
    }
}
</script>

<style scoped>
.GymNetworkProductsPage {
    width: 100%;
    height: 1950px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(39, 109, 218, 1) 0%, rgba(0, 102, 189, 1) 100%);
    margin-top: 69.12px;
}

.GymNetworkHeader {
    width: 100%;
    height: 381px;
}

.GymNetworkCover {
    width: 100%;
    height: 900px;
    background-image: url("/src/assets/images/productComponentsLogos/Gym-Network-cover.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
