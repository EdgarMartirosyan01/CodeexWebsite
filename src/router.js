import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/components/bodyComponents/homePage/HomePage";
import ProductsPage from "@/components/bodyComponents/productsPage/ProductsPage";
import BlockchainPage from "@/components/bodyComponents/blockchainPage/BlockchainPage";
import WhyArmeniaPage from "@/components/bodyComponents/whyArmeniaPage/WhyArmeniaPage";
import CareersPage from "@/components/bodyComponents/careersPage/CareersPage";
import ContactPage from "@/components/bodyComponents/contactPage/ContactPage";
import BlogPage from "@/components/bodyComponents/blogPage/BlogPage";
import AboutPage from "@/components/bodyComponents/aboutPage/aboutCodeex/AboutPage";
import OutstaffingPage from "@/components/bodyComponents/aboutPage/outstaffingPage/OutstaffingPage";
import PortfolioPage from "@/components/bodyComponents/aboutPage/portfolioPage/PortfolioPage";
import TechnologyPage from "@/components/bodyComponents/aboutPage/technologyPage/TechnologyPage";
import VoneTheProduct from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/VoneTheProduct";
import GymStreetTheProduct from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/GymStreetTheProduct";
import GymNetworkTheProduct from "@/components/bodyComponents/otherComponents/productsDirectoryComponents/GymNetworkTheProduct";
import QualityPolicy from "@/components/bodyComponents/otherComponents/expertiseComponents/QualityPolicy";
import InformationSecurity from "@/components/bodyComponents/otherComponents/expertiseComponents/InformationSecurity";
import PrivacyPolicy from "@/components/bodyComponents/otherComponents/expertiseComponents/PrivacyPolicy";


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
        {
            path: '/about-us', name: 'AboutPage', component: AboutPage,
        },
        {
            path: '/outstaffing', name: 'OutstaffingPage', component: OutstaffingPage,
        },
        {
            path: '/portfolio', name: 'PortfolioPage', component: PortfolioPage,
        },
        {
            path: '/technologies', name: 'TechnologyPage', component: TechnologyPage,
        },
        {
            path: '/vone', name: 'VoneTheProduct', component: VoneTheProduct,
        },
        {
            path: '/gym-street', name: 'GymStreetTheProduct', component: GymStreetTheProduct,
        },
        {
            path: '/gym-network', name: 'GymNetworkTheProduct', component: GymNetworkTheProduct,
        },
        {
            path: '/quality-policy', name: 'QualityPolicy', component: QualityPolicy,
        },
        {
            path: '/information-security', name: 'InformationSecurity', component: InformationSecurity,
        },
        {
            path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy,
        },
    ],
});


export default router;
