<template>
  <div class="navbar-fixed">
    <div class="navBarDivision">
      <div class="navBarContainer">
        <div class="codeexLogoContainer">
          <img :src="codeexLogo" alt="Codeex Logo">
        </div>

        <ToggleMenu :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />


        <div class="socialNetworksContainer">
          <i
              v-for="network in socialNetworks"
              :key="network.icon"
              :class="['fab', network.icon]"
              :style="{ color: network.color }"
          ></i>
        </div>
        <div class="languageSwitchingSelector">
          <LanguageSwitcher @language-changed="changeLanguage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import codeexLogo from "/src/assets/images/logos/codeex-logo.svg";
import LanguageSwitcher from "@/components/semantics/ComponentSections/LanguageSwitcher";
import ToggleMenu from "@/components/semantics/ComponentSections/ToggleMenu";

export default {
  name: "NavBar",
  components: {
    LanguageSwitcher,
    ToggleMenu,
  },
  computed: {
    socialNetworks() {
      return [
        { icon: "fa-linkedin-in", color: "#31363f" },
        { icon: "fa-facebook-f", color: "#272a30" },
        { icon: "fa-instagram", color: "#32373e" },
      ];
    },
  },
  data() {
    return {
      codeexLogo: codeexLogo,
      isMenuOpen: Boolean,
    };
  },
  methods: {
    changeLanguage(selectedLanguage) {
      this.$i18n.locale = selectedLanguage;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>






<style lang="scss">
.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .navBarDivision{
    width: 100%;
    height: 69.12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
    0 2px 2px rgba(0,0,0,0.12),
    0 4px 4px rgba(0,0,0,0.12),
    0 8px 8px rgba(0,0,0,0.12),
    0 16px 16px rgba(0,0,0,0.12);
    background-color: white;

    .navBarContainer{
      width: 85%;
      height: 22.66px;
      display: flex;
      align-items: center;
      justify-content: center;

      .codeexLogoContainer{
        width: 182px;
        height: 22.66px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 4vw;
      }
      .codeexLogoContainer img {
        width: 167px;
        height: 57.6px;
      }
      .navRoutesContainer{
        width: 700px;
        height: 22.66px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 5vw;
      }
      .navRoutesContainerRoutes{
        width: auto;
        border: none;
        cursor: pointer;
        font-size: 13px;
        font-weight: bold;
        background-color: white;
        color: #777777;
        margin-right: 15px;
      }
      .navRoutesContainerRoutes:hover {
        transition: 0.3s;
        color: rgba(47, 47, 224, 0.91);
      }
      .socialNetworksContainer{
        width: 100px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 5vw;
      }
      .socialNetworksContainer i {
        font-size: 20px;
        cursor: pointer;
        margin: 0.1vw;
      }
      .socialNetworksContainer i:hover {
        font-size: 22px;
        transition: 0.2s;
      }
    }
  }
  .languageSwitchingSelector{
    width: auto;
    height: auto;
  }
  .burgerIcon {
    display: none; // Hide the burger icon initially
    // Styling for the burger icon
    i {
      font-size: 24px;
      cursor: pointer;
    }
  }
  .hiddenRoutes {
    display: none;
  }
}
</style>

<style lang="scss">
@media screen and (max-width: 1020px) {
  .navbar-fixed .navBarDivision .navBarContainer .navRoutesContainer {
    display: none;
  }
}
</style>