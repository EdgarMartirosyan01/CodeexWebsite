<template>
    <div class="productsPage">
      <InProgress/>
    </div>
    <div class="productsPage">
        <InProgress/>
    </div>
    <div class="productsPage">
        <InProgress/>
    </div>
    <div class="productsPage">
        <InProgress/>
    </div>
</template>

<script>
import InProgress from "@/components/InProgress";
export default {
    name: "AboutPage",
    components: {InProgress}
}
</script>

<style scoped>
.productsPage {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>