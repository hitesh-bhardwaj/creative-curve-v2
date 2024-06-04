import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Pr from "@/components/PageLayout/PortfolioDetail/Pr";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Hero 
                heading={"ICMR"}
                subheading={"The Indian Council of Medical Research (ICMR), New Delhi, the apex body in India for the formulation."}
                imgSrc={"/images/projects/icmr/hero.png"}
            />

            <Overview 
                content1={"The ICMR has always attempted to address itself to the growing demands of scientific advances in biomedical research on the one hand, and to the need of finding practical solutions to the health problems of the country, on the other. The ICMR has come a long way from the days when it was known as the IRFA, but the Council is conscious of the fact that it still has miles to go in pursuit of scientific achievements as well as health targets."}
            />

            <Pr 
                img1={"/images/projects/icmr/pr-1.png"}
                img2={"/images/projects/icmr/pr-2.png"}
            />
        </main>
    )
}