import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Branding from "@/components/PageLayout/PortfolioDetail/Branding";
import Events from "@/components/PageLayout/PortfolioDetail/Events";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Hero 
                heading={"JHPIEGO"}
                subheading={"Every day, thousands of women, children and men die of preventable causes: cervical cancer, malaria, HIV, and complications from pregnancy and childbirth."}
                imgSrc={"/images/projects/jhpiego/hero.png"}
            />

            <Overview 
                content1={"In 1973, Jhpiego was founded at Johns Hopkins University. That year, we partnered with the US Agency for International Development to bring reproductive health breakthroughs to the world. Today, our US-based and international partners are public and private organizations, thought leaders, pioneers and visionaries. From then to now, some things have remained constant: the trust we enjoy together and our unwavering commitment to improving the health of women and families."}
            />

            <Branding 
                className={"bg-black text-white"}
                videoSrc={"/images/projects/jhpiego/video.mp4"}
                videoPoster={"/images/projects/jhpiego/video-cover.png"}
                img2={"/images/projects/jhpiego/brand-2.png"}
                img3={"/images/projects/jhpiego/brand-3.png"}
            />

            <Events 
                img1={"/images/projects/jhpiego/event-1.png"}
                img2={"/images/projects/jhpiego/event-2.png"}
                img3={"/images/projects/jhpiego/event-3.png"}
            />
        </main>
    )
}