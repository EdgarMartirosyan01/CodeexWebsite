<template>
    <div class="blogCardsContainer">
        <div class="blogCardsImage">
            <img alt="blog Image" :src="imageSrc" @click="goToBlog" />
        </div>
        <div class="blogCardsInformativeSection">
            <div class="blogCardsInformativeSectionTitle">
                <h2>{{ title }}</h2>
            </div>
            <div class="blogCardsInformativeSectionDate">
                <span>{{ date }}</span>
            </div>
            <div class="blogCardsInformativeSectionParagraph">
                <span>{{ paragraph }}</span>
            </div>
            <div class="blogCardsInformativeSectionButton">
                <button @click="goToBlog">READ MORE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogCard",
    props: {
        imageSrc: String,
        title: String,
        date: String,
        paragraph: String,
    },
    // methods: {
    //     goToBlog() {
    //         // Implement your navigation logic here
    //         // You can use Vue Router to navigate to the blog details page
    //     },
    // },
};
</script>


<style scoped>
    .blogCardsContainer{
        width: 1130px;
        height: 325px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /*border: 1px solid #414141;*/
    }
    .blogCardsContainer:hover{
        box-shadow: 0 1px 1px rgba(0,0,0,0.11),
        0 2px 2px rgba(0,0,0,0.11),
        0 4px 4px rgba(0,0,0,0.11),
        0 6px 8px rgba(0,0,0,0.11),
        0 8px 16px rgba(0,0,0,0.11);
    }
    .blogCardsImage{
        width: 325px;
        height: 325px;
        display: flex;
        align-items: center;
        padding: 25px;
        /*background-color: #691ff4;*/
    }
    .blogCardsImage img{
        width: 285px;
        height: 285px;
        cursor: pointer;
        opacity: 90%;
    }
    .blogCardsImage img:hover{
        opacity: 100%;
        transition: 0.2s;
    }
    .blogCardsInformativeSection{
        width: 785px;
        height: 325px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px;
        /*background-color: #ffc6c6;*/
    }
    .blogCardsInformativeSectionTitle{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /*background-color: #ffc6c6;*/
        word-break: break-all;
    }
    .blogCardsInformativeSectionTitle h2{
        font-size: 28px;
        color: #282828;
        cursor: pointer;
    }
    .blogCardsInformativeSectionTitle h2:hover{
        opacity: 80%;
        transition: 0.2s;
    }
    .blogCardsInformativeSectionDate{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /*background-color: #9a2121;*/
        word-break: break-all;
    }
    .blogCardsInformativeSectionDate span{
        font-size: 15px;
        font-weight: bold;
        color: #777777;
    }
    .blogCardsInformativeSectionParagraph{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /*background-color: #ffc6c6;*/
        word-break: break-all;
    }
    .blogCardsInformativeSectionParagraph span{
        font-size: 18px;
        color: #414141;
    }
    .blogCardsInformativeSectionButton{
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /*background-color: #ab2a2a;*/
    }
    .blogCardsInformativeSectionButton button{
        width: 140px;
        height: 40px;
        text-align: center;
        align-items: center;
        border: 1px solid #691ff4;
        color: #691ff4;
        background-color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
    }
    .blogCardsInformativeSectionButton button:hover{
        background-color: #691ff4;
        color: white;
        transition: 0.2s;
    }
    @media screen and (max-width: 1132px) {
        .blogCardsContainer{
            width: 98%;
            height: 860px;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .blogCardsImage{
            width: 85%;
            height: 325px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
            margin-top: 25px;
        }
        .blogCardsImage img{
            width: 325px;
            height: 325px;
        }
        .blogCardsInformativeSection{
            width: 85%;
            height: 525px;
            padding: 25px;
        }
        .blogCardsInformativeSectionTitle{
            width: 100%;
            height: 150px;
        }
        .blogCardsInformativeSectionParagraph{
            width: 100%;
            height: 250px;
            word-break: break-all;
        }
        .blogCardsInformativeSectionParagraph span{
            font-size: 18px;
            color: #414141;
            word-break: break-all;
        }
    }

    @media screen and (max-width: 447px) {
        .blogCardsContainer{
            width: 100%%;
            height: 1260px;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .blogCardsImage{
            width: 100%;
            height: 325px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
            margin-top: 25px;
        }
        .blogCardsImage img{
            width: 100%;
            height: 100%;
        }
        .blogCardsInformativeSection{
            width: 100%;
            height: 825px;
            padding: 25px;
        }
        .blogCardsInformativeSectionTitle{
            width: 100%;
            height: 350px;
        }
        .blogCardsInformativeSectionParagraph{
            width: 100%;
            height: 450px;
            word-break: break-all;
        }
        .blogCardsInformativeSectionParagraph span{
            font-size: 18px;
            color: #414141;
            word-break: break-all;
        }

    }
</style>