<template>
    <div class="informationSecurityPage">
        <div class="informationSecurityPageTopBorder"><h2>PRIVACY POLICY</h2></div>
        <div class="informationSecurityPageParagraph">
            <div class="paragraphContainer">
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy1')}}
                </span>
                <h3>{{$t('homePage.privacyPolicyPage.privacy2')}}</h3>
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy3')}}
                </span>
                <h3>{{$t('homePage.privacyPolicyPage.privacy4')}}</h3>
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy5')}}
                </span>
                <h3>{{$t('homePage.privacyPolicyPage.privacy6')}}</h3>
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy7')}}
                </span>
                <h3>{{$t('homePage.privacyPolicyPage.privacy8')}}</h3>
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy9')}}
                </span>
                <h3>{{$t('homePage.privacyPolicyPage.privacy10')}}</h3>
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy11')}}
                </span>
                <h3>{{$t('homePage.privacyPolicyPage.privacy12')}}</h3>
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy13')}}
                </span>
                <h3>{{$t('homePage.privacyPolicyPage.privacy14')}}</h3>
                <span>
                    {{$t('homePage.privacyPolicyPage.privacy15')}}
                </span>
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
    height: 1530px;
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
    height: 1340px;
    /*background-color: #ffc6c6;*/
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
}
.paragraphContainer{
    width: 600px;
    height: 100%;
    /*background-color: #ffc6c6;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    word-break: break-all;
}
h3 {
    font-size: 18px;
    font-weight: bolder;
    color: #282828;
    margin-top: 40px;
}
span {
    font-size: 16px;
    color: #282828;
    word-break: break-all;
}
@media screen and (max-width: 793px) {
    .informationSecurityPage {
        width: 100%;
        height: 2030px;
    }
    .informationSecurityPageParagraph {
        width: 75%;
        height: 1840px;
        /*background-color: #ffc6c6;*/
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
    }
}
</style>