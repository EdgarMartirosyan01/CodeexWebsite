<template>
    <div class="informationSecurityPage">
        <div class="informationSecurityPageTopBorder"><h2>INFORMATION SECURITY</h2></div>
        <div class="informationSecurityPageParagraph">
            <div class="paragraphContainer">
                <span>
                  {{$t('homePage.informationSecurityPage.information1')}}
                </span>
                <span>
                 {{$t('homePage.informationSecurityPage.information2')}}
                </span>
                <div class="paragraphList">
                    <ul>
                        <li> {{$t('homePage.informationSecurityPage.information3')}}</li>
                        <li> {{$t('homePage.informationSecurityPage.information4')}}</li>
                        <li> {{$t('homePage.informationSecurityPage.information5')}}</li>
                        <li> {{$t('homePage.informationSecurityPage.information6')}}</li>
                        <li> {{$t('homePage.informationSecurityPage.information7')}}</li>
                        <li> {{$t('homePage.informationSecurityPage.information8')}}</li>
                        <li> {{$t('homePage.informationSecurityPage.information9')}}</li>
                        <li> {{$t('homePage.informationSecurityPage.information10')}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PrivacyPolicy",
}
</script>

<style scoped>
.informationSecurityPage {
    width: 100%;
    height: 930px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 69.12px;
}
.informationSecurityPageTopBorder{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0, 255, 68, 1) 100%);
}
.informationSecurityPageTopBorder h2{
    font-size: 29px;
    font-weight: bolder;
    color: white;
    margin-left: 200px;
}
.informationSecurityPageParagraph {
    width: 75%;
    height: 740px;
    /*background-color: #ffc6c6;*/
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
}
.paragraphContainer{
    width: 600px;
    height: 100%;
    /*background-color: #777777;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    word-break: break-all;
}
.paragraphContainer span{
    font-size: 16px;
    color: #282828;
    word-break: break-all;
}
.paragraphList{
    width: 100%;
    word-break: break-all;
    margin-left: 20px;
}
.paragraphList li {
    font-size: 16px;
    color: #282828;
    word-break: break-all;
    margin-bottom: 15px;
}
@media screen and (max-width: 793px) {
    .informationSecurityPage {
        width: 100%;
        height: 1130px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        margin-top: 69.12px;
    }
    .informationSecurityPageTopBorder{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0, 255, 68, 1) 100%);
    }
    .informationSecurityPageTopBorder h2{
        font-size: 29px;
        font-weight: bolder;
        color: white;
        margin-left: 50px;
    }
    .informationSecurityPageParagraph {
        width: 75%;
        height: 940px;
        /*background-color: #ffc6c6;*/
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
    }
    .informationSecurityPageParagraph {
        width: 100%;
        height: 940px;
        /*background-color: #ffc6c6;*/
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
    }
    .paragraphContainer{
        width: 95%;
        height: 100%;
        /*background-color: #777777;*/
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-around;
        word-break: break-all;
    }
}
</style>