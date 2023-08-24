<template>
    <div class="appMain">
        <NavBar/>
             <router-view/>
        <FooterComponent/>
    </div>
</template>

<script>
import NavBar from "@/components/semantics/NavBar";
import FooterComponent from "@/components/semantics/FooterComponent";

export default {
    name: 'App',
    components: {
        FooterComponent,
        NavBar,
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.appMain {
    height: 100vh;
}
a {
    text-decoration: none;
}
</style>