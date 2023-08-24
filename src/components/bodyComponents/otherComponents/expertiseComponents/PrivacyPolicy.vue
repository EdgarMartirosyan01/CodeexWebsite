<template>
    <div class="informationSecurityPage">
        <div class="informationSecurityPageTopBorder"><h2>PRIVACY POLICY</h2></div>
        <div class="informationSecurityPageParagraph">
            <div class="paragraphContainer">
                <span>
                  Codeex (“us”, “we”, or “our”) operates http:// / (the “Site”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.

                    We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
                </span>
                <span>
                   Information Collection And Use

                    While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or
                    identify you. Personally identifiable information may include, but is not limited to your name (“Personal Information”).
                </span>
                <div class="paragraphList">
                    <ul>
                        <li>Log Data

                            Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”).

                            This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.

                            In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this …

                        </li>
                        <li>Communications

                            We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that …

                        </li>
                        <li>Cookies

                            Cookies are files with small amount of data, which may include an anonymous unique identifier.

                            Cookies are sent to your browser from a web site and stored on your computer’s hard drive.

                            Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.

                        </li>
                        <li>Security

                            The security of your Personal Information is important to us, but remember that no method oftransmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</li>
                        <li>Changes To This Privacy Policy

                            This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

                            We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

                            If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</li>                        <li>Ensure the quality of management processes, adjust, and update documents, and <br>
                            continuously improve the quality management system. <br>
                            This policy has been prepared and disseminated to the various interested parties <br>
                            through the various available means, and the responsibility for its implementation rests <br>
                            with all employees working in the department. The management is committed to <br>
                            reviewing and updating it annually to ensure its effectiveness and compatibility with the <br>
                            activities and services of Codeex.
                        </li>
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
    height: 1230px;
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
    height: 940px;
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
.paragraphList ul li {
    font-size: 16px;
    color: #282828;
    word-break: break-all;
    padding-bottom: 10px;
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