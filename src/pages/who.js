import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Storyboard from "@/components/PageLayout/PortfolioDetail/Stroyboard";

export default function PortfolioDetail({}) {

    const videoUrl="https://res.cloudinary.com/djfyshazn/video/upload/v1717667829/ljbphgvojmhucugh9doq.mp4"

    return (
        <main>
            <Hero 
                heading={"WHO"}
                subheading={"WHO leads global efforts to expand universal health coverage. We direct and coordinate the world's response to health emergencies."}
                imgSrc={"/images/projects/who/hero.png"}
            />

            <Overview 
                content1={"In April 1945, during the Conference to set up the United Nations (UN) held in San Francisco, representatives of Brazil and China proposed that an international health organization be established and a conference to frame its constitution convened. On 15 February 1946, the Economic and Social Council of the UN instructed the Secretary-General to convoke such a conference."}
                videoSrc={videoUrl}
                videoPoster={"/images/projects/who/video-cover.png"}
            />

            <Storyboard 
                img1={"/images/projects/who/story-1.png"}
                img2={"/images/projects/who/story-2.png"}
                img3={"/images/projects/who/story-3.png"}
                img4={"/images/projects/who/story-4.png"}
            />
        </main>
    )
}