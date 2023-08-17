<template>
  <section class="top-nav">
    <label class="menu-button-container" for="menu-toggle" >
      <div class="menu-button"></div>
    </label>
    <input id="menu-toggle" type="checkbox" @click="handleOpen"/>
    <ul class="menu" :class="{ 'open': isMenuOpen }" v-show="isMenuOpen">
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
    </ul>
  </section>
</template>

<script>
import AboutDropDown from "@/components/semantics/ComponentSections/AboutDropDown";
export default {
  name: "ToggleMenu",
  components: {AboutDropDown},
  props: {
    isMenuOpen: Boolean,
  },
  emits:["toggle-menu"],
  methods:{
    handleOpen(){
      this.$emit("toggle-menu")
    }
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
  },
};
</script>


<style>
* {
  box-sizing: border-box;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 50px;
  width: 710px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 700px;
}

.menu > li {
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
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
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: black;
  position: absolute;
  height: 4px;
  width: 30px;
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
  margin-top: 0;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0;
  transform: rotate(-405deg);
}

@media (max-width: 1020px) {
  .menu-button-container {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 69.5px;
    left: 40%;
    width: 160px;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
  }

  .menu li {
    list-style: none;
    color: black;
  }

  .menu-link {
    display: block;
    justify-content: center;
    padding: 0.5em 0;
    width: 160px;
    border-bottom: 0.1px solid gray;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  .menu-link:hover {
    background-color: rgba(47, 47, 224, 0.91);
    color: white;
  }
}
</style>

