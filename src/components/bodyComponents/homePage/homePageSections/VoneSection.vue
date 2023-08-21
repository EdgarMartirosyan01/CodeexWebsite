<template>
    <div class="VoneGlobeSection">
        <div class="voneDivison">
            <div class="voneContainer">
                <h2>{{ $t('homePage.vone.releaseVone') }}</h2>
                <img :src="voneLogo" alt="Vone Logo">
                <p>{{ $t('homePage.vone.voneParagraphFirst') }}</p>
                <p>{{ $t('homePage.vone.voneParagraphSecond') }}</p>
                <a target="_blank" href="https://ico.vone.global//">
                    <button>{{ $t('homePage.vone.learnMore') }}</button>
                </a>
            </div>
            <div class="V-Logo">
                <img :src="voneV" alt="Vone V">
            </div>
        </div>
    </div>
</template>


<script>
import voneLogo from "/src/assets/images/logos/voneLogo.svg"
import voneV from "/src/assets/images/logos/Vone-V.svg"

export default {
    name: "VoneSection",
    data() {
        return {
            voneLogo: voneLogo,
            voneV: voneV
        }
    }
}
</script>


<style scoped>
.VoneGlobeSection {
    margin-top: 69.12px;
    background-image: url(~@/assets/images/wallpapers/earth.jpg);
    width: 100%;
    height: 590px;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.voneDivison {
    position: relative;
    overflow: hidden;
    width: 55%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #691ff4;*/
}

.voneContainer {
    position: relative;
    overflow: hidden;
    width: 470px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    /*background-color: #ffc6c6;*/
}

.voneContainer h2 {
    font-size: 22px;
    font-weight: bold;
    color: white;
}

.voneContainer img {
    width: 400px;
    height: 120px;
}

.voneContainer p {
    font-size: 16px;
    font-weight: bold;
    color: white;
}

.voneContainer button {
    width: 185px;
    height: 50px;
    border-radius: 50px;
    border: 3px solid white;
    background: transparent;
    font-size: 18px;
    font-weight: bold;
    color: white;
    cursor: pointer;
}

.voneContainer button:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
}

.voneContainer a {
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-decoration: none;
}

.voneContainer button:hover a {
    color: black;
    transition: 0.3s;
}

.V-Logo {
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 550px;
}

.V-Logo img {
    width: 495px;
    height: 545px;
    opacity: 0.3;
}

@media screen and (max-width: 754px) {
    .voneContainer img {
        width: 350px;
        height: 80px;
    }

    .voneDivison {
        position: relative;
        overflow: hidden;
        width: 70%;
        height: 500px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        /*background-color: #691ff4;*/
    }

    .voneContainer {
        width: 470px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
}
</style>