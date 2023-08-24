<template>
    <div class="productDirectoryInnerHeader">
        <div class="productDirectoryInnerHeaderContainer">
            <div class="productDirectoryInnerHeaderLeftSide">
                <h2>{{ title }}</h2>
                <p>{{ paragraph }}</p>
                <a>{{ link }}</a>
            </div>
            <div  class="productDirectoryInnerHeaderRightSide">
                <h1>
                    <img alt="productLogo" :src="logo">
                </h1>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: "ProductDirectoryInnerHeader",
    props: {
        title: String,
        paragraph: String,
        link: String,
        logo: String
    }
}
</script>



<style scoped>
    .productDirectoryInnerHeader{
        width: 100%;
        height: 380px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .productDirectoryInnerHeaderContainer{
        width: 75%;
        height: 375px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /*background-color: #282828;*/
    }
    .productDirectoryInnerHeaderLeftSide{
        height: 290px;
        width: 45%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-around;
        /*background-color: #ffc6c6;*/
    }

    .productDirectoryInnerHeaderLeftSide h2 {
        font-size: 30px;
        font-weight: bold;
        color: white;
    }
    .productDirectoryInnerHeaderLeftSide p {
        font-size: 16.5px;
        font-weight: bold;
        color: white;
    }
    .productDirectoryInnerHeaderLeftSide a {
        padding: 3px;
        font-size: 16.5px;
        font-weight: bold;
        cursor: pointer;
        color: white;
    }
    .productDirectoryInnerHeaderLeftSide a:hover {
        font-size: 17.5px;
        font-weight: bold;
        transition: 0.3s;
    }

    .productDirectoryInnerHeaderRightSide{
        height: 370px;
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #ffc6c6;*/
    }
    .productDirectoryInnerHeaderRightSide img {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 1155px) {
        .productDirectoryInnerHeader{
            width: 100%;
            height: 700px;
            /*background-color: #282828;*/
            margin-top: 100px;
        }
        .productDirectoryInnerHeaderContainer{
            width: 75%;
            height: 690px;
            flex-direction: column;
            justify-content: space-between;
            /*background-color: #ffc6c6;*/
        }
        .productDirectoryInnerHeaderLeftSide{
            height: 290px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-around;
        }

        .productDirectoryInnerHeaderLeftSide h2 {
            font-size: 40px;
        }
        .productDirectoryInnerHeaderLeftSide p {
            font-size: 18.5px;
        }
        .productDirectoryInnerHeaderLeftSide a {
            padding: 3px;
            font-size: 18.5px;
        }
        .productDirectoryInnerHeaderLeftSide a:hover {
            font-size: 19.5px;
        }

        .productDirectoryInnerHeaderRightSide{
            height: 400px;
            width: 65%;
        }
        .productDirectoryInnerHeaderRightSide img {
            width: 100%;
            height: 100%;
        }
    }
</style>