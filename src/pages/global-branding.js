import BlogContent from "@/components/PageLayout/BlogDetail/BlogContent";
import PageHero from "@/components/PageLayout/BlogDetail/PageHero";
import RelatedArticles from "@/components/PageLayout/BlogDetail/RelatedArticles";

export default function BlogDetail() {
    return (
        <>
            <PageHero />
            <BlogContent />
            <RelatedArticles />
        </>
    )
}