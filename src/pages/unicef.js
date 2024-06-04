import Campaign from "@/components/PageLayout/PortfolioDetail/Campaign";
import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Hero 
                heading={"Unicef"}
                subheading={"Unicef Wants to Encourage a Sense of Stability for a Child."}
                imgSrc={"/images/projects/unicef/hero.png"}
            />

            <Overview 
                content1={"UNICEF works in the world's toughest places to reach the most disadvantaged children and adolescents - and to protect the rights of every child, everywhere. Across more than 190 countries and territories, we do whatever it takes to help children survive, thrive and fulfill their potential, from early childhood through adolescence. Before, during and after humanitarian emergencies, UNICEF is on the ground, bringing lifesaving help and hope to children and families."}
            />

            <Campaign  
                secSubHead={"From global branding trends to the nuances of digital storytelling, explore the world through our lens."}
                title={"Unicef"}
                img1={"/images/projects/unicef/image1.png"}
                img2={"/images/projects/unicef/image2.png"}
                img3={"/images/projects/unicef/image3.png"}
                content1={"UNICEF works in over 190 countries and territories to save children's lives, to defend their rights, and to help them fulfil their potential, from early childhood through adolescence."}
                content2={"Discover UNICEF's work for every child, everywhere"}
            />
        </main>
    )
}