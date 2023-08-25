<template>
    <div class="blogPage">
        <div class="blogPageContainer">
            <div class="blogTitle">
                <h2>CODEEX BLOG</h2>
            </div>
            <div class="blogPagePagination">
                <BlogCards
                    v-for="blog in paginatedBlogs"
                    :key="blog.id"
                    :image-src="blog.imageSrc"
                    :title="blog.title"
                    :date="blog.date"
                    :paragraph="blog.paragraph"
                />
                <div class="paginationElement">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="totalBlogs"
                        :page-size="pageSize"
                        @current-change="handlePageChange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCards from "@/components/bodyComponents/blogPage/BlogCards";
import BlogCardImage1 from "/src/assets/images/blogImages/blogImage1.webp"
import BlogCardImage2 from "/src/assets/images/blogImages/blogImage2.webp"
import BlogCardImage3 from "/src/assets/images/blogImages/blogImage3.webp"
import BlogCardImage4 from "/src/assets/images/blogImages/blogImage4.webp"
import BlogCardImage5 from "/src/assets/images/blogImages/blogImage5.webp"
import BlogCardImage6 from "/src/assets/images/blogImages/blogImage6.webp"
import BlogCardImage7 from "/src/assets/images/blogImages/blogImage7.webp"
import BlogCardImage8 from "/src/assets/images/blogImages/blogImage8.webp"
import BlogCardImage9 from "/src/assets/images/blogImages/blogImage9.webp"
import BlogCardImage10 from "/src/assets/images/blogImages/blogImage10.webp"
import BlogCardImage11 from "/src/assets/images/blogImages/blogImage11.webp"
import BlogCardImage12 from "/src/assets/images/blogImages/blogImage12.webp"
import BlogCardImage13 from "/src/assets/images/blogImages/blogImage13.webp"
import BlogCardImage14 from "/src/assets/images/blogImages/blogImage14.webp"
import BlogCardImage15 from "/src/assets/images/blogImages/blogImage15.webp"
import BlogCardImage16 from "/src/assets/images/blogImages/blogImage16.webp"

