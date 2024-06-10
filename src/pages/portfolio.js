import PageHero from "@/components/PageLayout/Portfolio/PageHero";
import Projects from "@/components/PageLayout/Portfolio/Projects";
import ImageScroll from "@/components/PageLayout/Portfolio/ImageScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Transition from "@/components/Transition";

export default function portfolioPage () {
    return (
        <>
        <main>
            <Header />
            <PageHero />
            <Projects />
            <ImageScroll />
            <Footer />
        </main>
        <Transition />
        </>
    )
}