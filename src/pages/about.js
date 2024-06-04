import Achievement from "@/components/PageLayout/About/Achievement";
import BrandsWhite from "@/components/PageLayout/About/BrandsWhite";
import Marquee from "@/components/PageLayout/About/Marquee";
import PageHero from "@/components/PageLayout/About/PageHero";
import Showreel from "@/components/PageLayout/About/Showreel";
import Story from "@/components/PageLayout/About/Story";
import Testimonial from "@/components/PageLayout/About/Testimonial";

export default function aboutPage() {
    return (
        <>
            <PageHero />
            <Story />
            <BrandsWhite />
            <Showreel />
            <Achievement />
            <Marquee />
            <Testimonial />
        </>
    )
}