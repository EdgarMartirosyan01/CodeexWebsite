<template>
    <div class="messageSection">
        <div class="messageTitle">
            <h2>GET IN TOUCH</h2>
        </div>
        <div class="messageForm">
            <div class="messageFormInputs">
                <input type="text" placeholder="Full Name">
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Company Name">
            </div>
            <div class="messageFormTextArea">
        <textarea placeholder="Message">

        </textarea>
            </div>
        </div>
        <div class="formButtonSection">
            <div class="formButtonSectionContainer">
                <button>
                    Send
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MessageSection"
}
</script>

<style scoped>
.messageSection {
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    /*background-color: wheat;*/
}

.messageTitle {
    width: 60%;
    height: 100px;
    /*background-color: #ffc6c6;*/
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.messageTitle h2 {
    font-size: 30px;
    font-weight: bolder;
    color: #282828;
}

.messageForm {
    width: 60%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /*background-color: #414141;*/
}

.messageFormInputs {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*background-color: #1ff4db;*/
}

.messageFormInputs input {
    width: 241px;
    height: 39px;
    border: none;
    border-bottom: 2px solid #282828;
    font-size: 18px;
}

.messageFormTextArea {
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    /*background-color: #691ff4;*/
}

.messageFormTextArea textarea {
    width: 100%;
    height: 303px;
    border: none;
    border-bottom: 2px solid #282828;
    font-size: 18px;
}

.formButtonSection {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.formButtonSectionContainer {
    width: 60%;
    height: 49px;
    align-items: center;
    justify-content: flex-start;
}

.formButtonSectionContainer button {
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

.formButtonSectionContainer button:hover {
    background-color: #540fd7;
    color: white;
    transition: 0.3s;
}

@media screen and (max-width: 1233px) {
    .messageSection {
        width: 100%;
        height: 800px;
    }

    .messageForm {
        width: 60%;
        height: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /*background-color: #414141;*/
    }

    .messageFormInputs {
        width: 100%;
        height: 250px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        /*background-color: #1ff4db;*/
    }

    .messageFormInputs input {
        width: 100%;
    }
}
</style>