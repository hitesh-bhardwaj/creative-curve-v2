import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Branding from "@/components/PageLayout/PortfolioDetail/Branding";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Header />
            <Hero 
                heading={"CAF"}
                subheading={"Charities Aid Foundation (CAF) India, a leading not-for-profit organization set up to promote and support strategic giving in India."}
                imgSrc={"/images/projects/caf/hero.png"}
            />

            <Overview 
                content1={"Charities Aid Foundation (CAF) India, a leading not-for-profit organization set up to promote and support strategic giving in India. We are a part of the global network of CAF organizations with offices in 11 countries – United Kingdom, Australia, New Zealand, Brazil, Canada, Bulgaria, Russia, South Africa, Turkey and the United States of America -- that distributes funds to over 90 countries around the world."}
            />

            <Branding 
                img1={"/images/projects/caf/brand-1.png"}
                img2={"/images/projects/caf/brand-2.png"}
                img3={"/images/projects/caf/brand-3.png"}
            />
            <Footer />
        </main>
    )
}