export default {
    name: "BlogPage",
    components: {
        BlogCards,
    },
    data() {
        return {
            blogs: [
                {
                    id: 1,
                    imageSrc: BlogCardImage1,
                    title: "Innovation Meets Speed at Codeex: 24-Hour Token Development",
                    date: "June 6, 2023",
                    paragraph: "Codeex is promising to have your crypto token ready for launch within just 24 hours. Codeex is simplifying the journey of crypto token development.",
                },
                {
                    id: 2,
                    imageSrc: BlogCardImage2,
                    title: "Coin Your Idea: An Easy Guide to Creating and Launching Your Own Cryptocurrency",
                    date: "May 10, 2023",
                    paragraph: "There are approximately 23k cryptocurrencies worldwide, and one of the reasons for this large number is that no central authority restricts the creation of cryptocurrencies. Anyone who wishes to create their own cryptocurrency is free to do so.",
                },
                {
                    id: 3,
                    imageSrc: BlogCardImage3,
                    title: "Your Business Needs Strong Blockchain Systems & This is Why",
                    date: "April 7, 2023",
                    paragraph: "Recent years have seen a rise in the utilization of blockchain technology and for good reasons. The way we carry out transactions and store data has been completely transformed by blockchain technology, from cryptocurrencies to non-fungible tokens (NFTs). Yet seems simply restricted to the art and finance sectors. Blockchain technology has all the power to revolutionize a variety of sectors, including the business world. In this article, we’ll…",
                },
                {
                    id: 4,
                    imageSrc: BlogCardImage4,
                    title: "Is ChatGPT a Game-Changer for the Business World?",
                    date: "March 24, 2023",
                    paragraph: "Businesses in the modern digital era continuously seek innovative ways to streamline their operations and gain an advantage over rivals. ChatGPT is one such innovation that is making headlines in the corporate sector. By altering how companies interact with customers, the hiring process, and job productivity, ChatGPT can completely reshape the business sector.",
                },
                {
                    id: 5,
                    imageSrc: BlogCardImage5,
                    title: "ISO 27001 & ISO 9001 Certifications – Demonstrating Commitment to Quality and Security",
                    date: "March 20, 2023",
                    paragraph: "Codeex, the innovative IT and blockchain company, has recently achieved ISO 27001 and ISO 9001 certifications. This achievement demonstrates the company's commitment to providing high-quality products and services while ensuring the security and confidentiality of its customers' data. In this article, we will explore how Codeex underwent a rigorous audit process to achieve these certifications.",
                },
                {
                    id: 6,
                    imageSrc: BlogCardImage6,
                    title: "Why is Metaverse a Big Deal? Revolutionizing the Way We Live",
                    date: "March 10, 2023",
                    paragraph: "The idea of the Metaverse has long been present, and numerous science fiction books and films have addressed it. However, it has only recently attracted a lot of attention as a result of technological developments, particularly in the fields of virtual reality (VR) and augmented reality (AR).",
                },
                {
                    id: 7,
                    imageSrc: BlogCardImage7,
                    title: "Unlocking the Potential of the Metaverse: Key Insights from the World Economic Forum’s Reports",
                    date: "February 2, 2023",
                    paragraph: "The World Economic Forum held a panel discussion last month in Davos at their annual meeting to summarize the one-year results of the Metaverse initiative formed the previous year. The initiative resulted in two reports, \"Interoperability in the Metaverse\" and \"Demystifying the Consumer Metaverse.\"",
                },
                {
                    id: 8,
                    imageSrc: BlogCardImage8,
                    title: "Navigating the Blockchain Jungle: How to Choose the Right Blockchain Development Company for Your Business",
                    date: "January 25, 2023",
                    paragraph: "With many Blockchain development companies, it can be difficult to know who to work with. We have highlighted tips for startups and enterprises looking for a development company in this article.",
                },
                {
                    id: 9,
                    imageSrc: BlogCardImage9,
                    title: "The Tech Trends of the Global Market in 2023",
                    date: "December 22, 2022",
                    paragraph: "Following and analyzing market trends is vital for people involved in modern technologies. We present 5 tech trends the world is moving forward in 2023.",
                },
                {
                    id: 10,
                    imageSrc: BlogCardImage10,
                    title: "What is Web3 and Why is it Important?",
                    date: "December 8, 2022",
                    paragraph: "Transition to the new digital age of Web3, is inevitable. Interest in Web3 is continuously increasing, and businesses rush to adapt to the new rules.",
                },
                {
                    id: 11,
                    imageSrc: BlogCardImage11,
                    title: "Most Innovative DeFi Project of 2022",
                    date: "November 15, 2022",
                    paragraph: "Many of the world’s largest companies use outstaffing services. Learn more about outstaffing and how it can benefit your company.",
                },
                {
                    id: 12,
                    imageSrc: BlogCardImage12,
                    title: "Outstaffing Armenia",
                    date: "July 12, 2022",
                    paragraph: "From 42 Yerevan to TUMO, Armenia is often deservingly called the world’s next technological hub and a great center for outstaffing.",
                },
                {
                    id: 13,
                    imageSrc: BlogCardImage13,
                    title: "Top 3 Benefits of Diversity for Software Companies",
                    date: "May 17, 2022",
                    paragraph: "Diversity can give your software company an edge in an increasingly competitive tech talent hiring process.",
                },
                {
                    id: 14,
                    imageSrc: BlogCardImage14,
                    title: "8 Ways People at Codeex Make Our Workplace More Eco-Friendly",
                    date: "April 22, 2022",
                    paragraph: "The team at Codeex has analyzed its contribution to the environment and we're happy to share with you the wrap-up!",
                },
                {
                    id: 15,
                    imageSrc: BlogCardImage15,
                    title: "Women in Tech Industry Share 3 Tips for Success",
                    date: "April 6, 2022",
                    paragraph: "Technology will change our lives in ways we can’t expect. However, the gender gap in tech jobs may slow down the process.",
                },
                {
                    id: 16,
                    imageSrc: BlogCardImage16,
                    title: "How to Choose a Software Development Company for Outstaffing?",
                    date: "March 4, 2022",
                    paragraph: "Many of the world’s largest companies use outstaffing services. Learn more about outstaffing and how it can benefit your company.",
                },
            ],
            currentPage: 1,
            pageSize: 5,
        };
    },
    computed: {
        totalBlogs() {
            return this.blogs.length;
        },
        paginatedBlogs() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.blogs.slice(startIndex, endIndex);
        },
    },
    methods: {
        handlePageChange(page) {
            this.currentPage = page;
        },
    },
};
</script>

<style scoped>
.blogPage {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 69.12px;
}
.blogPageContainer{
    width: 75%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    /*background-color: #ffc6c6;*/
}
.blogTitle {
    width: 95%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /*background-color: #ffabab;*/
}
.blogTitle h2{
    font-size: 30px;
    font-weight: bold;
    color: #282828;
}
.blogPagePagination{
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /*background-color: #ff7f7f;*/
}
.paginationElement{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>