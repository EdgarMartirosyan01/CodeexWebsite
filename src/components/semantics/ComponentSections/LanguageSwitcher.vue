<template>
    <div class="selectorLanguageContainer">
        <select v-model="selectedLanguage" @change="changeLanguage">
            <option v-for="language in languages" :value="language.value" :key="language.value">
                {{ language.label }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "LanguageSwitcher",
    data() {
        return {
            selectedLanguage: "en",
            languages: [
                {label: "EN", value: "en"},
                {label: "AM", value: "am"},
                {label: "RU", value: "ru"},
            ],
        };
    },
    methods: {
        changeLanguage() {
            this.$emit('language-changed', this.selectedLanguage);
        },
    },
};
</script>


<style>
.selectorLanguageContainer select {
    width: 50px;
    height: 25px;
    border: none;
    background-color: #f3f3f3;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
}

.selectorLanguageContainer option {
    font-size: 12px;
    font-weight: bold;
}
</style>