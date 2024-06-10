import PageHero from "@/components/PageLayout/Contact/PageHero";
import Info from "@/components/PageLayout/Contact/Info";
import FormContainer from "@/components/PageLayout/Contact/FormContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function contactPage() {
    return (
        <>
            <main>
                <Header />
                <PageHero />
                <Info />
                <FormContainer />
                <Footer />
            </main>
        </>
    )
}