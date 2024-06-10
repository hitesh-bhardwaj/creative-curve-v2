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
                heading={"White Ribbon Alliance"}
                subheading={"Most women and girls are never asked to inform the decisions that are made about their bodies, health, or minds."}
                imgSrc={"/images/projects/wra/hero.png"}
            />

            <Overview 
                content1={"Today's youth are tired of waiting for older generations to take actions on issues threatening their lives. They're taking matters into their own hands, becoming major actors for causes like climate change, racial and gender equality, universal healthcare and ending violence."}
                content2={"We're supporting the Partnership for Maternal, Newborn and Child Health's 1.8 Billion Young People for Change campaign by asking young people from all over about their needs."}
            />

            <Pr 
                img1={"/images/projects/wra/pr-1.png"}
                img2={"/images/projects/wra/pr-2.png"}
            />
            <Footer />
        </main>
    )
}