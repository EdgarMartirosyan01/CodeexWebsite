<template>
    <div className="informationSecurityPage">
        <div className="informationSecurityPageTopBorder"><h2>QUALITY POLICY</h2></div>
        <div className="informationSecurityPageParagraph">
            <div className="paragraphContainer">
                <span>
                    Codeex is keen to provide all services with high quality, in accordance with the vision and <br>
                    mission of Codeex, to achieve its objectives by providing all services according to quality <br>
                    standards and directing all efforts to meet the needs of customers in a way that exceeds <br>
                    expectations.
                </span>
                <span>
                    Codeex is committed to adopting and implementing the quality policy through the application <br>
                    of the international standard, ISO 9001: 2015 quality management system and the following <br>
                    directives:
                </span>
                <div className="paragraphList">
                    <ul>
                        <li>Providing high quality services that meet the needs and satisfaction of the various <br>
                            interested parties.
                        </li>
                        <li>Setting smart objectives and reviewing them on an ongoing basis and ensuring the <br>
                            dissemination of quality concepts and the commitment of employees to regulations.
                        </li>
                        <li>Keeping abreast of best practices to develop operations and services and provide them <br>
                            in an innovative way to delight customers.
                        </li>
                        <li>Work to provide the necessary resources to ensure the efficiency and effectiveness of <br>
                            the applied quality management system and strive to motivate, involve, and train <br>
                            employees to achieve the intended goals.
                        </li>
                        <li>Commitment to federal and local legislation, regulations, laws, and international <br>
                            standards with the effective application of the standards of the ISO 9001:2015 Quality <br>
                            Management System.
                        </li>
                        <li>Ensure the quality of management processes, adjust, and update documents, and <br>
                            continuously improve the quality management system. <br>
                            This policy has been prepared and disseminated to the various interested parties <br>
                            through the various available means, and the responsibility for its implementation rests
                            <br>
                            with all employees working in the department. The management is committed to <br>
                            reviewing and updating it annually to ensure its effectiveness and compatibility with the
                            <br>
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
    name: "QualityPolicy",
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

.informationSecurityPageTopBorder {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0, 255, 68, 1) 100%);
}

.informationSecurityPageTopBorder h2 {
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

.paragraphContainer {
    width: 600px;
    height: 100%;
    /*background-color: #777777;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    word-break: break-all;
}

.paragraphContainer span {
    font-size: 16px;
    color: #282828;
    word-break: break-all;
}

.paragraphList {
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

    .informationSecurityPageTopBorder {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: linear-gradient(90deg, rgb(30, 89, 199) 0%, rgb(38, 163, 211) 50%, rgba(0, 255, 68, 1) 100%);
    }

    .informationSecurityPageTopBorder h2 {
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

    .paragraphContainer {
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