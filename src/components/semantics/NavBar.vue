<template>
    <div class="web-nav">
        <div class="navBarDivision">
            <div class="navBarContainer">
                <router-link to="/">
                    <div class="codeexLogoContainer">
                        <img :src="codeexLogo" alt="Codeex Logo">
                    </div>
                </router-link>

                <router-link class="navRoutesContainerRoutes"  to="/">{{ $t('navbar.home') }}</router-link>
                <AboutDropDown class="navRoutesContainerRoutes"/>
                <router-link
                    class="navRoutesContainerRoutes"
                    v-for="route in navigationRoutes"
                    :key="route.path"
                    :to="route.path"
                >
                    {{ route.label }}
                </router-link>

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




    <section class="mobile-nav">
                <router-link to="/">
                    <div class="mobile-codeex-logo">
                        <img :src="codeexLogo" alt="Codeex Logo">
                    </div>
                </router-link>
        <div class="mobile-nav-right-side">
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li>
                    <router-link to="/">{{ $t('navbar.home') }}</router-link>
                </li>
                <li>
                    <a>
                        <AboutDropDown />
                    </a>
                </li>
                <li v-for="route in navigationRoutes" :key="route.path">
                    <router-link :to="route.path" v-if="!route.showDropdown">
                        {{ route.label }}
                    </router-link>
                </li>
            </ul>
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
    </section>
</template>



<script>
import codeexLogo from "/src/assets/images/logos/codeex-logo.svg";
import LanguageSwitcher from "@/components/semantics/ComponentSections/LanguageSwitcher";
import AboutDropDown from "@/components/semantics/ComponentSections/AboutDropDown";

export default {
  name: "NavBar",
  components: {
    LanguageSwitcher,
    AboutDropDown
  },
  computed: {
      navigationRoutes() {
          return [
              { path: "/products", label: this.$t("navbar.products") },
              { path: "/blockchain", label: this.$t("navbar.blockchain") },
              { path: "/armenia", label: this.$t("navbar.whyArmenia") },
              { path: "/careers", label: this.$t("navbar.careers") },
              { path: "/contact", label: this.$t("navbar.contact") },
              { path: "/blog", label: this.$t("navbar.blog") },
          ];
      },
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







<!--Styles for The Web Navbar-->
<style scoped lang="scss">
.web-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    .navBarDivision {
        width: 100%;
        height: 69.12px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
        0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12),
        0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
        background-color: white;

        .navBarContainer {
            width: 85%;
            height: 22.66px;
            display: flex;
            align-items: center;
            justify-content: center;

            .codeexLogoContainer {
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

            .navRoutesContainer {
                width: 700px;
                height: 22.66px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-right: 5vw;
            }

            .navRoutesContainerRoutes {
                width: auto;
                border: none;
                cursor: pointer;
                font-size: 13px;
                font-weight: bold;
                background-color: white;
                color: #777777;
                text-decoration: none;
                margin-right: 15px;
            }
            .navRoutesContainerRoutes:active {
                color: rgba(47, 47, 224, 0.91);
            }

            .navRoutesContainerRoutes:hover {
                transition: 0.3s;
                color: rgba(47, 47, 224, 0.91);
            }

            .socialNetworksContainer {
                width: 100px;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: 50px;
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

    .languageSwitchingSelector {
        width: 50px;
        height: auto;
        margin-left: 20px;
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
@media screen and (max-width: 1023px) {
    .web-nav{
        display: none;
    }
}
@media screen and (min-width: 1023px){
    .mobile-nav {
        display: none;
    }
}
</style>


<!--Styles for The Mobile Navbar-->
<style lang="scss" >
* {
    font-family: "Raleway";
    box-sizing: border-box;
}

.mobile-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: black;
    height: 69.12px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12),
    0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: white;
}

.mobile-nav-right-side{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    //background-color: salmon;
}

.mobile-codeex-logo{
    width: 182px;
    height: 57.66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //margin-right: 4vw;
    //background-color: #ffc6c6;
}
.mobile-codeex-logo img {
    width: 167px;
    height: 57.6px;
}

.menu {
    display: flex;
    //list-style-type: none;
}

.menu > li {
    margin: 0 1rem;
    overflow: hidden;
}

.menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background-color: #ffc6c6;
}

#menu-toggle {
    display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
    display: block;
    background-color: #333333;
    position: absolute;
    height: 5px;
    width: 34px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
}

.menu-button::before {
    content: '';
    margin-top: -8px;
}

.menu-button::after {
    content: '';
    margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
}

.socialNetworksContainer {
    width: 150px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
}

.socialNetworksContainer i {
    font-size: 21px;
    cursor: pointer;
    margin: 0.1vw;
}

.socialNetworksContainer i:hover {
    font-size: 22px;
    transition: 0.2s;
}

@media (min-width: 1023px) {
    .mobile-nav{
        display: none;
    }
}
@media (max-width: 1023px) {
    .menu-button-container {
        display: flex;
    }
    .menu {
        position: absolute;
        top: 0;
        margin-top: 69.12px;
        right: 0;
        flex-direction: column;
        width: 50%;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
        0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12),
        0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
        z-index: 100;
    }
    #menu-toggle ~ .menu li {
        height: 0;
        margin: 0;
        padding: 0;
        border: 0;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        background-color: white;
        color: #282828;
        width: 100%;
    }
    #menu-toggle:checked ~ .menu li {
        border-top: 1.5px solid #333;
        height: 2.5em;
        padding: 0.5em;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu li a:hover {
        background-color: #eee !important;
        color: #000 !important;
    }

    .menu li a {
        display: block;
        font-size: 13px;
        width: 100%;
        height: 100%;
        font-weight: bold;
        padding: 0.5em 0;
        text-align: center;
        text-decoration: none !important;
        color: #777777 !important;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .menu > li:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
}
</style>