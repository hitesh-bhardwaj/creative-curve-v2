import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageLayout/Service/PageHero";
import Services from "@/components/PageLayout/Service/Services";
import WhyUs from "@/components/PageLayout/Service/WhyUs";
import Transition from "@/components/Transition";

export default function servicePage() {
    return (
        <>
            <main>
                <Header />
                <PageHero />
                <Services />
                <WhyUs />
                <Footer />
            </main>
            <Transition />
        </>
    )
}