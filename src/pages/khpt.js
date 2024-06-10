import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Pr from "@/components/PageLayout/PortfolioDetail/Pr";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Header />
            <Hero 
                heading={"KHPT"}
                subheading={"KHPT's model is comprised of three engines that demonstrate pathways to create scalable impact. We deploy the model through our multiple themes."}
                imgSrc={"/images/projects/khpt/hero.png"}
            />

            <Overview 
                content1={"KHPT is a not-for-profit organization which spearheads focused initiatives to improve the health and wellbeing of communities in India. In 2003, KHPT was founded with a mission to enhance the health and wellbeing of vulnerable communities and our journey started with the focus on reducing the prevalence of HIV in Karnataka, specifically among most at-risk populations."}
                content2={"These interventions were evidence-driven, systematically planned, rigorously implemented, and monitored. We succeeded in scaling impact well beyond Karnataka and KHPT became a learning site for innovative approaches."}
            />
            <Pr 
                img1={"/images/projects/khpt/pr-1.png"}
                img2={"/images/projects/khpt/pr-2.png"}
                img3={"/images/projects/khpt/pr-3.png"}
                img4={"/images/projects/khpt/pr-4.png"}
                img5={"/images/projects/khpt/pr-5.png"}
            />
            <Footer />
        </main>
    )
}