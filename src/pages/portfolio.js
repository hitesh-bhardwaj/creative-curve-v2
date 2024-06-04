import PageHero from "@/components/PageLayout/Portfolio/PageHero";
import Projects from "@/components/PageLayout/Portfolio/Projects";
import ImageScroll from "@/components/PageLayout/Portfolio/ImageScroll";

export default function portfolioPage () {
    return (
        <>
            <PageHero />
            <Projects />
            <ImageScroll />
        </>
    )
}