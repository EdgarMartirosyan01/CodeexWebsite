<template>
  <div class="footerDivision">
    <div class="footerTopContainer">
      <div class="footerCodeexHistory">
        <img :src="codeexLogoWhite" alt="Codeex Logo">
        <p>
          {{ $t('footer.history') }}
        </p>
      </div>
      <div class="footerCodexServices">
          <div class="footerCodexServicesTWO">
              <FooterServices  title="PRODUCTS" :items="productItems" />
              <FooterServices title="COMPANY" :items="companyItems"/>
          </div>
          <div class="footerCodexServicesONE">
              <FooterServices title="EXPERTISE" :items="expertiseItems" />
          </div>
      </div>
    </div>

    <div class="footerBottomContainer">
       <div class="footerBottomContainerLogos">
          <div class="footerBottomContainerLogosSocialsClutch">
              <div class="footerBottomSoicals">
                <i  v-for="network in socialNetworks" :key="network.icon" :class="['fab', network.icon]" :style="{ color: network.color }"></i>
              </div>
              <div class="footerBottomClutch">
                <img :src="clutchReview" alt="Clutch Review">
              </div>
          </div>
          <div>
            <div class="footerBottomCertifications">
              <img :src="clutchCertification1" alt="Clutch Certification">
              <img :src="clutchCertification2" alt="Clutch Certification">
              <img :src="clutchCertification3" alt="Clutch Certification">
            </div>
          </div>
      </div>
      <div class="footerBottomContainerCopyright">
          <div class="footerBottomCopyright">
            <p>Copyright © 2023 Codeex. All rights reserved.</p>
          </div>
      </div>

    </div>
  </div>
</template>




<script>
import FooterServices from "@/components/semantics/ComponentSections/FooterServices";
import codeexLogoWhite from "/src/assets/images/logos/codeex-logo-white.svg"
import clutchReview from "/src/assets/images/logos/clutch-logo.png"
import clutchCertification1   from "/src/assets/images/logos/clutch-certified1.svg"
import clutchCertification2 from "/src/assets/images/logos/clutch-certified3.png"
import clutchCertification3 from "/src/assets/images/logos/clutch-certified2.png"

export default {
  name: "FooterComponent",
  components: {
    FooterServices,
  },
  computed: {
    expertiseItems() {
      return [
        this.$t('footer.services.expertiseSection.blockchain'),
        this.$t('footer.services.expertiseSection.technologies'),
        this.$t('footer.services.expertiseSection.outstaffing'),
        this.$t('footer.services.expertiseSection.qualityPolicy'),
        this.$t('footer.services.expertiseSection.informationSecurity'),
        this.$t('footer.services.expertiseSection.privacyPolicy')
      ];
    },
    productItems() {
        return [
          this.$t('footer.services.productSection.vone'),
          this.$t('footer.services.productSection.gymStreet'),
          this.$t('footer.services.productSection.gymNetwork')
        ]
      },
    companyItems() {
      return [
        this.$t('footer.services.companySection.aboutUs'),
        this.$t('footer.services.companySection.technologies'),
        this.$t('footer.services.companySection.careers'),
        this.$t('footer.services.companySection.blog')
      ]
    },
  },
  data() {
    return {
      codeexLogoWhite: codeexLogoWhite,
      clutchReview: clutchReview,
      clutchCertification1: clutchCertification1,
      clutchCertification2: clutchCertification2,
      clutchCertification3: clutchCertification3,

      socialNetworks: [
        { icon: "fa-linkedin-in", color: "white" },
        { icon: "fa-facebook-f", color: "white" },
        { icon: "fa-instagram", color: "white" },
      ],
    };
  },
}
</script>




