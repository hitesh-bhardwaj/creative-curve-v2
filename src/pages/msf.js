import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Storyboard2 from "@/components/PageLayout/PortfolioDetail/Stroyboard2";

export default function PortfolioDetail({}) {

    const videoUrl = "https://res.cloudinary.com/djfyshazn/video/upload/v1717667565/msf-portfolio_glwhmw.mp4";

    return (
        <main>
            <Hero 
                heading={"MSF"}
                subheading={"MSF may speak out publicly to bring a forgotten crisis into view, or to denounce abuses, or challenge the diversion of assistance."}
                imgSrc={"/images/projects/msf/hero.png"}
            />

            <Overview 
                content1={"With more than 40 years of field experience as an emergency and humanitarian aid organisation, and as part of our need to reflect critically on our actions and improve our ways of working, several reflection centres have been set up within MSF."}
                content2={"Their role is mainly to reflect and challenge the organisation on past humanitarian and medical actions, draw lessons-learned and ways forward for future operations."}
                videoPoster={"/images/projects/msf/video-cover.png"}
                videoSrc={videoUrl}
            />

            <Storyboard2
                img1={"/images/projects/msf/story-1.png"}
                img2={"/images/projects/msf/story-2.png"}
                img3={"/images/projects/msf/story-3.png"}
                img4={"/images/projects/msf/story-4.png"}
                img5={"/images/projects/msf/story-5.png"}
                img6={"/images/projects/msf/story-6.png"}
            />

        </main>
    )
}