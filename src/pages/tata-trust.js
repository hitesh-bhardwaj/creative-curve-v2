import Hero from "@/components/PageLayout/PortfolioDetail/Hero";
import Overview from "@/components/PageLayout/PortfolioDetail/Overview";

export default function PortfolioDetail({}) {
    return (
        <main>
            <Hero 
                heading={"Tata Trust"}
                subheading={"The journey of a million smiles began in 1892 with Jamsetji Tata, the pioneer, visionary and founder of the Tata Group."}
                imgSrc={"/images/projects/tata-trust/hero.png"}
            />

            <Overview 
                content1={"In a country that is home to the world's second-largest population, when one of its largest enterprises providentially happens to be a philanthropic organisation, it raises hopes for a promising and sustainable future. For people across the country, the Tata Trusts symbolise humanitarianism and personify the prodigious force that advances new frontiers of social and economic development."}
                content2={"The journey of a million smiles began in 1892 with Jamsetji Tata, the pioneer, visionary and founder of the Tata Group, setting up the JN Tata Endowment for higher education of Indians."}
            />

            <section>
                <div className="container py-[10%]">
                    <div className="w-full rounded-[40px] overflow-hidden border-2 border-black/50">
                        <video className="w-full h-full cover" loading="lazy" loop poster="/images/projects/tata-trust/video-cover.png">
                            <source src="/images/projects/tata-trust/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
        </main>
    )
}