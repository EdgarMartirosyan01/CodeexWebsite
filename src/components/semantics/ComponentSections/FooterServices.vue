<template>
    <div class="footerServices">
        <h3 class="footerServicesTitle">{{ title }}</h3>
        <ul class="footerServicesList">
            <li v-for="(item, index) in items" :key="index">
                <router-link :to="item.path" class="footerServiceLink">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "FooterServices",
    props: {
        title: String,
        items: Array,
    },
};
</script>

<style scoped lang="scss">
.footerServices {
    width: 150px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    h3 {
        font-size: 26px;
        color: white;
    }

    ul {
        width: 100%;
        height: auto;
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        li {
            font-size: 18.432px;
            padding-top: 5px;
            font-weight: 500;
            cursor: pointer;
            list-style-type: none;

            a {
                color: white;
                text-decoration: none;

                &:hover {
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
