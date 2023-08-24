<template>
    <div class="productDirectoryInnerFooter">
        <div class="productDirectoryInnerFooterContainer">
            <div class="productDirectoryFooterImages">
                <img v-for="image in images" :key="image" :src="image" alt="product image">
            </div>
            <div class="productInnerFooterTechnologies">
                <h2>{{$t('homePage.productPages.technologiesUsed')}}</h2>
                <div class="productDirectoryInnerFooterImagesContainer">
                    <img v-for="technology in technologies" :key="technology" :src="technology" alt="technology image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: "ProductDirectoryInnerFooter",
    props: {
        images: Array,
        technologies: Array
    }
};
</script>

<style scoped>
    .productDirectoryInnerFooter{
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .productDirectoryInnerFooterContainer{
        width: 75%;
        height: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .productDirectoryFooterImages{
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .productDirectoryFooterImages img{
       width: 50%;
        height: 300px;
    }
    .productInnerFooterTechnologies{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /*background-color: #ffc6c6;*/
    }
    .productInnerFooterTechnologies h2 {
        font-size: 35px;
        font-weight: bold;
        color: white;
    }
    .productDirectoryInnerFooterImagesContainer{
        width: 150px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-left: 200px;
    }
    .productInnerFooterTechnologies img {
        width: 100%;
        height: 100%;
        margin: 0 25px 0 25px;
    }
    @media screen and (max-width: 1155px) {
        .productDirectoryInnerFooter{
            width: 100%;
            height: 1100px;
            /*background-color: #ffc6c6;*/
        }
        .productDirectoryInnerFooterContainer{
            width: 100%;
            height: 950px;
            /*background-color: #282828;*/
        }
        .productDirectoryFooterImages{
            width: 100%;
            height: 850px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .productDirectoryFooterImages img{
            width: 100%;
            height: 425px;
        }
        .productInnerFooterTechnologies{
            width: 80%;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            margin-top: 100px;
            /*background-color: #9d0808;*/
        }
        .productInnerFooterTechnologies h2 {
            font-size: 35px;
            font-weight: bold;
            color: white;
        }
        .productDirectoryInnerFooterImagesContainer{
            width: 80%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 25px;
            margin-left: 0;
            flex-wrap: wrap;
            /*background-color: #691ff4;*/
        }
        .productInnerFooterTechnologies img {
            width: 30px;
            height: 30px;
            margin: 0 25px 0 25px;
        }
    }
</style>