<template>
    <div class="contactPage">
        <div class="contactTopBorder"><h2> {{$t('homePage.contactPage.contactUs')}}</h2></div>
       <div class="contactPageContainer">
            <div class="contactPageLeftSection">
                <div class="contactPageLeftSectionParagraph">
                    <p> {{$t('homePage.contactPage.contactUsParagraph')}}</p>
                    <span>
                         {{$t('homePage.contactPage.contactUsSpan')}}
                    </span>
                </div>
                <div class="contactPageLeftSectionForm">
                    <div class="contactMessageFormInputs">
                        <input type="text" placeholder="Full Name">
                        <input type="text" placeholder="Email">
                        <input type="text" placeholder="Company Name">
                    </div>
                    <div class="contactMessageFormTextArea">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div class="contactPageLeftSectionFormButton">
                        <button>
                            Send
                        </button>
                    </div>
                </div>
            </div>
           <div class="contactPageRightSection">
               <div class="googleMapsContainer">
                   <GMapMap
                       class="googleMaps"
                       :center="center"
                       :zoom="7"
                       map-type-id="terrain"
                   >
                       <GMapMarker
                           :key="marker.id"
                           v-for="marker in markers"
                           :position="marker.position"
                       />
                   </GMapMap>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: "ContactPage",
    data() {
        return {
            center: {lat: 51.093048, lng: 6.842120},
            markers: [
                {
                    id: 'dfsldjl3r',
                    position: {
                        lat: 51.093048, lng: 6.842120
                    },
                }
            ]
        }
    }
}
</script>

<style scoped>
.contactPage {
    width: 100%;
    height: 990px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 69.12px;
}
.contactTopBorder{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0, 255, 68, 1) 100%);
}
.contactTopBorder h2{
    font-size: 29px;
    font-weight: bolder;
    color: white;
    margin-left: 200px;
}
.contactPageContainer{
    width: 75%;
    height: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*background-color: #ffc6c6;*/
}

.contactPageLeftSection{
    width: 48%;
    height: 880px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /*background-color: #004469;*/
    flex-direction: column;
}
.contactPageLeftSectionParagraph{
    width: 95%;
    height: 150px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    /*background-color: #be9bff;*/
    margin-bottom: 20px;
}

.contactPageLeftSectionParagraph p{
    font-size: 18px;
    color: #282828;
}
.contactPageLeftSectionParagraph span{
    font-size: 24px;
    font-weight: bold;
    color: #691ff4;
}

.contactPageLeftSectionForm{
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    /*background-color: #3296fa;*/
    flex-direction: column;
    justify-content: space-around;
}
.contactMessageFormInputs {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /*background-color: #1ff4db;*/
}

.contactMessageFormInputs input {
    width: 95%;
    height: 39px;
    border: none;
    border-bottom: 2px solid #282828;
    font-size: 18px;
}
.contactMessageFormInputs input:hover {
    border-bottom: 2px solid #3296fa;
    transition: 0.2s;
}

.contactMessageFormTextArea {
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*background-color: #691ff4;*/
}

.contactMessageFormTextArea textarea {
    width: 95%;
    height: 303px;
    border: none;
    border-bottom: 2px solid #282828;
    font-size: 18px;
}
.contactMessageFormTextArea textarea:hover {
    border-bottom: 2px solid #3296fa;
    transition: 0.2s;
}

.contactPageLeftSectionFormButton{
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.contactPageLeftSectionFormButton button {
    width: 120px;
    height: 31px;
    border-radius: 5px;
    border: 1px solid #691ff4;
    background-color: #691ff4;
    cursor: pointer;
    color: white;
    font-size: 19px;
    font-weight: bold;
}

.contactPageLeftSectionFormButton button:hover {
    background-color: #540fd7;
    color: white;
    transition: 0.3s;
}

.contactPageRightSection{
    width: 48%;
    height: 880px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*background-color: #004469;*/
    border-left: 2px solid #3296fa;
    border-top: 2px solid #32fafa;
    border-right: 2px solid #32faa0;
    border-bottom: 2px solid #32fa5a;
}
.googleMapsContainer{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.googleMaps {
    width: 98%;
    height: 98%;
}
@media screen and (max-width: 850px) {
    .contactPage {
        width: 100%;
        height: 1300px;
    }
    .contactTopBorder{
        width: 100%;
        height: 80px;
    }
    .contactTopBorder h2{
        margin-left: 100px;
    }
    .contactPageContainer{
        width: 85%;
        height: 1250px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        /*background-color: #ff3838;*/
    }

    .contactPageLeftSection{
        width: 100%;
        height: 650px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        /*background-color: #004469;*/
        flex-direction: column;
    }
    .contactPageLeftSectionParagraph{
        width: 100%;
        height: 200px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-around;
        /*background-color: #be9bff;*/
        /*margin-bottom: 20px;*/
    }

    .contactPageLeftSectionParagraph p{
        font-size: 16px;
        color: #282828;
    }
    .contactPageLeftSectionParagraph span{
        font-size: 22px;
        font-weight: bold;
        color: #691ff4;
    }

    .contactPageLeftSectionForm{
        width: 100%;
        height: 450px;
        display: flex;
        align-items: center;
        /*background-color: #3296fa;*/
        flex-direction: column;
        justify-content: space-around;
    }
    .contactMessageFormInputs {
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        /*background-color: #1ff4db;*/
    }

    .contactMessageFormInputs input {
        width: 95%;
        height: 39px;
        border: none;
        border-bottom: 2px solid #282828;
        font-size: 18px;

    }
    .contactMessageFormInputs input:hover {
        border-bottom: 2px solid #3296fa;
        transition: 0.2s;
    }

    .contactMessageFormTextArea {
        width: 100%;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #691ff4;*/
    }

    .contactMessageFormTextArea textarea {
        width: 95%;
        height: 245px;
        border: none;
        border-bottom: 2px solid #282828;
        font-size: 18px;
    }
    .contactMessageFormTextArea textarea:hover {
        border-bottom: 2px solid #3296fa;
        transition: 0.2s;
    }

    .contactPageLeftSectionFormButton{
        width: 95%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .contactPageLeftSectionFormButton button {
        width: 120px;
        height: 31px;
        border-radius: 5px;
        border: 1px solid #691ff4;
        background-color: #691ff4;
        cursor: pointer;
        color: white;
        font-size: 19px;
        font-weight: bold;
    }

    .contactPageLeftSectionFormButton button:hover {
        background-color: #540fd7;
        color: white;
        transition: 0.3s;
    }

    .contactPageRightSection{
        width: 100%;
        height: 550px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #004469;*/
    }
    .googleMapsContainer{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>