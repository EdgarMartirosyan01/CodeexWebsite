import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/components/bodyComponents/homePage/HomePage";
import ProductsPage from "@/components/bodyComponents/productsPage/ProductsPage";
import BlockchainPage from "@/components/bodyComponents/blockchainPage/BlockchainPage";
import WhyArmeniaPage from "@/components/bodyComponents/whyArmeniaPage/WhyArmeniaPage";
import CareersPage from "@/components/bodyComponents/careersPage/CareersPage";
import ContactPage from "@/components/bodyComponents/contactPage/ContactPage";
import BlogPage from "@/components/bodyComponents/blogPage/BlogPage";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'HomePage', component: HomePage,
        },
        {
            path: '/products', name: 'ProductsPage', component: ProductsPage,
        },
        {
            path: '/blockchain', name: 'BlockChainPage', component: BlockchainPage,
        },
        {
            path: '/armenia', name: 'WhyArmeniaPage', component: WhyArmeniaPage,
        },
        {
            path: '/careers', name: 'CareersPage', component: CareersPage,
        },
        {
            path: '/contact', name: 'ContactPage', component: ContactPage,
        },
        {
            path: '/blog', name: 'BlogPage', component: BlogPage,
        },
    ],
});


export default router;
