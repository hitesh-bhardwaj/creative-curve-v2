import FeaturedArticle from "@/components/PageLayout/Blog/FeaturedArticle";
import PageHero from "@/components/PageLayout/Blog/PageHero";
import Listing from "@/components/PageLayout/Blog/Listing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Transition from "@/components/Transition";

export default function blogPage() {
    return (
        <>
        <main>
            <Header />
            <PageHero />
            <FeaturedArticle />
            <Listing />
            <Footer />
        </main>
        <Transition />
        </>
    )
}