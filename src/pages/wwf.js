import Campaign from "@/components/PageLayout/PortfolioDetail/Campaign";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Hero 
                heading={"WWF"}
                subheading={"World Wide Fund for Nature-India (WWF India) was founded with the express objective of ensuring the conservation of the country's wildlife and natural habitats."}
                imgSrc={"/images/projects/wwf/hero.png"}
            />

            <Overview 
                content1={"WWF India's modest beginnings entailed operating out of a limited office space at Horn Bill House in Mumbai and very few full-time staff. The running of the office relied largely on the goodwill of the close-knit group of its founders, and other associates who voluntarily contributed their time and resources to the work of the organisation. This year, we mark 50 years of WWF in India, and here's to another 50 years of staying true to our mission of building a future."}
            />

            <Campaign  
                secSubHead={"From global branding trends to the nuances of digital storytelling, explore the world through our lens."}
                title={"WWF INDIA"}
                img1={"/images/projects/wwf/image1.png"}
                img2={"/images/projects/wwf/image2.png"}
                img3={"/images/projects/wwf/image3.png"}
                content1={"WWF created a movement that inspired people to care for nature. As environmental problems grew, so did people's concern. The need arose for a platform where citizens could contribute their time, effort and energy to conservation."}
                content2={"Nature Needs Helping Hands"}
            />
        </main>
    )
}