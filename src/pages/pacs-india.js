import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";
import Events from "@/components/PageLayout/PortfolioDetail/Events";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Hero 
                heading={"PACS INDIA"}
                subheading={"Primary Agricultural Credit Societies are the grass root level arms of the short-term co-operative credit structure."}
                imgSrc={"/images/projects/pacs-india/hero.png"}
            />

            <Overview 
                content1={"Primary Agricultural Credit Societies are the grass root level arms of the short-term co-operative credit structure. PACS deals directly with the rural (agricultural) borrowers, give those loans and collect repayments of loans given and also undertake distribution and marketing functions."}
                content2={"They occupy a predominant position in the co-operative credit structure and form its base. It serves as the final link between the ultimate borrowers on the one hand and the higher financing agencies, namely the Scheduled Commercial Banks, and the RBI/NABARD on the other hand."}
            />

            <Events 
                img1={"/images/projects/pacs-india/event-1.png"}
                img2={"/images/projects/pacs-india/event-2.png"}
                img3={"/images/projects/pacs-india/event-3.png"}
                img4={"/images/projects/pacs-india/event-4.png"}
                img5={"/images/projects/pacs-india/event-5.png"}
            />
        </main>
    )
}