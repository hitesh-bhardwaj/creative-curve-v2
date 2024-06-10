import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogContent from "@/components/PageLayout/BlogDetail/BlogContent";
import PageHero from "@/components/PageLayout/BlogDetail/PageHero";
import RelatedArticles from "@/components/PageLayout/BlogDetail/RelatedArticles";

export default function BlogDetail() {
    return (
        <>
        <main>
            <Header />
            <PageHero />
            <BlogContent />
            <RelatedArticles />
            <Footer />
        </main>
        </>
    )
}