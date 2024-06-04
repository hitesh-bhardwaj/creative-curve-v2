import PageHero from "@/components/PageLayout/Contact/PageHero";
import Info from "@/components/PageLayout/Contact/Info";
import FormContainer from "@/components/PageLayout/Contact/FormContainer";

export default function contactPage() {
    return (
        <>
            <main>
                <PageHero />
                <Info />
                <FormContainer />
            </main>
        </>
    )
}