<template>
    <div class="informationSecurityPage">
        <div class="informationSecurityPageTopBorder"><h2>INFORMATION SECURITY</h2></div>
        <div class="informationSecurityPageParagraph">
            <div class="paragraphContainer">
                <span>
                  Information security management system scope includes all the services of Codeex.
                </span>
                <span>
                  To help deliver on our mission, we have developed and deployed a comprehensive yet <br>
                    pragmatic information security management system, which complies to all applicable legal <br>
                    and regulatory requirements, and with the ISO/IEC 27001 standard, thereby:
                </span>
                <div class="paragraphList">
                    <ul>
                        <li>Codeex has an obligation to its customers, employees, suppliers, and service providers <br> to protect the confidentiality, integrity, and availability of information assets.</li>
                        <li>To ensure business continuity and minimize disruption to business functions by <br> preventing and minimizing the impact of security incidents.</li>
                        <li>To ensure the compliance with relevant information legislation and regulations.</li>
                        <li>Work to provide the necessary resources to ensure the efficiency and effectiveness of <br> the applied quality management system and strive to motivate, involve, and train <br> employees to achieve the intended goals.</li>
                        <li>To ensure that all information security controls are implemented to high standards to the <br> benefit of all interested parties.</li>
                        <li>Report any information security incident or issue to the responsible team.</li>
                        <li>Maintain confidentiality agreements with external interested parties.</li>
                        <li>Codeex committed to continual improvement through annual reviews, audits, <br> performance evaluation, management reviews and adopting the best practices.</li>
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