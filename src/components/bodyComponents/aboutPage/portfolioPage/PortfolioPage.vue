<template>
    <div class="productsPage">
        <h2>I</h2>
        <h2>N</h2>
        <h2>P</h2>
        <h2>R</h2>
        <h2>O</h2>
        <h2>G</h2>
        <h2>R</h2>
        <h2>E</h2>
        <h2>S</h2>
        <h2>S</h2>
    </div>
</template>

<script>
export default {
    name: "PortfolioPage"
}
</script>

<style scoped>
.productsPage {
    width: 100%;
    height: 2500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: linear-gradient(90deg, rgb(64, 54, 203) 0%, rgb(248, 241, 241) 50%, rgb(255, 0, 136) 100%);
}

.productsPage h2 {
    font-size: 130px;
    font-weight: bolder;
    margin-top: 100px;
    color: white;
}

.productsPage h2:hover {
    color: #414141;
}
</style>