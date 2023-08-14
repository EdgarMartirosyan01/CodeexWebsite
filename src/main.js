import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n"
import en from "@/locales/en"
import am from "@/locales/am"
import ru from "@/locales/ru"

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en,
        am,
        ru
    }
});

createApp(App)
    .use(i18n)
    .mount('#app');