<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.footerDivision {
  width: 100%;
  height: 60%;
  background: radial-gradient(circle at 10% 20%, #691ff4 0%, #3296fa 91%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .footerTopContainer {
    width: 80%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //background-color: blue;

    .footerCodeexHistory {
      width: 350px;
      height: 273.425px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      //background-color: gray;

      img {
        width: 20vw;
        height: 98.05px;
      }

      p {
        font-size: 17px;
        font-weight: bold;
        color: white;
        margin-bottom: 2vw;
      }
    }

    .footerCodexServices {
      min-width: 400px;
      height: 229.975px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      //background-color: darkcyan;
    }

    .footerCodexServicesTWO{
      width: 66%;
      height: 150px;
      display: flex;
      justify-content: space-between;
      //background-color: #3296fa;
    }
    .footerCodexServicesONE{
      width: 33%;
      height: 220px;
      //background-color: blueviolet;
      display: flex;
    }
  }

  .footerBottomContainer {
    width: 80%;
    height: 152.375px;
    border-top: 0.15vw solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: #282828;

    .footerBottomContainerLogos{
      display: flex;
      min-width: 400px;
      height: 110px;
      justify-content: space-around;
      align-items: center;
      //background-color: crimson;
    }
    .footerBottomContainerLogosSocialsClutch{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 345px;
      height: 100px;
      //background-color: blue;
    }
    .footerBottomContainerCopyright{
      width: 320px;
      height: 50px;
      align-items: center;
      justify-content: center;
      display: flex;
      //background-color: #3296fa;
    }

    .footerBottomSoicals {
      width: 125px;
      height: auto;
      //background-color: black;
      display: flex;
      justify-content: space-around;
      align-items: center;

      i {
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          font-size: 20px;
          transition: 0.2s;
        }
      }
    }

    .footerBottomClutch {
      width: 192.2px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      //background-color: white;

      img {
        width: 188px;
        height: 43px;
        cursor: pointer;

        &:hover {
          width: 192px;
          height: 47px;
          transition: 0.2s;
        }
      }
    }

    .footerBottomCertifications {
      width: 345px;
      height: 105px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //background-color: blueviolet;

      img {
        width: 97.445px;
        height: 97.445px;
        cursor: pointer;

        &:hover {
          width: 102.445px;
          height: 102.445px;
          transition: 0.2s;
        }
      }
    }

    .footerBottomCopyright {
      width: auto;
      margin-left: 5px;
      height: 25px;
      display: flex;
      align-items: center;
      //background-color: blueviolet;

      p {
        font-size: 16px;
        font-weight: bold;
        color: white;
      }
    }
  }
}



@media screen and (max-width: 1215px) {
  .footerDivision {
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    //background-color: green;
  }
  .footerDivision .footerTopContainer{
    width: 80%;
    //background-color: blue;
  }
  .footerDivision .footerTopContainer .footerCodeexHistory {
    width: 400px;
    margin-right: 20px;
    //background-color: #282828;
  }
  .footerDivision .footerTopContainer .footerCodeexHistory img {
    width: 210px;
    height: 100px;
    margin-bottom: 10px;
  }
  .footerDivision .footerTopContainer .footerCodeexHistory p {
    font-size: 16px;
  }

  .footerDivision .footerBottomContainer{
    width: 80%;
    height: 220px;
    //background-color: coral;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .footerDivision .footerBottomContainer .footerBottomContainerLogos{
    margin-top: 40px;
    height: 200px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: black;
  }
  .footerBottomContainerLogosSocialsClutch{
    //background-color: greenyellow;
  }
  .footerBottomContainerCopyright{
    //background-color: rebeccapurple;
    margin-top: 10px;
  }
}
@media screen and (max-width: 875px){
  .footerDivision {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footerDivision .footerBottomContainer .footerBottomContainerLogos{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 20%;
    //flex-direction: column;
    margin-top: 30px;
    //background-color: #ffc6c6;
  }
  .footerCodexServices{
    //background-color: coral;
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
  .footerDivision .footerTopContainer .footerCodexServicesTWO{
    display: flex;
    justify-content: space-around;
    //background-color: red;
  }
}
@media screen and (max-width: 868px) {
  .footerDivision {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .footerDivision .footerTopContainer{
    width: 90%;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    //background-color: #ffc6c6;
  }

  .footerDivision .footerBottomContainer{
    height: 290px;
    width: 90%;
    //background-color: coral;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footerDivision .footerTopContainer .footerCodeexHistory{
    width: 550px;
    height: 213.425px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    //background-color: black;
  }
  .footerDivision .footerTopContainer .footerCodeexHistory img{
    width: 300px;
    height: 120px;
  }
  .footerDivision .footerBottomContainer .footerBottomContainerLogos{
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 80%;
    flex-direction: column;
    //background-color: fuchsia;
  }

}
@media screen and (max-width: 614px) {
  .footerDivision {
    height: 120%;
    width: 100%;
   }
  .footerDivision .footerTopContainer{
    width: 90%;
    height: 600px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    //background-color: greenyellow;
  }
  .footerDivision .footerTopContainer .footerCodeexHistory{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    //background-color: rebeccapurple;
  }
  .footerDivision .footerTopContainer .footerCodexServices{
    width: 400px;
    margin-top: 10px;
    height: 409.975px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    //background-color: green;
  }
  .footerDivision .footerTopContainer .footerCodexServices .footerCodexServicesTWO{
    width: 350px;
    height: 150px;
    display: flex;
    //background-color: darkblue;
  }
  .footerBottomContainer {
    //background-color: red;
  }
}
</style>