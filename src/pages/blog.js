import FeaturedArticle from "@/components/PageLayout/Blog/FeaturedArticle";
import PageHero from "@/components/PageLayout/Blog/PageHero";
import Listing from "@/components/PageLayout/Blog/Listing";

export default function blogPage() {
    return (
        <>
            <PageHero />
            <FeaturedArticle />
            <Listing />
        </>
    )
}